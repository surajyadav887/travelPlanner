import React, { useState } from "react";
import "./ItineraryBuilder.css";

const ItineraryBuilder = () => {
  const [itinerary, setItinerary] = useState([]);
  const [destination, setDestination] = useState("");
  const [activities, setActivities] = useState("");
  const [budget, setBudget] = useState("");

  const handleAddDestination = (e) => {
    e.preventDefault();

    const newDestination = {
      id: Date.now(),
      name: destination,
      activities: activities.split(",").map((activity) => activity.trim()),
      budget: Number(budget),
    };

    setItinerary([...itinerary, newDestination]);
    setDestination("");
    setActivities("");
    setBudget("");
  };

  const handleRemoveDestination = (id) => {
    setItinerary(itinerary.filter((item) => item.id !== id));
  };

  return (
    <div className="itinerary-builder-container">
      <h2>Build Your Itinerary</h2>

      <form onSubmit={handleAddDestination} className="itinerary-form">
        <div className="form-group">
          <label htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            placeholder="Enter destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="activities">Activities</label>
          <input
            type="text"
            id="activities"
            placeholder="Enter activities (comma-separated)"
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="budget">Budget</label>
          <input
            type="number"
            id="budget"
            placeholder="Enter budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />
        </div>

        <button type="submit" className="add-button">
          Add Destination
        </button>
      </form>

      <div className="itinerary-list">
        <h3>Your Itinerary</h3>
        {itinerary.length === 0 ? (
          <p>No destinations added yet!</p>
        ) : (
          <ul>
            {itinerary.map((item) => (
              <li key={item.id} className="itinerary-item">
                <div>
                  <h4>{item.name}</h4>
                  <p>Activities: {item.activities.join(", ") || "None"}</p>
                  <p>Budget: ${item.budget}</p>
                </div>
                <button
                  onClick={() => handleRemoveDestination(item.id)}
                  className="remove-button"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ItineraryBuilder;
