const express = require('express');
const path = require('path');
const notes = require('./db/db.json')
const api = require(./routes/routes.js)
const app = express();

const PORT = process.env.port || 3001;
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

app.get('*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/404.html'))
});

        
app.listen(PORT, () => 
console.log(`Listening app at http://localhost:${PORT}`));
