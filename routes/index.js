const express = require('express')

// Imports modular routers
const notesRouter = require('./notes')

const mini = express.Router();

mini.use('/notes', notesRouter);

module.exports = mini
// Get request to read notes from file
app.get('/notes', (req, res) => {
  res.status(200).json((notes);
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
    const response = {
      status: 'success'
      body: newNote,
    };
    console.log(response);
    res.status(201).json(response);
  } else {
   res.status(500).json('Error in posting note');
  }
});
