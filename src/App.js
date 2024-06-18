// App.js
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import "./App.css"; // Assuming you will create an App.css for styling

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-section">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
