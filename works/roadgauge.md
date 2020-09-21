---
title: "Roadgauge"
fromDate: "2019-08-01"
toDate: "2020-02-01"
tags: ["web", "firebase", "react", "pwa"]
---

# Inspiration

The genesis for this project was the many times I'd find myself at work, ready to head home for the day but not wanting to waste an extra half an hour of my evening sitting in rush hour traffic. I'd open Google Maps, see that traffic conditions were bad and proceed tp continue doing somethine else on my computer to wait it out. Every 5 or 10 minutes I would hop back on Maps to refresh the page and see if things had measureably improved. I eventually got fed up with this process of manually checking and refreshing the page over and over again so I decided to build a (web) app to perform this repetitive task for me and notify me when traffic had dropped below a certain level.

# Technologies used

- Javascript - frontend
- Typescript - backend
- React
  - react-router
- Material-ui - React UI component library
- Firebase
  - Auth - anonymous & facebook authentication
  - Firestore (database)
  - Functions ("serverless" backend) Node.js / Express
  - Hosting
- Google Maps Platform
  - Places - Location search & autocomplete
  - Routes - real time traffic information
  - Geocoding - turning user's lat & long coordinates into an address
- PWA - Roadgauge is a Progressive web app which enables installation & notifications on certain platforms (Windows, OSX & Android).
