import React, { useState } from "react";
import toast from "react-hot-toast";
import { IoLogoInstagram } from "react-icons/io5";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && phone && email && desc) {
      console.log("Success");
      toast.success("Request Sent");
      setName("");
      setPhone("");
      setEmail("");
      setDesc("");
    } else {
      console.log("Failed");
      toast.error("All fields are required");
    }
  };

  return (
    <div className="pt-[12vh] bg-gray-50 pb-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8  pb-8 min-h-[70vh]">
        {/* Header */}
        <h1 className="text-4xl font text-center text-gray mb-8 border-b-2 border-[#0843A3] pt-8 font-semibold">
          Contact Us
        </h1>

        <div className="max-w-3xl mx-auto px-4 py-8 min-h-screen">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">
              Rishabh Jain
              </h3>
              <p className="text-gray-600 mb-2">Email: rishabhmaha21@gmail.com</p>
              <a
                href="http://www.linkedin.com/in/rishabh-jain-36b69b2ab"
                className="text-blue-500"
              >
                LinkedIn
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Shubham Singh</h3>
              <p className="text-gray-600 mb-2">
               Email: shubhamsingh27687@gmail.com
              </p>
              <a
                href="https://www.linkedin.com/in/shubham-singh-485b28276"
                className="text-blue-500"
              >
                LinkedIn
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Mukul Kinker</h3>
              <p className="text-gray-600 mb-2">
                Email: kinkermukul@gmail.com
              </p>
              <a
                href="https://www.linkedin.com/in/mukul-kinker-572262322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-blue-500"
              >
                LinkedIn
              </a>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">Muskan Jethwani              </h3>
              <p className="text-gray-600 mb-2">
               Email: jethwanimuskan23@gmail.com
              </p>
              <a
                href="https://www.linkedin.com/in/muskan-jethwani-5550922aa"
                className="text-blue-500"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
