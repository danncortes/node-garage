const yargs = require('yargs');
const args = yargs
    .command('run-test', 'Run test through API request', {
        machine:{
            describe: 'Machine\'s serial number which against is going to be run the test',
            demand: true,
            alias: 'm'
        },
        testname:{
            describe: 'Test name what is going to be run on the machine ',
            demand: true,
            alias: 't'
        }
    })
    .help()
    .argv;
const command = args._[0];

const commands = {
    "run-test": function(){
        console.log('Running!', command)
    }
}

module.exports = () => {
    if(command && commands.hasOwnProperty(command)){
        commands[command]();
    }
}