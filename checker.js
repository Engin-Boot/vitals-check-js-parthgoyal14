const expect = require('chai').expect;
var checkBPM = require('./checkBPM.js');
var checkRespRate = require('./checkRespRate.js');
var checkSPO2 = require('./checkSPO2.js');

expect(checkBPM(100) && checkSPO2(95) && checkRespRate(70)).to.be.true;
expect(checkBPM(50) && checkSPO2(95) && checkRespRate(70)).to.be.false;

console.log('checker is done');