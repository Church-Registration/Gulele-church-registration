// Sidebar.js
import React from "react";
import "./Css/Sidebar.css"; // Adjust the path if necessary

import {
  FaUser,
  FaAddressBook,
  FaTrash,
  FaPlus,
  FaHome,
  FaBars,
  FaGraduationCap,
} from "react-icons/fa";

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="container">
        <ul>
          <li>
            <FaUser /> <a href="#">Members Information</a>
            <ul>
              <li>
                <FaAddressBook /> <a href="#">Members details</a>
              </li>
              <li>
                <FaAddressBook /> <a href="#">Register of Members</a>
              </li>
              <li>
                <FaTrash /> <a href="#">Delete bulk</a>
              </li>
              <li>
                <FaPlus /> <a href="#">Create a birthplace</a>
              </li>
              <li>
                <FaHome /> <a href="#">Residential Address</a>
              </li>
            </ul>
          </li>
          <li>
            <FaGraduationCap /> <a href="#">Sections</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
