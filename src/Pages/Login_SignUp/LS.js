import React, { useState } from "react";
import "./LS.css";

const LS = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="ls-container">
      <div className="ls-content">
        <h2>Welcome to RightsQuest</h2>
        <div className="tab-navigation">
          <a
            href="#login"
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => handleTabClick("login")}
          >
            Login
          </a>
          <a
            href="#signup"
            className={`tab-button ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => handleTabClick("signup")}
          >
            Sign Up
          </a>
        </div>
        <div className="login-signup-form">
          {activeTab === "login" && (
            <form id="login">
              <h3>Login</h3>
              <div className="form-group">
                <label htmlFor="loginEmail">Email:</label>
                <input
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="loginPassword">Password:</label>
                <input
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  placeholder="Enter your password"
                />
              </div>
              <a href="/Home" type="submit">Login</a>
            </form>
          )}
          {activeTab === "signup" && (
            <form id="signup">
              <h3>Sign Up</h3>
              <div className="form-group">
                <label htmlFor="signupEmail">Email:</label>
                <input
                  type="email"
                  id="signupEmail"
                  name="signupEmail"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="signupPassword">Password:</label>
                <input
                  type="password"
                  id="signupPassword"
                  name="signupPassword"
                  placeholder="Create a password"
                />
              </div>
              <button type="submit">Sign Up</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LS;
