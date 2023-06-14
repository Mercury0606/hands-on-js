const fs = require('fs');
const {parse} = require("nodemon/lib/cli");


// const book={
//     title:   'Ego is the Enemy',
//     author:  'Ryan Holiday'
// }
// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json',bookJSON)
//
// const dataBuffer = fs.readFileSync('1-json.json');
// // console.log(dataBuffer.toString());
// const parseData = JSON.parse(dataBuffer);
// console.log(parseData.author);


const buffer = fs.readFileSync('1-json.json');
const bufferString = buffer.toString();
const parseString = JSON.parse(bufferString);
parseString.name='changed Name'
parseString.age='22'

const stringifyData = JSON.stringify(parseString);
fs.writeFileSync('1-json.json',stringifyData)
