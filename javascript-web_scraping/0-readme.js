#!/usr/bin/node
// module file system
const fs = require('fs');

const filePath = 'cisfun.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log(data);
});
