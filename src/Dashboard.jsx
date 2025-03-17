import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaFileInvoice,
  FaUserMd,
  FaCog,
  FaSignOutAlt,
  FaEllipsisV,
  FaHome,
  FaBell,
  FaUserCircle,
} from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlineSearch } from "react-icons/md";
import { PiArrowsDownUp } from "react-icons/pi";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100" style={{ fontFamily: "Times New Roman" }}>
     
      <aside className="w-64 bg-white p-5 shadow-md flex flex-col">
        <h1 className="text-xl font-bold text-gray-700 mb-5">Clinic Vention</h1>
        <nav className="space-y-2">
          <div className="flex items-center space-x-3 p-2 bg-blue-100 text-blue-600 rounded-md">
            <FaUser className="text-lg" />
            <span>Patient</span>
          </div>
          <div className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaCalendarAlt className="text-lg" />
            <span>Appointment</span>
          </div>
          <div className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaFileInvoice className="text-lg" />
            <span>Billing</span>
          </div>
          <div className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaUserMd className="text-lg" />
            <span>Doctor</span>
          </div>
          <div className="flex items-center space-x-3 p-2 text-gray-700 hover:bg-gray-200 rounded-md">
            <FaCog className="text-lg" />
            <span>Setting</span>
          </div>
        </nav>
        <div className="mt-auto">
          <div className="flex items-center space-x-3 p-2 text-red-600 hover:bg-red-100 rounded-md">
            <FaSignOutAlt className="text-lg" />
            <span>Log Out</span>
          </div>
        </div>
      </aside>

     
      <div className="flex-1 p-6">
      
        <div className="flex justify-between items-center mb-4">
         
          <div className="flex items-center space-x-3">
            <FaHome className="text-gray-600 text-xl" />
            <h2 className="text-xl font-semibold text-gray-700">Curavention Clinic Center</h2>
            <MdOutlineArrowDropDown className="text-xl text-gray-700" />
          </div>

         
          <div className="flex items-center space-x-6">
            <FaBell className="text-gray-600 text-xl cursor-pointer" />
            <div className="flex items-center space-x-2">
              <FaUserCircle className="text-gray-600 text-2xl" />
              <span className="text-gray-800 font-medium">Dr. Sushitha Duyota</span>
            </div>
          </div>
        </div>

     
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between mb-4">
           
            <div className="flex items-center space-x-3">
              <div className="relative w-64">
                <MdOutlineSearch className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg"
                />
              </div>
              <button className="px-4 py-2  text-black rounded-lg">Filter</button>
            </div>

           
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">March 19, 2025</span>
              <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg flex items-center space-x-2">
                <FaUser className="text-blue-600" />
                <span>Add New Patient</span>
              </button>
            </div>
          </div>

        
          <div className="flex space-x-4 mb-4">
            <button className="relative px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center">
              Patients
              <span className="ml-2 w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full text-sm">
                8
              </span>
            </button>

            <button className="relative px-4 py-2 bg-gray-200 text-gray-700 rounded-lg flex items-center">
              Draft
              <span className="ml-2 w-6 h-6 flex items-center justify-center bg-green-500 text-white rounded-full text-sm">
                6
              </span>
            </button>
          </div>

       
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b">
                {[
                  "No ID",
                  "Name",
                  "Date of Birth",
                  "Gender",
                  "Mobile No",
                  "Email Id",
                  "Last Appointment",
                  "Action",
                ].map((header, index) => (
                  <th key={index} className="p-2">
                    <div className="flex items-center space-x-1">
                      <span>{header}</span>
                      {header !== "Action" && <PiArrowsDownUp className="text-gray-500" />}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[...Array(6)].map((_, index) => (
                <tr key={index} className="border-b shadow-md bg-white">
                  <td className="p-2">CCC-{index + 1}</td>
                  <td className="p-2">Mr. Dummy Name</td>
                  <td className="p-2">20-Sep-2022</td>
                  <td className="p-2">Male</td>
                  <td className="p-2">+91 000 0000 000</td>
                  <td className="p-2">dummy@gmail.com</td>
                  <td className="p-2">19-March-2025</td>
                  <td className="p-2 text-center">
                    <FaEllipsisV className="text-gray-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
