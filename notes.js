const fs = require('fs');
const  chalk= require('chalk')



const getNotes =function () {
     return 'Your notes'
}
const addNote =function (title,body){
     const notes = loadNotes();
     const duplicateNotes=notes.filter(function (note) {
          return note.title===title
     })

     if (duplicateNotes.length===0){

          saveNotes(notes)
          console.log("New Note Added\n");
     }
     else {
          console.log("Title taken\n");
     }
}

const removeNote =function (title){
     const notes = loadNotes();
     const notesToKeep=notes.filter(function (note) {
          return note.title !==title
     })
     if (notesToKeep.length===notes.length){
          console.log(chalk.bgRed("Note doesn't exist                              "))
     }
     else {
          saveNotes(notesToKeep)
          console.log(chalk.bgGreen('Removing a new note!                               '))
     }
}


const loadNotes=function (){
     try {
          const dataBuffer=fs.readFileSync('notes.json')
          const dataJSON = dataBuffer.toString();
          return JSON.parse(dataJSON)
     }
     catch (e) {
          return[]
     }
}
const saveNotes=function (notes) {
     const stringifyNotes = JSON.stringify(notes);
     fs.writeFileSync('notes.json',stringifyNotes)
}

module.exports= {
     getNotes:getNotes ,
     addNote:addNote,
     removeNote:removeNote
}