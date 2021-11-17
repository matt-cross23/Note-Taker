const path = require("path");
const app = require('express').Router();
const notes = require("./notes");

app.use('/api', notes);

// Get request for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Get request for notes
app.get('/notes',(req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = app;