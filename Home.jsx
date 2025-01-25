import React from 'react';
import './Home.css'; // Import your CSS file

const Home = () => {
  return (
    <div className="home-container">
      {/* Home Header */}
      <header className="home-header">
        <div className="header-content">
          <h1>Welcome to TravelPlanner</h1>
          <p>Your journey begins here</p>
        </div>
      </header>

      {/* Overlay Section */}
      <div className="overlay">
        {/* Hero Section */}
        <section className="hero-section">
          <h2>Discover Your Next Adventure</h2>
          <p>Explore exciting destinations and make unforgettable memories</p>
          <a href="/explore" className="explore-button">Explore Now</a>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <h2>Features</h2>
          <div className="feature-cards">
            <div className="feature-item">
              <h3>Budget Tracker</h3>
              <p>Manage your travel expenses effortlessly</p>
              <a href="/budget-tracker" className="link-button">Learn More</a>
            </div>
            <div className="feature-item">
              <h3>Map Integration</h3>
              <p>Find your way with our interactive map</p>
              <a href="/map" className="link-button">Learn More</a>
            </div>
            <div className="feature-item">
              <h3>Weather Forecast</h3>
              <p>Check the weather at your destination</p>
              <a href="/weather" className="link-button">Learn More</a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
