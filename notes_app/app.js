//notes app by Vansh Jakhetia

const notes = require('./Notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

yargs.version('1.1.0')

// creating an new command
    yargs.command({
        command: 'Vansh',
        describe: 'This is a notes application backend made by node.js',
        handler: function(){
            console.log(chalk.bold.yellow('Hello world!!..,This is a notes application backend made by node.js'))
        }
    })

// creating an add command
    yargs.command({
        command : 'add',
        describe: 'Add a new note',
        builder:{
            title:{
                describe: 'Note title',
                demandOption: true,
                type: 'string' 
            },
            body:{
                describe:'Body of the note(content of a note)',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            console.log(chalk.magenta.bold('Adding a new  note!'+' with title '+ argv.title + ' and body ' + argv.body))
            notes.addNote(argv.title, argv.body)
        }
    })


//creating an delete command
    yargs.command({
        command: 'delete',
        describe: 'This command will remove the note',
        builder:{
            title:{
                describe:'Title of the note which is to be deleted',
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv) {
            notes.deleteNote(argv.title)
        }
    })

//creating an listing command
yargs.command({
    command: 'list',
    describe: 'This command will list all the notes',
    handler() {
        console.log(chalk.bold.gray.inverse('Listing all the notes'))
        notes.listNotes()
    }
})

// creating an reading command
yargs.command({
    command: 'read',
    describe: 'This command will read the note',
    builder:{
        title:{
            describe:'Title of the note which you want to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log(chalk.bold.cyanBright.inverse('Reading the note'))
        notes.readNote(argv.title)
    }
})

yargs.parse()
// vansh jakhetia

// console.log(chalk.green("Executed succesfully"))