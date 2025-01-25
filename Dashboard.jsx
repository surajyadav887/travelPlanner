import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importing Link for routing// Importing WeatherWidget component
import "./Dashboard.css";

const Dashboard = () => {
  const [activeFeature, setActiveFeature] = useState("home"); // Default feature

  const features = {
    home: {
      title: "Welcome",
      content: "Welcome to your travel dashboard! Select a feature from the menu.",
    },
    budget: {
      title: "Budget Tracker",
      content: "Track your expenses and visualize your travel spending with detailed charts.",
    },
    map: {
      title: "Interactive Map",
      content: "Explore destinations and plan your routes with a detailed map integration.",
    },
    itinerary: {
      title: "Itinerary Builder",
      content: "Create, edit, and manage your travel plans day by day.",
    },
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <h2>Travel Planner</h2>
        <nav>
          <ul>
            <li>
              <Link to="/" onClick={() => setActiveFeature("home")}>Home</Link>
            </li>
            <li>
              <Link to="/budget-tracker" onClick={() => setActiveFeature("budget")}>Budget Tracker</Link>
            </li>
            <li>
              <Link to="/map-integration" onClick={() => setActiveFeature("map")}>Map Integration</Link>
            </li>
            <li>
              <Link to="/itinerary-builder" onClick={() => setActiveFeature("itinerary")}>Itinerary Builder</Link>
            </li>
            <li>
              <Link to="/weather-widget" onClick={() => setActiveFeature("weather")}>Weather Forecast</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="dashboard-main">
        <header className="dashboard-topbar">
          <h1>{features[activeFeature].title}</h1>
        </header>
        <section className="dashboard-content">
          {typeof features[activeFeature].content === "string" ? (
            <p>{features[activeFeature].content}</p>
          ) : (
            features[activeFeature].content // Render the WeatherWidget when it's the active feature
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
