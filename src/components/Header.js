// Header.js
import React from "react";
import "./Css/Header.css"; // Assuming you will create a Header.css for styling

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="title">Gulele Garden Local</div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </header>
  );
}
