// Importer Express
const express = require('express');

// Importer la logique métier
const countStudents = require('./3-read_file_async'); 

// Créer l'application Express
const app = express();

// Route racine
app.get('/', (req, res) => {
 res.send('Hello Holberton School!');
});

// Route pour récupérer les étudiants
app.get('/students', async (req, res) => {
 res.write('This is the list of our students\n');
 try {
   // Récupérer les étudiants
   const students = await countStudents(process.argv[2]);

   // Envoyer la liste au format texte
   res.end(students.join('\n'));


   res.statusCode = 200;
   res.end();

 } catch (error) {
   res.statusCode = 500;
   res.end(error.message);

 }
});

// Démarrer le serveur
app.listen(1245);

// Exporter l'app
module.exports = app;
