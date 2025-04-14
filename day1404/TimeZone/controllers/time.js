const moment = require('moment-timezone');
const timezones = require('../utils/timeZone');

const getTimes = (req, res) => {
  const times = {};

  timezones.forEach(zone => {
    times[zone] = moment().tz(zone).format('YYYY-MM-DD HH:mm:ss');
  });

res.json(times)
};

module.exports = { getTimes };
