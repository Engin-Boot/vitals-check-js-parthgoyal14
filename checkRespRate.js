const breachConsoleLogger = require("./breachConsoleLogger");

function checkRespRate(respRate) {
    var vitalType = "respRate";
    if (respRate < 30) {
        var breach = "low";
        breachConsoleLogger(vitalType, breach)
        return false;
    }
    else if (respRate > 95) {
        var breach = "high";
        breachConsoleLogger(vitalType, breach)
        return false;
    } else {
        return true;
    }
}

    module.exports = checkRespRate;