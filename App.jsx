import logo from './logo.svg';
import './App.css';
import { Router, Route } from "react-router-dom";
import React, { Component } from "react";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";

const App = () => <div className="App">
    <Router>
        <div>
            <Route exact path="/HomePage" component={HomePage} />
            <Route exact path="/AboutPage" component={AboutPage} />
        </div>
    </Router>
</div>

export default App;