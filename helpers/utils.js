const fs = require('fs');
const util = require('utils');

const readFromFile = util.promisify(fs.readFile);
const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
err? console.error(err) : console.info(`\ Your data has been written to ${destination}`)
             
const readdAndAppend = (content, file) =>{
  fs.readFile (file, 'utf8', (err, data) => {
    if (err){
      console.log(err);
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);;
    }
  });
};
module.exports = {readFromFile, writeToFile, readAndAppend};
