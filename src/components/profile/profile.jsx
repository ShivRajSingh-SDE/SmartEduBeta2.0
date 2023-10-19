import React, { useState, useEffect } from "react";
import axios from "axios";
import Back from "../common/back/Back";
import ProfileCard from "./ProfileCard";
import "./profile.css";
import Awrapper from "../about/Awrapper";
import "../about/about.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [userProfile, setUserProfile] = useState(null);

  // Retrieve the email from local storage
  const userEmail = localStorage.getItem("userEmail");

  const handleResetClick = () => {
    // Clear the user's email from local storage
    localStorage.removeItem("userEmail");
    window.location.reload();

    // Optionally, you can also redirect the user to another page
    // window.location.href = "/"; // Replace with the desired URL
  };

  useEffect(() => {
    // Fetch the user's profile data here
    axios
      .get("http://localhost:8000/users/current-user")
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });

    // Fetch all users for the UserProfile component
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUserProfile(response.data.find((user) => user.email === userEmail));
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [userEmail]);

  return (
    <>
      <Back title="Profile" />
      <section className="team padding"></section>

      {userProfile && (
        <div className="profile-card">
          <img id="userprofileimg" src={userProfile.pic} alt="User Profile" />
          <h2>{userProfile.name}</h2>
          <p>Email: {userProfile.email}</p>

          <div>
            <button onClick={handleResetClick}>LogOut</button>
          </div>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </div>
      )}

      <Awrapper />
    </>
  );
};

export default Profile;
