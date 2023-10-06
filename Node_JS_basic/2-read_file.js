/**
* Compte le nombre d'étudiants par domaine d'études à partir d'un fichier CSV.
* Analyse un fichier CSV contenant des données étudiantes et affiche
* un résumé du nombre d'étudiants par domaine.
* @param {string} path - Chemin du fichier CSV
* @throws {Error} Si le fichier ne peut pas être lu
*/
const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.split('\n');
    // Créer un [objet] représentant les étudiants en excluant la ligne 0
    const students = lines.slice(1).map(line => {
      const [firstName, lastName, age, field] = line.split(',');
      // return l'objet etudient en convertissant l age en nb decimal 10
      return { firstName, lastName, age: parseInt(age, 10), field };
    });
    // Filtrer les étudiants par domaine d'études (CS ou SWE)
    const csStudents = students.filter(student => student.field === 'CS');
    const sweStudents = students.filter(student => student.field === 'SWE');

    console.log(`Number of students: ${students.length}`);
    console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.map(student => student.firstName).join(', ')}`);
    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.map(student => student.firstName).join(', ')}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
