import global_data
from fan_driver import FanDriver
import socketio
import eventlet

eventlet.monkey_patch()
sio = socketio.Server(async_mode='eventlet')

# global data init
global_data = global_data.global_data(sio)

# optivent/ fan handling:
fan_driver = FanDriver(global_data)


# common events
# stop both TV and AC action
@sio.event
def stop_action(sid):
    print('stopped')
    fan_driver.stop_loop()
    global_data.sequence_type = 'idle'


# AC mode events
# increment ac mode level
@sio.event
def inc_ac(sid):
    global_data.inc_ac()
    fan_driver.update_times()


# decrement ac mode level
@sio.event
def dec_ac(sid):
    global_data.dec_ac()
    fan_driver.update_times()  # on the fly update


# increment AC mode rate
@sio.event
def inc_ac_rate(sid):
    global_data.inc_ac_rate()
    fan_driver.update_times()  # on the fly update


# decrement AC mode rate
@sio.event
def dec_ac_rate(sid):
    global_data.dec_ac_rate()
    fan_driver.update_times()  # on the fly update


# start AC mode action
@sio.event
def start_ac(sid):
    print('AC started')
    global_data.sequence_type = 'ac'
    fan_driver.stop_loop()  # stop previous loop if running
    global_data.calc_AC_times()
    fan_driver.run_in_loop()  # on the fly update


# TV mode events
# increment TV mode level
@sio.event
def inc_tv(sid):
    global_data.inc_tv()
    fan_driver.update_times()  # on the fly update


# decrement TV mode level
@sio.event
def dec_tv(sid):
    global_data.dec_tv()
    fan_driver.update_times()  # on the fly update


# increment TV mode rate
@sio.event
def inc_tv_rate(sid):
    global_data.inc_tv_rate()
    fan_driver.update_times()  # on the fly update

# decrement TV mode rate
@sio.event
def dec_tv_rate(sid):
    global_data.dec_tv_rate()
    fan_driver.update_times()  # on the fly update


# start TV mode
@sio.event
def start_tv(sid):
    print('TV started')
    global_data.sequence_type = 'tv'
    fan_driver.stop_loop()  # stop previous loop if running
    global_data.calc_TV_times()
    fan_driver.run_in_loop()


# status
# send AC mode status
@sio.event
def send_status_ac(sid):
    sio.emit('ac_value', global_data.ac_value)
    sio.emit('ac_rate', global_data.ac_rate)
    sio.emit('start_status', fan_driver.current_state, )


# send TV mode status
@sio.event
def send_status_tv(sid):
    sio.emit('tv_value', global_data.tv_value)
    sio.emit('tv_rate', global_data.tv_rate)
    sio.emit('start_status', fan_driver.current_state, )


# connection
# disconnect request
@sio.event
def disconnect_request(sid):
    sio.disconnect(sid)


# webpage connected
@sio.event
def connect(sid, environ):
    sio.emit("Webpage_loaded")
    print('connected')


# webpage disconnected
@sio.event
def disconnect(sid):
    print('Client disconnected')
