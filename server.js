// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 3000;
const server = app.listen(port, listening);

// Callback to debug - listening function
function listening() {
  console.log(`Server is running on port ${port}`);
}

// POST Route to add an entry
app.post('/addEntry', addEntry);

function addEntry(req, res) {
  const newEntry = req.body;
  if (newEntry) {
    projectData = newEntry;
    res.status(201).send('Entry added successfully');
  } else {
    res.status(400).send('Bad request');
  }
}

// GET Route to return project data
app.get('/all', (req, res) => {
  res.send(projectData);
});
