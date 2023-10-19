import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../img/c1.png";
import axios from "axios";
import "./Reg.css";

const Reg = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/Signup", {
        email,
        password,
        name,
        pic,
      });

      if (response.data === "exist") {
        alert("User Already exists");
      } else if (response.data === "not exist") {
        // Save the email to local storage
        localStorage.setItem("userEmail", email);
        // Redirect to /header
        window.location.href = "/";
      }
    } catch (error) {
      alert("Wrong Details");
      console.error(error);
    }
  }

  return (
    <div className="reg-container">
      <img className="reg-logo" src={img} alt="" />
      <p className="reg-title">Welcome back!</p>
      <div className="reg-divider"></div>
      <form onSubmit={submit}>
        <div className="reg-form-group">
          <label htmlFor="RegEmailAddress">Email Address</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
            id="RegEmailAddress"
            type="email"
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="regPassword">Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
            id="regPassword"
            type="password"
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="regName">Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Name"
            id="regName"
            type="text"
          />
        </div>

        <div className="reg-form-group">
          <label htmlFor="regPic">Pic URL</label>
          <input
            onChange={(e) => {
              setPic(e.target.value);
            }}
            placeholder="Pic URL"
            id="regPic"
            type="text"
          />
        </div>

        <div className="reg-submit-button">
          <button type="submit">Submit</button>
        </div>
      </form>

      <div className="reg-links">
        <Link to="/login">or sign up</Link>
      </div>
    </div>
  );
};

export default Reg;
