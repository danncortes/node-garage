const yargs = require('yargs');
const args = yargs.argv;
const command = args._[0];

const notes = require('./notes.js');

// if(command === 'list'){
//     notes.getAll();
// }
// else if(command === 'add'){
//     var note = notes.addNote(args.title, args.body); 
//     if(note){
//         console.log('Note added!', note);
//     }
//     else{
//         console.log('ERROR: Duplicated note!');
//     }
// }
// else if(command === 'read'){ 
//     notes.getNote(args.title)
// }
// else if(command === 'remove'){
//     var noteRemoved = notes.removeNote(args.title);

//     if(noteRemoved){
//         console.log('Note Removed')
//     }
//     else{
//         console.log('Note not found')
//     }
// }


const commands = {
    "run-test": function(){
        if(!args.machine || !args.test){
            console.log('Error: Machine serial or test name are missing!');
        }else{
            
        }
    }
}

if(command){
    commands[command]();
}
