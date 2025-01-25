import React, { useState } from "react";
import "./WeatherApp.css";

// Correct paths for images within src/assets/images
import defaultImage from "../assets/images/de.jpg";  // Adjusted path
import sunnyImage from "../assets/images/sunny.jpg"; // Adjusted path
import hotImage from "../assets/images/hot.jpg";     // Adjusted path
import coldImage from "../assets/images/cold.jpg";   // Adjusted path
import warmImage from "../assets/images/warm.jpg";   // Adjusted path

const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    try {
      const apiKey = "08f79c615dcdf99aa40be4ce2285ca44"; // Replace with your actual API key
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        if (response.status === 500) {
          throw new Error("Internal Server Error. Please try again later.");
        } else if (response.status === 404) {
          throw new Error("City not found.");
        } else {
          throw new Error(`An error occurred: ${response.statusText}`);
        }
      }

      const data = await response.json();
      const temperatureCelsius = (data.main.temp - 273.15).toFixed(1);
      const weatherCondition = data.weather[0].main;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const date = new Date(data.dt * 1000).toLocaleString();

      setWeatherData({
        city: data.name,
        temperature: temperatureCelsius,
        weatherCondition,
        humidity,
        windSpeed,
        date,
      });
      setError("");
    } catch (err) {
      setError(err.message); // Log the error message
      setWeatherData(null);
      console.error("Error fetching weather data:", err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("City name cannot be empty.");
      return;
    }
    fetchWeather();
  };

  // Determine background image based on temperature
  const getBackgroundImage = () => {
    if (!weatherData) return defaultImage;
    const temp = parseFloat(weatherData.temperature);

    if (temp <= 0) return coldImage;
    if (temp > 0 && temp <= 15) return warmImage;
    if (temp > 15 && temp <= 30) return sunnyImage;
    return hotImage;
  };

  const backgroundImage = getBackgroundImage();

  return (
    <div
      className="weather-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white",
        textShadow: "0px 0px 5px black",
      }}
    >
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={{ padding: "10px", width: "200px", marginRight: "10px" }}
        />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Get Weather
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weatherData && (
        <div className="weather-data">
          <h2>Weather in {weatherData.city}</h2>
          <p><strong>Date:</strong> {weatherData.date}</p>
          <p><strong>Temperature:</strong> {weatherData.temperature}°C</p>
          <p><strong>Condition:</strong> {weatherData.weatherCondition}</p>
          <p><strong>Humidity:</strong> {weatherData.humidity}%</p>
          <p><strong>Wind Speed:</strong> {weatherData.windSpeed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
