axios = require('axios');

const coord = [{
        city: 'Medellin',
        lat: 6.25184,
        lng: -75.56359,
        time: 5000
    },
    {
        city: 'Bogotá',
        lat: 4.60971,
        lng: -74.08175,
        time: 2000
    },
    {
        city: 'Caracas',
        lat: 10.48801,
        lng: -66.87919,
        time: 3000
    }
];

async function runTests() {
    for(let item of coord) {
        let result = await printRes(item); // wait till the promise resolves (*)
        console.log(result); // "done!"
    };
}

function printRes(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(item.city), item.time)
    });
}

runTests()