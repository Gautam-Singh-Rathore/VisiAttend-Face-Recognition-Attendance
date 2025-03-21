import face_recognition
import numpy as np
import os
import cv2
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Path to the main known faces directory
KNOWN_FACES_DIR = "known_faces"

@app.route("/detect", methods=["POST"])
def detect_faces():
    if "class_id" not in request.form:
        return jsonify({"error": "No class_id provided"}), 400
    if "image" not in request.files:
        return jsonify({"error": "No image file uploaded"}), 400

    class_id = request.form["class_id"]
    file = request.files["image"]

    class_folder = os.path.join(KNOWN_FACES_DIR, class_id)

    if not os.path.exists(class_folder):
        return jsonify({"error": f"Class ID '{class_id}' not found"}), 404

    # Load known faces for the given class
    known_face_encodings = []
    known_face_roll_numbers = []

    for filename in os.listdir(class_folder):
        if filename.endswith((".jpg", ".png", ".jpeg")):
            img_path = os.path.join(class_folder, filename)
            img = face_recognition.load_image_file(img_path)
            encoding = face_recognition.face_encodings(img)

            if encoding:
                known_face_encodings.append(encoding[0])
                try:
                    roll_number = int(os.path.splitext(filename)[0])  # Convert roll number to int
                    known_face_roll_numbers.append(roll_number)
                except ValueError:
                    print(f"Skipping invalid filename (not an integer): {filename}")

    # Load uploaded image
    image = face_recognition.load_image_file(file)

    # Detect faces in uploaded image
    face_locations = face_recognition.face_locations(image)
    face_encodings = face_recognition.face_encodings(image, face_locations)

    recognized_roll_numbers = []

    for encoding in face_encodings:
        matches = face_recognition.compare_faces(known_face_encodings, encoding, tolerance=0.5)

        if True in matches:
            matched_index = np.argmin(face_recognition.face_distance(known_face_encodings, encoding))
            recognized_roll_numbers.append(known_face_roll_numbers[matched_index])  # Store as int

    return jsonify({"recognized_students": recognized_roll_numbers})  # Returns a list of integers

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
