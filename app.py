import socketio
import eventlet
from events import sio



STATIC_FILES = {
    '/': 'static/html/TV.html',
    '/TV.html': 'static/html/TV.html',
    '/AC.html': 'static/html/AC.html',
    '/static': 'static'

}

app = socketio.WSGIApp(sio, static_files=STATIC_FILES)

if __name__ == '__main__':
    print('Start')
    try:
        eventlet.wsgi.server(eventlet.listen(('', 8080)), app).serve_forever()
    except AttributeError:
        pass
    finally:
        print('App closed')