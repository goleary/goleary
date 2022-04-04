import React from "react";

import { grey } from "@mui/material/colors";

import { Resume } from "../features/resume/types";

import "features/resume/resume.module.css";

const resume: Resume = {
  basic: {
    name: "Gabe O'Leary",
    email: "oleary.gabe@gmail.com",
    phone: "404-275-7320",
    url: "https://gabeoleary.com",
    summary: "",
    // huh, I'd like to not provide my address here...
    // location: "Seattle, Washington",
    profiles: [
      {
        network: "GitHub",
        username: "goleary",
        url: "https://github.com/goleary",
      },
      // perhaps not helpful for my professional aspirations?
      // {
      //   network: "Twitter",
      //   username: "babeoleary",
      //   url: "https://twitter.com/babeoleary",
      // },
    ],
  },
  education: [
    {
      institution: "University of Michigan",
      area: "Computer Science & Engineering",
      studyType: "Bachelor",
      startDate: "2009",
      endDate: "2013",
    },
  ],
  work: [
    {
      name: "Upnext",
      location: "Remote",
      position: "Founding Engineer",
      startDate: "August 2020",
      endDate: "September 2022",
    },
    {
      name: "Microsoft",
      location: "Bellevue, Washington",
      position: "Program Manager",
      startDate: "March 2015",
      endDate: "May 2019",
    },
  ],
};

// TODO: use masonry layout on sections?
const ResumePage: React.FC = () => {
  const { work, education } = resume;

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", color: grey[900] }}>
          {resume.basic.name}
        </h1>
        <p style={{ color: grey[800] }}>Product Engineer</p>
        <p style={{ color: grey[800] }}>Seattle, Washington</p>
      </div>
      <h2>Work</h2>
      {work.map((w, i) => (
        <div key={i}>
          <h3>{w.name}</h3>
        </div>
      ))}
      <h2>Education</h2>
      {education.map((e, i) => (
        <div key={i}>
          <h3>{e.institution}</h3>
          <div>Bachelors in Science & Engineering</div>
        </div>
      ))}
    </div>
  );
};

export default ResumePage;
