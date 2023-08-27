const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return 'Your names...'
}

const addNote = (title , body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)

    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green("A new node added sussecfully"))
    }else{
        console.log(chalk.red('Note title '+ title+' is already taken!!'))
    }

    
}
const deleteNote = (title) => {
    // console.log(title+'note will be removed soon...')
    const notes = loadNotes()
    const notesToKeep = notes.filter(note => note.title !== title )
    
    saveNotes(notesToKeep)
    if(notes.length === notesToKeep.length){
        console.log(chalk.red.inverse('No note found with title'+'title'))
        
    }
    else{
        console.log(chalk.green.bold('Note deleted sussecfully'))
    }

}

const listNotes = ()=> {
    const notes = loadNotes()
    // console.log('listing notes')
    notes.forEach( (note) => {
        console.log(note.title)
    });
}

const readNote = (title)=> {
    const notes = loadNotes()
    console.log(chalk.black.bold('Reading the note with title : ' + title))
    const noteToBeRead = notes.find((note) => note.title === title)

    if(noteToBeRead){
        console.log(chalk.bold.underline(noteToBeRead.title))
        console.log(chalk.italic(noteToBeRead.body))
    }else{
        console.log(chalk.red.bold('No node found with title '+ title))
    }
    

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON  = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        // console.log('error catched!!')
        return []
    }
    
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    deleteNote: deleteNote,
    listNotes: listNotes,
    readNote: readNote
}