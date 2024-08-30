## The Wildfire Reporting System
---
This widlfire reporting project is the submission for Project 6 in the SIT725 course. The project is a web application  
built using ExpressJS and a MongoDB database. Project 6  introduces testing into the web application maintain quality and  
ease software maintenance. Mocha and Chai modules were added to the project to support unit and integration tests for the  
web application components. The tests written for this project examined how the application handled data from the users and  
stored it in the database. CRUD tests were written for the Users' and Wildfire data management processes. 

## Installation
---
You must have Express installed to run this application in a development environment. To install Express, use the [npm install command:](https://docs.npmjs.com/getting-started/installing-npm-packages-locally)

```bash
npm install express
```

To run the tests, you must also install Moch and Chai using npm:

```bash
npm install mocha chai
```

## Usage
If you have Express installed, navigate to the project direstory (assuming you cloned it from this repository), and start the Express server  
using the following command:


```bash
npm start
```

View the website at: http://localhost:3000

To run the tests, open a new terminal and start the tests using the following command:


```bash
npm test
```
