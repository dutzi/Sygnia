import os

DEBUG = True

STATIC_FOLDER = os.path.join((os.path.dirname(__file__)), 'client')
TEMPLATE_FOLDER = os.path.join(STATIC_FOLDER, 'app')

IP = '127.0.0.1'
PORT = 3001
