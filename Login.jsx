import React, { useState, useEffect } from "react";
import "./Login.css";

// Importing your images
import beachImage from "../assets/images/beach.jpg"; // Beach image
import mountainImage from "../assets/images/mountain.jpg"; // Mountain image
import natureImage from "../assets/images/nature.jpg"; // Nature image

const Login = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);

  // Array of background images
  const backgrounds = [beachImage, mountainImage, natureImage];

  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval when component unmounts
  }, [backgrounds.length]);

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgrounds[backgroundIndex]})`, // Apply the background image
      }}
    >
      <div className="login-card">
        <h1 className="login-title">Welcome Back</h1>
        <p className="login-subtitle">Please login to continue</p>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <p className="signup-link">
          Don’t have an account? <a href="/signup">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
