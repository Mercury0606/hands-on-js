const validator=require('validator')
const getYourNotes=require('./notes')
const notes = getYourNotes()
const  chalk= require('chalk')
const log = console.log;
const greenMSG = chalk.green('Success!');






log(notes);
log(validator.isEmail('andrew@example.com'))
log(validator.isURL('https://mead.io'))
log(greenMSG)


log(chalk.inverse.bold('What'))
log(chalk.blue('Hello')+' World'+chalk.red('!'))
log(chalk.blue.bgRed.bold('Hello world!'));
// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
    'I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));

log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);






// const add=require('./utils')
// // const  name='Merc'
// const sum=add(4,-2)
// log(sum);
