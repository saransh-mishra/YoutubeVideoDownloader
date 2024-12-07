from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from pytube import YouTube
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/video-details', methods=['POST'])
def get_video_details():
    data = request.json
    link = data.get('link')
    
    if not link:
        return jsonify({"error": "No link provided"}), 400

    try:
        y_tube = YouTube(link)
        video_details = {
            'title': y_tube.title,
            'streams': [(i, str(stream)) for i, stream in enumerate(y_tube.streams.filter(progressive=True))]
        }
        return jsonify(video_details)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

@app.route('/api/download-video', methods=['POST'])
def download_video():
    data = request.json
    link = data.get('link')
    stream_index = data.get('streamIndex')

    if not link or stream_index is None:
        return jsonify({"error": "Invalid request"}), 400

    try:
        y_tube = YouTube(link)
        stream = y_tube.streams.filter(progressive=True)[stream_index]
        file_path = stream.download()

        return send_file(file_path, as_attachment=True)

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)

