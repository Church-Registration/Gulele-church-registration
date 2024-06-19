// Header.js
import React from "react";
import "./Css/Header.css";
import MainContent from "./MainContent";
import { FaBars } from "react-icons/fa";

export default function Header({ isOpen, toggleSidebar }) {
  return (
    <div className={`container ${isOpen ? "sidebar-open" : ""}`}>
      <header className={`header ${isOpen ? "sidebar-open" : ""}`}>
        <div className="header-content">
          <button onClick={toggleSidebar} className="menu-btn">
            <FaBars />
          </button>
          <div className="title">Gulele Garden Local</div>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </header>
      <MainContent />
    </div>
  );
}
