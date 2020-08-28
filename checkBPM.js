const breachConsoleLogger = require("./breachConsoleLogger");

function checkBPM(BPM) {
    var vitalType = "BPM";
    if (BPM < 70) {
        var breach = "low";
        breachConsoleLogger(vitalType, breach)
        return false;
    }
    else if (BPM > 150) {
        var breach = "high";
        breachConsoleLogger(vitalType, breach)
        return false;
    } else {
        return true;
    }
}

module.exports=checkBPM;