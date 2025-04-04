import React, { useState } from "react";
import "./Navbar.css";
import menu_icon from "../../assets/menu.png";  
import logo from "../../assets/logo.png";      
import search_icon from "../../assets/search.png";  
import upload_icon from "../../assets/upload.png";  
import more_icon from "../../assets/more.png";     
import notification_icon from "../../assets/notification.png"; 
import profile_icon from "../../assets/swetha2.jpg"; 
import UploadModal from "./UploadModal.jsx"; // Since both files are in the same directory

function Navbar({ setSidebar }) {
  const [showUploadModal, setShowUploadModal] = useState(false);

  return (
    <>
      <nav className="navbar flex-div">
        <div className="nav-left flex-div">
          <img
            className="menu-icon"
            onClick={() => setSidebar(prev => !prev)}
            src={menu_icon}
            alt="Menu"
          />
          <img className="logo" src={logo} alt="Logo" />
        </div>

        <div className="nav-middle flex-div">
          <div className="search-box flex-div">
            <input type="text" placeholder="Search" />
            <img src={search_icon} alt="Search" />
          </div>
        </div>

        <div className="nav-right flex-div">
          <img 
            src={upload_icon} 
            alt="Upload" 
            onClick={() => setShowUploadModal(true)} 
          />
          <img src={more_icon} alt="More" />
          <img src={notification_icon} alt="Notifications" />
          <img src={profile_icon} className="user-icon" alt="Profile" />
        </div>
      </nav>
      
      {showUploadModal && (
        <UploadModal onClose={() => setShowUploadModal(false)} />
      )}
    </>
  );
}

export default Navbar;