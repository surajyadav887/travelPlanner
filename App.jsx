import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Dashboard from "./Pages/Dashboard";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import ItineraryBuilder from "./Components/ItineraryBuilder";
import DestinationSearch from "./Components/DestinationSearch";
import WeatherWidget from "./Components/WeatherApp";
import BudgetTracker from "./Components/BudgetTracker";
import Header from "./Components/Header"
import "./App.css";

const App = () => (
  <Router>
    <Header/>
    

      {/* Page Content */}
      <div className="content-container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/itinerary-builder" component={ItineraryBuilder} />
          <Route path="/destination-search" component={DestinationSearch} />
          <Route path="/weather-widget" component={WeatherWidget} />
          <Route path="/budget-tracker" component={BudgetTracker} />
        </Switch>
      </div>
    
  </Router>
);

export default App;
