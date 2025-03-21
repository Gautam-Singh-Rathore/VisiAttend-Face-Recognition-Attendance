import React from "react";

const About = () => {
  return (
    <div className="pt-[12vh] bg-gray-50 pb-8">
      {/* About Us */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-8 pb-8 min-h-[70vh]">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8 border-b-2 border-[#0843A3]">
          About Us
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* About Us Content */}
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>VisiAttend</strong> is a cutting-edge AI-powered facial 
              recognition attendance system designed for schools, offices, hospitals, 
              and factories. Our technology eliminates manual roll calls, ID swiping, 
              and biometric scans, making attendance tracking seamless, accurate, and secure.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-gray-800">Key Features:</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed">
              <li>
                <strong>Automatic Attendance:</strong> Instantly marks attendance using 
                real-time facial recognition.
              </li>
              <li>
                <strong>Real-Time Monitoring:</strong> Live dashboard for admins to track 
                attendance records.
              </li>
              <li>
                <strong>IoT-Enabled Smart System:</strong> Integrates with entry gates, 
                security systems, and RFID access.
              </li>
              <li>
                <strong>Fraud-Proof Accuracy:</strong> Prevents proxy attendance with 
                advanced AI algorithms.
              </li>
              <li>
                <strong>Seamless Integration:</strong> Works with HRMS, LMS, and payroll systems.
              </li>
              <li>
                <strong>Detailed Reports & Insights:</strong> Provides analytics for better 
                decision-making.
              </li>
            </ul>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Experience next-gen attendance tracking with VisiAttend and 
              enhance efficiency, security, and automation in your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
