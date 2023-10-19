import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Head = () => {
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
      <section className="head">
        <div className="container flexSB">
          <div className="logo">
            <Link
              className="
             text-[40px] font-bold text-[white]"
              to="/"
            >
              Smart Edu.
            </Link>
            <span></span>
          </div>

          <div className="social">
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-youtube icon"></i>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
