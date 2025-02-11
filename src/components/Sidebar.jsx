
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; 

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <Link to="/" className="sidebar-link">Home</Link>
        <Link to="/About" className="sidebar-link">About</Link>
      </div>
    </div>
  );
};

export default Sidebar;
