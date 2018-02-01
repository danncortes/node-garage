const yargs = require('yargs');
const http = require('http');
const fs = require('fs');

const args = yargs
    .command('run-test', 'Run test through API request', {
        serial: {
            describe: 'Machine\'s serial number which against is going to be run the test',
            demand: true,
            alias: 's'
        },
        testname: {
            describe: 'Test name what is going to be run on the machine ',
            demand: true,
            alias: 't'
        }
    }).command('list-tests', 'List available tests')
    .help()
    .argv;

//run: 'node app.js --help' to see the commands
//run: 'node app.js command-name' to see the command's help

const command = args._[0];

const API_URL_TEST = 'http://api.tripxpense.com/:testname/:serial'

function testUrlBuilder(serial, testname, endpoint){
    return endpoint.replace(":serial", serial).replace(":testname", testname);
}

function listTests() {

    const testFolder = './tests/';
    fs.readdir(testFolder, (err, files) => {
        var regexp = new RegExp("\.js+$", 'g');
        const list = [];
        files.forEach((item)=>{
            if(item.match(regexp)){
                item = item.replace(".js", "");
                list.push(item)
            }
        });
        console.log('List of forgescript tests:')
        console.log(JSON.stringify(list, undefined, 2))
    })
}

function testCall() {
    const url = testUrlBuilder(args.serial, args.testname, API_URL_TEST)
    http.get(url, (resp, body) => {
        let data = '';
        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            console.log(JSON.parse(data));
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
}
class CommandModule {
    constructor() {
        this.commands = {
            "run-test": testCall,
            "list-tests": listTests
        }
    }
    runCommand() {
        if (command && this.commands.hasOwnProperty(command)) {
            this.commands[command]();
        }
    }
}

module.exports = {
    commandModule : new CommandModule(),
    testUrlBuilder: testUrlBuilder
}
