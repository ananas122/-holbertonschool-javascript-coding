#!/usr/bin/node
const fs = require('fs');

// Replace 'your-file.txt' with the path to the file you want to read
const filePath = 'cisfun.txt';

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }
  console.log('File content:');
  console.log(data);
});
