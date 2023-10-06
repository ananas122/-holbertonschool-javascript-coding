/**
* Counts the number of students in a CSV dataset grouped by field of study.
* Reads in a CSV file containing student data, counts the number of students
* for each unique field of study, and prints a summary of the data.
* 
* @param {string} path - The file path to the CSV data file
* @throws {Error} If the file cannot be read
*/
const fs = require('fs');
function countStudents(path) {
 const students = {};
 let numberOfStudents = 0;

 try {
   const data = fs.readFileSync(path, 'utf8');

   // Array of lines from the CSV data
   const lines = data.split('\n').filter(Boolean);

   for (const line of lines) {

     const [firstName, lastName, age, field] = line.split(',').map(item => item.trim());

     if (!field || !firstName) {
       continue;
     }

     students[field] = students[field] || [];
     students[field].push(firstName);
     numberOfStudents++;
   }

   console.log(`Number of students: ${numberOfStudents}`);

   for (const [field, list] of Object.entries(students)) {
     console.log(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}`);
   }

 } catch (error) {
   console.error(`Error: Cannot load the database`);
   throw new Error('Cannot load the database');
 }
}
module.exports = countStudents;