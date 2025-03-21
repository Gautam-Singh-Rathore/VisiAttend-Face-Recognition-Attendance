import React from "react";

const FutureScope = () => {
  return (
    <div className="pt-[12vh] bg-gray-50 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8 mt-8 pb-8 min-h-[70vh]">
        <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8 border-b-2 border-[#0843A3]">
          Future Scope
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed">
              As technology evolves, our AI-powered facial recognition attendance system
              has immense potential for growth and innovation. We aim to enhance automation, 
              improve security, and integrate advanced features to redefine attendance tracking 
              across industries.
            </p>

            <h2 className="text-xl font-semibold mt-6 text-gray-800">Key Future Enhancements:</h2>
            <ul className="list-disc pl-6 text-lg text-gray-700 leading-relaxed">
              <li>
                <strong>AI-Powered Behavior Analysis:</strong> Detect patterns in attendance 
                to identify trends and anomalies.
              </li>
              <li>
                <strong>Voice & Emotion Recognition:</strong> Enhance security and engagement 
                by integrating voice authentication and emotional analysis.
              </li>
              <li>
                <strong>Cloud-Based Centralized Database:</strong> Enable seamless access to 
                attendance data from any location in real time.
              </li>
              <li>
                <strong>Blockchain for Data Security:</strong> Implement blockchain technology 
                to ensure tamper-proof attendance records and prevent unauthorized modifications.
              </li>
              <li>
                <strong>Multi-Factor Authentication (MFA):</strong> Improve security by combining 
                facial recognition with other authentication methods.
              </li>
              <li>
                <strong>IoT-Driven Smart Classrooms & Workspaces:</strong> Expand integration with 
                smart doors, biometric devices, and RFID systems for fully automated environments.
              </li>
              <li>
                <strong>Cross-Industry Adoption:</strong> Extend our solution beyond education and 
                workplaces to airports, events, and public transport for seamless identity verification.
              </li>
            </ul>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Our vision is to revolutionize attendance tracking by merging AI, IoT, and data security. 
              With continuous improvements and cutting-edge innovations, we aim to build a 
              future-ready, intelligent attendance system that enhances efficiency, accuracy, and user experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FutureScope;
