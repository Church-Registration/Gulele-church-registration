// MainContent.js
import React from "react";
import CalendarComponent from "./Calendar";
import "./Css/MainContent.css"; // Assuming you will create a MainContent.css for styling

const MainContent = () => {
  return (
    <div className="main-content">
      <CalendarComponent />
    </div>
  );
};

export default MainContent;
