const time = require("../utils/timeZone")
const timezone = require("moment-timezone")

const getTime= ()=>{
    const result = {}
    time.forEach(element => {
        result[element]= timezone().tz(zone).format('YYYY-MM-DD HH:mm:ss')
    });
    return result;
}

module.exports = {getTime}