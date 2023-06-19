const fs = require('fs');
const  chalk= require('chalk')



const getNotes =() =>{
     return 'Your notes'
}
const addNote = (title,body)=>{
     const notes = loadNotes();
     // const duplicateNotes=notes.filter((note)=>note.title===title)
     const duplicateNote=notes.find((note)=>note.title===title)

     debugger
     if (!duplicateNote){
          notes.push({
               title: title,
               body: body
          })
          saveNotes(notes)
          console.log("New Note Added                    ");
     }
     else {
          console.log("Title taken        ");
     }
}

const removeNote =(title)=>{
     const notes = loadNotes();
     const notesToKeep=notes.filter((note) => note.title !==title)
     if (notesToKeep.length<notes.length){

          saveNotes(notesToKeep)
          console.log(chalk.bgGreen('Removing a new note!                                            '))
     }
     else {
          console.log(chalk.bgRed("Note doesn't exist                                              "))

     }
}


const loadNotes= ()=>{
     try {
          const dataBuffer=fs.readFileSync('notes.json')
          const dataJSON = dataBuffer.toString();
          return JSON.parse(dataJSON)
     }
     catch (e) {
          return[]
     }
}
const saveNotes= (notes)=> {
     const stringifyNotes = JSON.stringify(notes);
     fs.writeFileSync('notes.json',stringifyNotes)
}
const listNotes= ()=> {
     const notes = loadNotes()
     notes.forEach((note)=>{
          console.log(note.title);
     })
}
const readNotes= (title)=> {

     const notes = loadNotes();
     // const duplicateNotes=notes.filter((note)=>note.title===title)
     const duplicateNote=notes.find((note)=>note.title===title)

     if (duplicateNote){
          console.log(duplicateNote);
     }
     else{
          console.log("This note doesn't exist");
     }
}


module.exports= {
     getNotes:getNotes ,
     addNote:addNote,
     removeNote:removeNote,
     listNotes:listNotes,
     readNotes:readNotes
}