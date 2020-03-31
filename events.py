import global_data
from fan_driver import FanDriver
import socketio
import eventlet


eventlet.monkey_patch()
sio = socketio.Server(async_mode='eventlet')




# optivent/ fan handling:
fan_driver = FanDriver()

# AC events
@sio.event
def inc_ac(sid):
    print('inc_ac')

@sio.event
def dec_ac(sid):
    print('dec_ac')

@sio.event
def inc_ac_rate(sid):
    print('inc_ac_rate')

@sio.event
def dec_ac_rate(sid):
    print('dec_ac_rate')

@sio.event
def start_ac(sid):
    print('start_ac')

# TV events
@sio.event
def inc_tv(sid):
    print('inc_tv')

@sio.event
def dec_tv(sid):
    print('dec_tv')

@sio.event
def inc_tv_rate(sid):
    print('inc_tv_rate')

@sio.event
def dec_tv_rate(sid):
    print('dec_tv_rate')

@sio.event
def start_tv(sid):
    print('start_tv')




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
