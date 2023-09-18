#!/usr/bin/node
// process.argv[2]' est le 3eme arg : contient le chemin du fichier à lire.
const fs = require('fs');
fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
