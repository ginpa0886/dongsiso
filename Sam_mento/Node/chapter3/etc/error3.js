const fs = require('fs').promises;

setInterval(() => {
  fs.unlink('./abcdfg.js')
}, 1000);