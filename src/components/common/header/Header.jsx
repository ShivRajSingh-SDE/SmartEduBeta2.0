import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Head from "./Head";
import "./header.css";
import axios from "axios";

const Header = () => {
  const [click, setClick] = useState(false);
  const [userProfile, setUserProfile] = useState(null);

  // Retrieve the email from local storage
  const userEmail = localStorage.getItem("userEmail");

  const handleResetClick = () => {
    // Clear the user's email from local storage
    localStorage.removeItem("userEmail");
    window.location.reload();
  };

  useEffect(() => {
    // Fetch all users for the UserProfile component
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserProfile(response.data.find((user) => user.email === userEmail));
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [userEmail]);

  return (
    <>
      <Head />
      <header>
        <nav className="flexSB">
          <ul
            className={click ? "mobile-nav" : "flexSB "}
            onClick={() => setClick(false)}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/courses">All Courses</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/chatbot">QueryHelpDesk</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/journal">Journal</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link id="loginbtn" to="/signup">
                Login
              </Link>
            </li>
          </ul>
          <div className="start">
            {userProfile && userProfile.pic && (
              <img
                id="userprofileimg2"
                src={userProfile.pic}
                alt="User Profile"
              />
            )}
            {userProfile && <h2>{userProfile.name}</h2>}
          </div>
          <button className="toggle" onClick={() => setClick(!click)}>
            {click ? (
              <i className="fa fa-times"></i>
            ) : (
              <i className="fa fa-bars"></i>
            )}
          </button>
        </nav>
      </header>
    </>
  );
};

export default Header;
