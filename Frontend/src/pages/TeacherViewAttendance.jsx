import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const TeacherViewAttendance = () => {
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [date,setDate] = useState("");
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);

  // Fetch all classes for the teacher
  const getAllClasses = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/teacher/get/classes/${user.uid}`
      );
      if (res.status === 200) {
        setClasses(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Fetch attendance for the selected class
  const showAttendance = async () => {
    if (!selectedClass) return;
    try {
      const res = await axios.get(
        `http://localhost:8080/api/attendance/class/get/${selectedClass}`
      );
      if (res.status === 200) {
        setData(res.data);
      }
      setData((prev)=>{
        return prev.filter(info=> info.date = date);
      })
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllClasses();
  }, []);

  return (
    <div className="py-[12vh] px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">View Attendance</h2>

      {/* Class selection and button */}
      <div className="bg-white  p-4 rounded-md mb-6 flex justify-center items-center">
        <div className="flex items-center gap-4">
          <select
            required
            className="border border-gray-300 rounded px-4 py-2"
            onChange={(e) => {
              setSelectedClass(e.target.value);
            }}
            value={selectedClass}
          >
            <option value="">-- Select the Class --</option>
            {classes.map((cls) => (
              <option key={cls.id} value={cls.id}>
                {cls.name}
              </option>
            ))}
          </select>
          <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
            />

          <button
            onClick={showAttendance}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Show
          </button>
        </div>
      </div>

      {/* Attendance table */}
      <div className="bg-white shadow-md p-4 rounded-md">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="py-3 px-6 border-b text-left">Class Name</th>
                <th className="py-3 px-6 border-b text-left">Date</th>
                <th className="py-3 px-6 border-b text-left">Status</th>
                <th className="py-3 px-6 border-b text-left">Students name</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((record, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="py-3 px-6">{record.className}</td>
                    <td className="py-3 px-6">{record.date}</td>
                    <td
                      className={`py-3 px-6 font-semibold ${
                        record.status === "PRESENT"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {record.status}
                    </td>
                    <td className="py-3 px-6">{record.teacherName}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No attendance records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeacherViewAttendance;
