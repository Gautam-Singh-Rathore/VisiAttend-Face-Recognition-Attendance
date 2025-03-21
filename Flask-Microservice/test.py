import cv2
import face_recognition
import numpy as np
import os

# Path to directory containing student images
KNOWN_FACES_DIR = "known_faces"

# Load known faces
known_face_encodings = []
known_face_names = []

def load_known_faces():
    global known_face_encodings, known_face_names
    known_face_encodings = []
    known_face_names = []

    for filename in os.listdir(KNOWN_FACES_DIR):
        if filename.endswith((".jpg", ".png", ".jpeg")):
            img_path = os.path.join(KNOWN_FACES_DIR, filename)
            img = face_recognition.load_image_file(img_path)
            encoding = face_recognition.face_encodings(img)

            if encoding:
                known_face_encodings.append(encoding[0])
                known_face_names.append(os.path.splitext(filename)[0])  # Use filename as student name

# Load known faces
load_known_faces()

# Open webcam
video_capture = cv2.VideoCapture(0)

while True:
    # Read a frame from webcam
    ret, frame = video_capture.read()

    # Convert frame to RGB (OpenCV uses BGR)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    # Detect faces
    face_locations = face_recognition.face_locations(rgb_frame)
    face_encodings = face_recognition.face_encodings(rgb_frame, face_locations)

    for (top, right, bottom, left), encoding in zip(face_locations, face_encodings):
        matches = face_recognition.compare_faces(known_face_encodings, encoding, tolerance=0.5)
        name = "Unknown"

        if True in matches:
            matched_index = np.argmin(face_recognition.face_distance(known_face_encodings, encoding))
            name = known_face_names[matched_index]

        # Draw rectangle around face
        cv2.rectangle(frame, (left, top), (right, bottom), (0, 255, 0), 2)

        # Display name below face
        cv2.putText(frame, name, (left, bottom + 20), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (255, 255, 255), 2)

    # Show video feed
    cv2.imshow("Face Recognition", frame)

    # Exit on pressing 'q'
    if cv2.waitKey(1) & 0xFF == ord('q'):
        break

# Cleanup
video_capture.release()
cv2.destroyAllWindows()
