import React from "react";

const HomeComponent = () => {
  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:px-20 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
        About VisiAttend
      </h2>
      <p className="text-gray-700 text-center max-w-3xl leading-relaxed md:text-lg">
        VisiAttend is a smart attendance management system that leverages 
        **facial recognition** to automate the process of tracking student 
        attendance. Teachers can effortlessly mark attendance by uploading 
        classroom images, while students can view their attendance records 
        in real-time.  
      </p>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            📸 Face Recognition
          </h3>
          <p className="text-gray-600">
            Uses AI-powered facial recognition for seamless attendance tracking.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            📊 Attendance Insights
          </h3>
          <p className="text-gray-600">
            Students can monitor their attendance records with real-time updates.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            🏫 Easy for Teachers
          </h3>
          <p className="text-gray-600">
            Teachers can upload images, and the system handles the rest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
