const fs =require ('fs')

fs.writeFileSync('notes.txt','This File was created by Node.js!')
// Challenge: Append a message to notes.txt
//
//1. Use appendFileSync to append to the File
//2.Run the script
//3.Check your work by opening the file and viewing the appended text
//
fs.appendFileSync('notes.txt','\nSwitch a new line for Merc')
console.log("Rewrite and append Done")