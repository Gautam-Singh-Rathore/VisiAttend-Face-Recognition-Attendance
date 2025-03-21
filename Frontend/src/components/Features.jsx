import React from "react";
import order from "../../public/assets/f1.jpg";
import outlet from "../../public/assets/f2.png"
import bulk from "../../public/assets/f3.jpg"

const Features = () => {
  return (
    <div className="min-h-[35vh]  flex justify-center items-center bg-[#FFFFFF]">
      <div className=" h-full w-full md:w-[75%] flex flex-wrap gap-10 justify-between items-center lg:px-4 py-3 px-14">
        {/* Feature 1 */}
        <div className="h-full  w-full md:w-[45%] lg:w-[30%] bg-white rounded-lg overflow-hidden flex flex-col items-center border-[1px] border-gray-300 cursor-pointer hover:scale-105 transition-all">
          <div className="h-[65%] w-full overflow-hidden  ">
            <img
              src={order}
              alt="Order Online"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[35%] w-full pl-4 flex justify-center items-center py-2">
            <div className="w-full">
              <h3 className="text-lg font-semibold ">Automatic Attendance</h3>
              <p className="text-sm text-gray-600 ">
              Uses facial recognition to mark attendance automatically.
              </p>
            </div>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="h-full  w-full md:w-[45%] lg:w-[30%] bg-white rounded-lg overflow-hidden flex flex-col items-center border-[1px] border-gray-300 cursor-pointer hover:scale-105 transition-all">
          <div className="h-[65%] w-full overflow-hidden  ">
            <img
              src={outlet}
              alt="Order Online"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[35%] w-full pl-4 flex justify-center items-center py-2">
            <div className="w-full">
            <h3 className="text-lg font-semibold ">IoT Integration</h3>
              <p className="text-sm text-gray-600 ">
              Connects with IoT devices like smart cameras for real-time attendance.
              </p>
            </div>
          </div>
        </div>
        
        {/* Feature 3 */}
        <div className="h-full  w-full md:w-[45%] lg:w-[30%] bg-white rounded-lg overflow-hidden flex flex-col items-center border-[1px] border-gray-300 cursor-pointer hover:scale-105 transition-all">
          <div className="h-[65%] w-full overflow-hidden  ">
            <img
              src={bulk}
              alt="Order Online"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[35%] w-full pl-4 flex justify-center items-center py-2">
            <div className="w-full">
            <h3 className="text-lg font-semibold ">Real-time Monitoring </h3>
              <p className="text-sm text-gray-600 ">
              Admins can track attendance in real-time.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Features;
 