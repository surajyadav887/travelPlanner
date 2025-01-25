import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">TravelPlanner</div>
      <nav className="navigation">
        <Link to="/" className="nav-button">Home</Link>
        <Link to="/dashboard" className="nav-button">Dashboard</Link>
        <Link to="/login" className="nav-button">Login</Link>
        <Link to="/signup" className="nav-button">Signup</Link>
        <Link to="/itinerary-builder" className="nav-button">Itinerary Builder</Link>
        <Link to="/destination-search" className="nav-button">Destination Search</Link>
        <Link to="/weather-widget" className="nav-button">Weather App</Link>
        <Link to="/budget-tracker" className="nav-button">Budget Tracker</Link>
      </nav>
    </header>
  );
};

export default Header;
