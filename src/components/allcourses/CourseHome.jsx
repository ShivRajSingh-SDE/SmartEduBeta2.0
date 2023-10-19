import React, { useState } from "react";
import Back from "../common/back/Back";
import CoursesCard from "./CoursesCard";
import OnlineCourses from "./OnlineCourses";
import CoursesCard2 from "./CoursesCard2";
import { BsCapslock } from "react-icons/bs";

const CourseHome = () => {
  const [cyberSecurityVisible, setCyberSecurityVisible] = useState(false);
  const [cyberSecurityVisible2, setCyberSecurityVisible2] = useState(false);

  return (
    <>
      <Back title="Explore Courses" />
      <h1
        className="tech"
        onClick={() => setCyberSecurityVisible2(!cyberSecurityVisible2)}
      >
        Tech Section➡️<hr></hr>
      </h1>

      {cyberSecurityVisible2 && <CoursesCard />}
      <br></br>
      <br></br>
      <br></br>

      <h1
        className="cyber"
        onClick={() => setCyberSecurityVisible(!cyberSecurityVisible)}
      >
        Cyber Security
        <BsCapslock className=" from-red-500" />
        <hr></hr>
      </h1>

      {cyberSecurityVisible && <CoursesCard2 />}
      <br></br>
      <br></br>
      <br></br>

      <OnlineCourses />
    </>
  );
};

export default CourseHome;
