const breachConsoleLogger = require("./breachConsoleLogger");

function checkSPO2(SPO2) {
    var vitalType = "SPO2";
    if (SPO2 < 90) {
        var breach = "low";
        breachConsoleLogger(vitalType, breach)
        return false;
    }
    else if (SPO2 > 110) {
        var breach = "high";
        breachConsoleLogger(vitalType, breach)
        return false;
    } else {
        return true;
    }
}

module.exports=checkSPO2;