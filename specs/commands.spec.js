var assert = require('chai').assert;
const {testUrlBuilder} = require('../commands');

describe('Commands', () => {
    describe('Run-Test', () => {
        it('Should build the endpoint with machine code and testname console parameters', () => {
            //Arrange
            const API_URL = '/api/machines/:serial/requirements/:testname'
            //Act
            const url = testUrlBuilder('ABC-123', 'example', API_URL);
            //Assert
            assert.equal(url, '/api/machines/ABC-123/requirements/example');
        });
    })
});