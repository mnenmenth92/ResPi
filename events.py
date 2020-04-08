import global_data
from fan_driver import FanDriver
import socketio
import eventlet


eventlet.monkey_patch()
sio = socketio.Server(async_mode='eventlet')


# global data init
global_data = global_data.global_data(sio)  # maslo maslane


# optivent/ fan handling:
fan_driver = FanDriver(global_data)

# common events
@sio.event
def stop_action(sid):
    print('stopped')
    fan_driver.stop_loop()
    global_data.sequence_type = 'idle'

# AC events
@sio.event
def inc_ac(sid):
   global_data.inc_ac()
   fan_driver.update_times()

@sio.event
def dec_ac(sid):
    global_data.dec_ac()
    fan_driver.update_times()  # on the fly update
@sio.event
def inc_ac_rate(sid):
    global_data.inc_ac_rate()
    fan_driver.update_times()  # on the fly update
@sio.event
def dec_ac_rate(sid):
    global_data.dec_ac_rate()
    fan_driver.update_times()  # on the fly update
@sio.event
def start_ac(sid):
    print('AC started')
    global_data.sequence_type = 'ac'
    fan_driver.stop_loop()  # stop previous loop if running
    global_data.calc_AC_times()
    fan_driver.run_in_loop()  # on the fly update

# TV events
@sio.event
def inc_tv(sid):
    global_data.inc_tv()
    fan_driver.update_times()  # on the fly update
@sio.event
def dec_tv(sid):
    global_data.dec_tv()
    fan_driver.update_times()  # on the fly update
@sio.event
def inc_tv_rate(sid):
    global_data.inc_tv_rate()
    fan_driver.update_times()  # on the fly update
@sio.event
def dec_tv_rate(sid):
    global_data.dec_tv_rate()
    fan_driver.update_times()  # on the fly update
@sio.event
def start_tv(sid):
    print('TV started')
    global_data.sequence_type = 'tv'
    fan_driver.stop_loop()  # stop previous loop if running
    global_data.calc_TV_times()
    fan_driver.run_in_loop()

# status
@sio.event
def send_status_ac(sid):
    sio.emit('ac_value', global_data.ac_value)
    sio.emit('ac_rate', global_data.ac_rate)
    sio.emit('start_status', fan_driver.current_state,)

@sio.event
def send_status_tv(sid):
    sio.emit('tv_value', global_data.tv_value)
    sio.emit('tv_rate', global_data.tv_rate)
    sio.emit('start_status', fan_driver.current_state,)


#example
@sio.event
def optivent_status(sid):
    print('Current fan status ' + str(fan_driver.current_state))
    sio.emit('optivent_status_resp', data={'optivent_is_running': fan_driver.current_state})



######## CONNECTION ##########
@sio.event
def disconnect_request(sid):
    sio.disconnect(sid)


@sio.event
def connect(sid, environ):
    sio.emit("Webpage_loaded")
    print('connected')


@sio.event
def disconnect(sid):
    print('Client disconnected')
