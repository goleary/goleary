import React from "react";

import { blue, grey } from "@mui/material/colors";

import { Resume } from "../features/resume/types";
import Item from "../features/resume/components/item";
import Tags from "../features/resume/components/tags";

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

// TODO: maybe I should reduce this to key skills

const skills = [
  "TypeScript",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "express",
  "firebase",
  "NoSQL",
  "PostgreSQL",
  "GCP",
  "HTML",
  "CSS",
];

// TODO: use masonry layout on sections?
const ResumePage: React.FC = () => {
  const sectionHeaderStyles = {
    marginTop: 24,
    color: grey[900],
  };

  return (
    <div
      style={{
        maxWidth: 1200,
        margin: "auto",
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ fontWeight: "bold", color: grey[900] }}>
          {resume.basic.name}
        </h1>
        <p style={{ color: grey[800] }}>Product Engineer</p>
        <p style={{ color: grey[800] }}>Seattle, Washington</p>
      </div>
      <div
        style={{
          maxWidth: 800,
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          gap: 30,
        }}
      >
        <div style={{ flex: 1 }}>
          <h2 style={sectionHeaderStyles}>Experience</h2>
          <Item
            title="Upnext"
            url="https://getupnext.com"
            subtitle="Founding Engineer"
            timePeriod="Aug 2020 - present"
          >
            <ul>
              <li>Employee #1</li>
              <li>parsing</li>
              <li>audio player</li>
              <li>twitter bot</li>
              <li>twitter trending</li>
              <li>highlighting, serialization & custom ux</li>
            </ul>
            <Tags
              tags={[
                "TypeScript",
                "React",
                "ReactNative",
                "Next.js",
                "Node.js",
                "express",
                "Docker",
                "firebase",
                "NoSQL",
                "PostgreSQL",
                "GCP",
                "HTML",
                "CSS",
              ]}
            />
          </Item>
          {/* <Item
        title="Indie Hacker"
        subtitle="thingy"
        timePeriod="Aug 2019 - present"
      ></Item> */}
          <Item
            title="Independent Contractor"
            subtitle="Several early stage companies"
            timePeriod="Jan 2020 - Aug 2020"
          >
            <ul>
              <li>Performed code reviews for remote development team</li>
              <li>Improved software development processes</li>
              <li>Provided product level consulting</li>
            </ul>
          </Item>

          <Item
            title="Microsoft"
            subtitle="Program Manager"
            timePeriod="Jun 2013 - May 2019"
          >
            <ul>
              <li>
                Led frontend development of{" "}
                <a href="https://psa.microsoft.com/">
                  Microsoft Personal Shopping Assistant
                </a>
              </li>
              <li>
                Developed data extraction technique to enable browser extension
                & mobile app to function across thousands of websites.
              </li>
            </ul>
            <Tags
              tags={[
                "TypeScript",
                "Angular",
                "React",
                "Redux",
                "Ionic",
                "Bootstrap",
              ]}
            />
          </Item>

          <h2 style={sectionHeaderStyles}>Education</h2>
          <Item
            title="University of Michigan"
            subtitle="Bachelors of Science in Engineering (Computer Science)"
            timePeriod="2009 - 2013"
          >
            <ul>
              <li>Certificate in Entreprenuership</li>
              <li>Minor in Economics</li>
            </ul>
          </Item>
        </div>
        <div style={{ width: "35%" }}>
          <h2 style={sectionHeaderStyles}>Projects</h2>
          <Item
            title="Reconcile"
            url="https://reconcile.app"
            timePeriod="Nov 2019 - present"
          ></Item>
          <Item
            title="Current Map"
            url="https://gabeoleary.com/current-map"
            timePeriod="Mar 2022"
          ></Item>
          <Item
            title="COVID Tracking Project"
            url="https://covidtracking.com/"
            timePeriod="2020"
          >
            <ul>
              <li>Built custom charts</li>
              <li>Createdm scrollytelling framework</li>
            </ul>
            <Tags tags={["React", "Gatsby", "GraphQL", "D3", "Leaflet"]} />
          </Item>
          <Item
            title="Roadgauge"
            url="https://roadgauge.app"
            timePeriod="Nov 2019 - present"
          >
            <Tags
              tags={["React", "Firebase", "Redux", "serverless functions"]}
            />
          </Item>
          <h2 style={sectionHeaderStyles}>Awards</h2>
          <Item
            title="HERE Mapathon"
            url="https://www.agorize.com/en/challenges/heremapathon/pages/finals?lang=en"
            subtitle="2nd place"
            timePeriod="Dec 2019"
          >
            Developed an interactive map using US census data to demonstrate the
            economic loss caused by commuting
          </Item>

          <h2 style={sectionHeaderStyles}>Skills</h2>
          <Tags tags={skills} />
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
