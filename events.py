import global_data
from fan_driver import FanDriver
import socketio
import eventlet


eventlet.monkey_patch()
sio = socketio.Server(async_mode='eventlet')




# optivent/ fan handling:
fan_driver = FanDriver()

@sio.event
def actual_page(sid, data):
    print('Selected page: ' + data)
    global_data.current_site = data


@sio.event
def run_optivent(sid):
    print('Button True')
    # fan_driver.set_state(True) # old version
    fan_driver.run_in_loop()

@sio.event
def stop_optivent(sid):
    print('Button False')
    # fan_driver.set_state(False) # old version
    fan_driver.stop_loop()


@sio.event
def get_massages(sid):
    print("get massages")

    sio.emit('massages_resp', data={'names': [], 'pressure': 0, 'current': 'NoMassage',
                                    'intensity': 1, 'massage_is_running': False,
                                    'massage_active': False})

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
