const validator=require('validator')
const getYourNotes=require('./notes')
const notes = getYourNotes()
console.log(notes);
console.log(validator.isEmail('andrew@example.com'))
console.log(validator.isURL('https://mead.io'))


// const add=require('./utils')
// // const  name='Merc'
// const sum=add(4,-2)
// console.log(sum);
