import React, { useState } from "react";
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
  FaBars,
} from "react-icons/fa";
import { MdOutlineArrowDropDown, MdOutlineSearch } from "react-icons/md";
import { PiArrowsDownUp } from "react-icons/pi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className="flex h-screen bg-gray-100"
      style={{ fontFamily: "Times New Roman" }}
    >
   <aside
  className={`${
    isCollapsed ? "w-20" : "w-50"
  } bg-white p-5 shadow-md flex flex-col transition-all duration-300`}
>
  <button
    onClick={() => setIsCollapsed(!isCollapsed)}
    className="p-2 mb-4 text-gray-600 hover:bg-gray-200 rounded-md"
  >
    <FaBars className="text-xl" />
  </button>

  <h1
    className={`text-xl font-bold text-gray-700 mb-5 ${
      isCollapsed ? "hidden" : "block"
    }`}
  >
    Clinic <br />
    Vention
  </h1>

  <nav className="space-y-2 text-[#666666]">
    {[
      { icon: <FaUser />, label: "Patient", isPatient: true },
      { icon: <FaCalendarAlt />, label: "Appointment" },
      { icon: <FaFileInvoice />, label: "Billing" },
      { icon: <FaUserMd />, label: "Doctor" },
      { icon: <FaCog />, label: "Setting" },
    ].map((item, index) => (
      <div
        key={index}
        className={`flex flex-col items-center p-2 rounded-md ${
          item.isPatient ? "border-l-2" : ""
        } hover:bg-gray-200`}
        style={
          item.isPatient
            ? {
                backgroundColor: "#0080801C",
                color: "#008080",
                borderLeftColor: "#008080",
                borderLeftWidth: "2px",
              }
            : {}
        }
      >
        <span style={{ color: item.isPatient ? "#008080" : "inherit" }}>
          {item.icon}
        </span>
        {!isCollapsed && (
          <span className="text-sm mt-1">{item.label}</span>
        )}
      </div>
    ))}
  </nav>

  <div className="mt-auto">
    <div className="flex flex-col items-center p-2 text-red-600 hover:bg-red-100 rounded-md">
      <FaSignOutAlt className="text-lg" />
      {!isCollapsed && <span className="text-sm mt-1">Log Out</span>}
    </div>
  </div>
</aside>

      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-3">
            <FaHome className="text-gray-600 text-xl" />
            <h2 className="text-xl font-semibold text-gray-700">
              Curavention Clinic Center
            </h2>
            <MdOutlineArrowDropDown className="text-xl text-gray-700" />
          </div>
          <div className="flex items-center space-x-6">
  <FaBell className="text-gray-600 text-xl cursor-pointer" />
  <div className="flex items-center space-x-2">
    <FaUserCircle className="text-gray-600 text-2xl" />
    <div>
      <span className="text-gray-800 font-medium block">
        Dr. Sushitha Duyota
      </span>
      <span className="text-gray-500 text-sm">General Physician</span>
    </div>
  </div>
</div>

        </div>

        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
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
              <button className="px-4 py-2 text-black rounded-lg">
                Filter
              </button>
            </div>
            <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
  <FaChevronLeft className="p-1 bg-gray-300 text-gray-700 rounded-full cursor-pointer" />
  <span className="text-gray-700">March 19, 2025</span>
  <FaChevronRight className="p-1 bg-gray-300 text-gray-700 rounded-full cursor-pointer" />
</div>

              <button className="px-4 py-2 border border-teal-600 text-teal-600 rounded-lg flex items-center space-x-2">
                <FaUser className="text-teal-600" />
                <span>Add New Patient</span>
              </button>
            </div>
          </div>

          <div className="flex space-x-4 mb-4 ">
            <button className="relative px-4 py-2 text-#666666 flex items-center bg-white">
              Patients
              <span className="ml-2 w-6 h-6 flex items-center justify-center bg-teal-100 text-teal-600 text-sm rounded-full">
                8
              </span>
            </button>

            <button
              className="relative px-4 py-2 bg-gray-100 text-gray-700 flex items-center"
              style={{ backgroundColor: "#66666621" }}
            >
              Draft
              <span className="ml-2 w-6 h-6 flex items-center justify-center bg-gray-600 text-white text-sm rounded-full">
                6
              </span>
            </button>
          </div>

          <table className="w-full text-left border-collapse bg-white">
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
        <th key={index} className="p-3 text-[#666666]">
          <div className="flex items-center space-x-1">
            <span>{header}</span>
            {header !== "Action" && (
              <PiArrowsDownUp className="text-gray-500" />
            )}
          </div>
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
  {[...Array(6)].map((_, index) => (
    <tr key={index} className={`border-b ${index % 2 === 1 ? 'bg-[#FAFAFA]' : 'bg-white'}`}>
      <td className="p-2 text-[#666666]">CCC-{index + 1}</td>
      <td className="p-2 text-[#666666]">Mr. Dummy Name</td>
      <td className="p-2 text-[#666666]">20-Sep-2022</td>
      <td className="p-2 text-[#666666]">Male</td>
      <td className="p-2 text-[#666666]">+91 000 0000 000</td>
      <td className="p-2 text-[#666666]">dummy@gmail.com</td>
      <td className="p-2 text-[#666666]">19-March-2025</td>
      <td className="p-2 text-center text-[#666666]">
        <FaEllipsisV className="cursor-pointer" />
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
