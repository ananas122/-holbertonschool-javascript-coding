#!/usr/bin/node
// fs = module pr travailler avc des fichiers
const fs = require('fs');
fs.writeFile(process.argv[2], process.argv[3], 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
