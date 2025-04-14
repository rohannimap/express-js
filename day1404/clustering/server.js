const cluster = require("cluster")
const os = require("os")

const totalCpus = os.cpus().length;
console.log(totalCpus);
