// const yargs = require('yargs');
// const args = yargs
//     .command('run-test', 'Run test through API request', {
//         machine:{
//             describe: 'Machine\'s serial number which against is going to be run the test',
//             demand: true,
//             alias: 'm'
//         },
//         testname:{
//             describe: 'Test name what is going to be run on the machine ',
//             demand: true,
//             alias: 't'
//         }
//     })
//     .help()
//     .argv;
// const command = args._[0];

// const commands = {
//     "run-test": function(){
//         console.log('Running!', command)
//     }
// }

// if(command && commands.hasOwnProperty(command)){
//     commands[command]();
// }

const {commandModule} = require('./commands');
commandModule.runCommand();

//const notes = require('./notes.js');

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

