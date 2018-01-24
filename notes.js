fs = require('fs');
console.log('starting notes');

var fetchNotes = () => {
    try{
        var noteString = fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);
    }
    catch(e){
        return []
    }
}

var saveNote = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

var addNote = (title, body) =>{
    var notes = fetchNotes();
    var note = {
        title, body
    }
    var duplicatedNote = notes.filter((note)=> note.title === title )

    if(duplicatedNote.length === 0){
        notes.push(note)
        saveNote(notes)
        return note;
    }
}

var removeNote = (title) => {
    console.log('Removing note!');
    var notes = fetchNotes();
    var newNotes = notes.filter((note)=> note.title !== title);
    saveNote(newNotes);

    return notes.length !== newNotes.length;
}

var getAll = () => {
    console.log('List of all notes')
}

var getNote = (title) => {
    console.log(title)
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}