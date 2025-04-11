import React, { use, useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

const ProfilePage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  const [className, setClassName] = useState("");
  const [allClasses, setAllClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  // States for mark attendance component
  const [classId, setClassId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleMarkAttendance = async (event) => {
    event.preventDefault();

    if (!classId || !date || !selectedFile) {
      toast.error("Please enter Class ID, Date, and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("class_id", classId);
    formData.append("image", selectedFile);
    formData.append("date", date);

    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:5000/detect",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(response.data);

      // Fixing the request object (use classId, not ClassId)
      const request = {
        present: response.data.recognized_students,
        classId: classId,
        date: date,
      };

      try {
        const ans = await axios.post(
          "http://localhost:8080/api/attendance/mark",
          request
        );
        console.log(ans);
        if (ans.status === 200) {
          toast.success("Attendance Marked");
        }
      } catch (error) {
        console.log(error);
        toast.error("Failed to mark attendance");
      }
    } catch (error) {
      console.log(error);
      alert("Error processing attendance:", error);
    } finally {
      setLoading(false);
    }
  };

  // Other functions
  const getAllClasses = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/class/all");
      console.log(response.data);
      setAllClasses(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Cannot get the classes..");
    }
  };

  const createClass = async () => {
    const data = {
      name: className,
      teacherId: user.uid,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/class/register",
        data
      );
      console.log(response.data);
      if (response.status == 201) {
        toast.success("Class created");
        setClassName("");
      }
    } catch (error) {
      console.log(error);
      toast.error("Class Not Created");
    }
  };

  const handleJoinClass = async () => {
    const data = {
      classId: selectedClass,
      rollNo: user.uid,
    };
    try {
      const response = await axios.post(
        "http://localhost:8080/api/student/join",
        data
      );
      console.log(response.data);
      if (response.status == 201) {
        toast.success("Class Joined");
      }
    } catch (error) {
      console.log(error);
      toast.error("Invalid Class");
    }
  };

  useEffect(() => {
    getAllClasses();
  }, []);

  return (
    <div className="py-[12vh] flex flex-col items-center min-h-screen bg-gray-100">
      <div className="py-1 lg:py-2 ">
        <div className="w-full">
          <h3 className="w-full text-center font-bold text-lg lg:text-2xl">
            Dashboard
          </h3>
        </div>
        <div className=" my-1 lg:my-2 flex flex-col">
          <img
            className="w-[30%] mx-auto"
            src="https://cdn-icons-png.flaticon.com/512/5987/5987424.png"
            alt="profile-image"
          />
          <span className="text-center text-sm md:text-lg">
            <span className="font-bold">Name : </span>
            {user?.name}
          </span>
          <span className="text-center text-sm md:text-lg">
            <span className="font-bold">Email : </span>
            {user?.email}
          </span>
          <span className="text-center text-sm md:text-lg">
            <span className="font-bold">Role : </span>
            {user?.role}
          </span>
          <span className="text-center text-sm md:text-lg">
            <span className="font-bold">User Id : </span>
            {user?.uid}
          </span>
        </div>
      </div>

      {/* Show button only if user is a student */}
      {user?.role === "STUDENT" && (
        <div className="flex flex-col justify-center ">
          <button
            className="mt-4 px-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
            onClick={() => navigate("/attendance")}
          >
            View Attendance
          </button>
          <div className="flex gap-3">
            <select
              name=""
              id=""
              className="text-black mt-4 rounded-lg cursor-pointer outline-none border-black border-[1px]"
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option value="">--Sellect the class to Join--</option>
              {allClasses.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name} (Teacher: {cls.teacherName})
                </option>
              ))}
            </select>
            <button
              className="mt-4 px-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={handleJoinClass}
            >
              Join Class
            </button>
          </div>
        </div>
      )}
      {user?.role === "TEACHER" && (
        <div className="flex flex-col justify-center ">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Class Name"
              className="mt-4 px-3  text-black py-2 rounded-lg cursor-pointer outline-none border-black border-[1px]"
              value={className}
              onChange={(e) => setClassName(e.target.value)}
            />
            <button
              className="mt-4 px-3 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer"
              onClick={createClass}
            >
              Create Class
            </button>
          </div>
          {/* Mark Attendance div */}
          <div className="mt-6  rounded-lg w-full max-w-md">
            <h2 className="text-lg font-bold text-center mb-3">
              Mark Attendance
            </h2>
            <form
              onSubmit={handleMarkAttendance}
              className="flex flex-col gap-3"
            >
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
              <select
                name=""
                id=""
                className="text-black mt-4 rounded-lg cursor-pointer outline-none border-black border-[1px]"
                onChange={(e) => setClassId(Number(e.target.value))}
              >
                <option value="">--Sellect the class--</option>
                {allClasses.map((cls) => (
                  <option key={cls.id} value={cls.id}>
                    {cls.name} (Teacher: {cls.teacherName})
                  </option>
                ))}
              </select>
              <input
                type="file"
                onChange={(e) => setSelectedFile(e.target.files[0])}
                className="px-3 py-2 border border-gray-300 rounded-lg outline-none cursor-pointer file:mr-3 file:py-2 file:px-4 file:border-0 file:bg-blue-600 file:text-white file:rounded-lg file:cursor-pointer hover:file:bg-blue-700 transition"
              />
              <button
                type="submit"
                disabled={loading}
                className={`px-4 py-2 rounded-lg text-white transition duration-300 ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
          <div className="w-full">
            <button
              className='px-4 py-2 rounded-lg text-white transition duration-300 bg-blue-600 hover:bg-blue-700 w-full cursor-pointer mt-4'
              onClick={()=> navigate("/view-attendance")}
            >
              View Attendance
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
