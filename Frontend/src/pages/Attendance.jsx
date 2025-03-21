import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

const Attendance = () => {
  const [data, setData] = useState([]);
  const { user } = useContext(UserContext);

  // Get attendance
  const getAllAttendance = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/api/attendance/get/${user.uid}`);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllAttendance();
  }, []);

  return (
    <div className="pt-[12vh] bg-gray-50 pb-8 px-4 md:px-12 min-h-screen">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-8">
        My Attendance
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-3 px-6 border-b text-left">Class Name</th>
              <th className="py-3 px-6 border-b text-left">Date</th>
              <th className="py-3 px-6 border-b text-left">Status</th>
              <th className="py-3 px-6 border-b text-left">Teacher Name</th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((record, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-6">{record.className}</td>
                  <td className="py-3 px-6">{record.date}</td>
                  <td className={`py-3 px-6 font-semibold ${record.status === 'PRESENT' ? 'text-green-600' : 'text-red-600'}`}>
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
  );
};

export default Attendance;
