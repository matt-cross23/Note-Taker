const app = require('express').Router();
const { data } = require('browserslist');
const { response } = require('express');
// const { v4: uuidv4 } = require('uuid');
// const { data } = require('browserslist');
const {readAndAppend, readFromFile} = require('../helpers/utils');

// Get request to read notes from file
app.get('/notes', (req, res) => {
  readFromFile('db/db.json', "utf8").then(notes => {
  
    res.json(JSON.parse(notes));
    

  })
});

    
app.post('/notes', (req, res) => {
  console.info(`${req.method} request received!`);
  const {title, text,} = req.body;
  if (title && text) { 
  const newNote ={
    title, 
    text,
  }
readAndAppend(newNote, './db/db.json');

const response = {
  status: 'success',
  body: newNote,
};

res.json(response);
} else {
res.json('Error in posting feedback');
  }
  

});
    
  module.exports = app
