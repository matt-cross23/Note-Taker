const notes = require('express').Router();
const {readAndAppend, readFromFile} = require('./db/db.json');

// Get request to read notes from file
app.get('/notes', (req, res) => 
readFromFile('./
 });

// POST request to send notes to server        
app.post('/notes', (req, res) => {
  res.json(`${req.method} request received!`);
  console.info(`${req.method} request received!`);
  const [{"title", "text"}] = req.body;
  if (title && text) { 
  const newNote ={
    title, 
    text,
  };
    
  module.exports = notes
