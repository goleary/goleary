---
title: "Reconcile"
fromDate: "2019-12-01"
toDate: "2020-09-20"
tags: ["web", "firebase", "react", "gatsby"]
---

Yet another feature for someone else's application :)

# Inspiration

I hated the manual step of copying credit card transaction details (price, location, date etc.) from my statement over to splitwise for meals shared with my gf & other friends...so I built a solution to this problem.

# Details

Reconcile uses [Plaid](https://plaid.com/) to acccess user's credit card & bank transactions and displays them in a React based web application.  The user can then select specific transactions and which friend or group on splitwise to split them with.


# Technologies used
* React
* Redux
* Firebase
	* Firestore (database)
	* Functions - to perform 3rd party data fetching & also create a webhook that listens to new transactions as they come in.
* Plaid API & Webhhoks
* Netlify
* Splitwise (API)