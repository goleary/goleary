---
title: "HERE Mapathon"
fromDate: "2020-07-29"
toDate: "2020-07-29"
tags: ["gis", "svelte"]
---

I took data from the US Census Bureau on income & commute time by geography and combined them to come up with a dollar value for the time lost to commuting.

I used 3 different granularities of geographic region, Zip Codes, Counties, & Metro/Micropolitan areas to serve different zoome levels of the map.

## Technologies used

- [Mapshaper](https://github.com/mbloch/mapshaper)
- [Python with Pandas](https://pandas.pydata.org/)
- [HERE XYZ](https://www.here.xyz/)
  - Data Hub
  - CLI
  - [Space Invader](https://www.here.xyz/space-invader/)
- [Tangram](https://github.com/tangrams/tangram)
- [Leaflet.js](https://leafletjs.com/)
- [Svelte](https://svelte.dev/)

# Data used

- US Census Bureau American Community Survey (2017 5 year estimate)
- Bureau of Labor Statistics
