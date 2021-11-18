const express = require('express');
const path = require('path');

const routes = require('./routes/indexroute.js')
const app = express();


const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static('public'));

app.use(routes);

       
app.listen(PORT, () => 
console.log(`Listening app at http://localhost:${PORT}`));
