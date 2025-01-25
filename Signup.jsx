import React, { useState, useEffect } from "react";
import "./Signup.css";

// Importing the sunset image
import sunsetImage from "../assets/images/sunset.jpg"; // Sunset image

const Signup = () => {
  const [backgroundImage, setBackgroundImage] = useState(sunsetImage);

  useEffect(() => {
    // Any dynamic logic for background can go here if required
  }, []);

  return (
    <div
      className="signup-container"
      style={{
        backgroundImage: `url(${backgroundImage})`, // Apply the sunset background image
      }}
    >
      <div className="signup-card">
        <h1 className="signup-title">Create Account</h1>
        <form className="signup-form">
          <input
            type="text"
            placeholder="Full Name"
            className="signup-input"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="signup-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="signup-input"
            required
          />
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
