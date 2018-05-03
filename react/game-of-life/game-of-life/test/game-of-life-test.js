var chai = require('chai');
var expect = chai.expect;
var assert = require('assert');

describe('sum array', function () {
    it('should be equal to 6', function () {
        expect([1, 2, 3].reduce((a, b) => a + b)).to.be.eql(6);
    })
})