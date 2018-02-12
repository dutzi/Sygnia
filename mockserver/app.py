from flask import Flask, send_from_directory
from flask_cors import CORS

from mockserver import config
from mockserver.views import app_views


app = Flask(__name__.split('.')[0])
app.debug = config.DEBUG
app.template_folder = config.TEMPLATE_FOLDER


@app.route('/media/<path:filename>')
def send_media(filename):
    return send_from_directory(config.STATIC_FOLDER, filename)

app.register_blueprint(app_views)
CORS(app)

if __name__ == '__main__':
    app.run(host=config.IP, port=config.PORT)
