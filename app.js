const yargs = require('yargs');


//Customize yargs version

yargs.version('1.1.0')

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        console.log('Title: ',argv.title);
    }
})
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    handler:function(){
        console.log('Removing a new note!')
    }
})

yargs.command({
    command:'list',
    describe:'list a new note',
    builder:{
        title:{
          describe:'Note title'

        }
    },
    handler:function(){
        console.log('PlaceholderForList');
    }
})

yargs.command({
    command:'read',
    describe:'read new note',
    handler:function(argv){
        console.log('PlaceholderForRead',argv)
    }
})

 yargs.parse()
