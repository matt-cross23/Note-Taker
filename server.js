const express = require('express');
const path = require('path');
const notes = require('./db/db.json')

const app = express();

const PORT = 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

// Get request for homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.js'));
});

// Get request for notes
app.get('/notes',(req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

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
   res.status(500).json('Error in posting review');
  }
});

        
app.listen(PORT, () => 
console.log(`Listening app at http://localhost:${PORT}`));
