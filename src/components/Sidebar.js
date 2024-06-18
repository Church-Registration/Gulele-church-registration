// Sidebar.js
import React from "react";
import "./Css/Sidebar.css"; // Assuming you will create a Sidebar.css for styling
const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Gulele Garden Local</h2>
      <ul>
        <li>Members Information</li>
        <ul>
          <li>Members details</li>
          <li>Register of Members</li>
          <li>Delete bulk</li>
          <li>Create a birthplace</li>
          <li>Residential Address</li>
        </ul>
        <li>Sections</li>
      </ul>
    </div>
  );
};
export default Sidebar;
