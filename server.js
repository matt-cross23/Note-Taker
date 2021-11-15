const express = require('express');
const path = require('path');
const notes = require('./db/db.json)

const app = express();

const PORT = 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));
        
app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, ''));
});

        
app.listen(PORT, () => 
console.log("Listening app at http://localhost:${PORT}")
