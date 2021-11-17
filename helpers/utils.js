const { data } = require('browserslist');
const fs = require('fs');
const util = require('util');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>{
err? console.error(err) : console.info(`\ Your data has been written to ${destination}`)
});
             
const readAndAppend = (content, file) =>{
  fs.readFile (file, 'utf8', (err, notes) => {
    if (err){
      console.log(err);
    } else {
      const parsedData = JSON.parse(notes);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};
module.exports = {readFromFile, writeToFile, readAndAppend};
