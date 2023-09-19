#!/usr/bin/node
const request = require('request');
let countFilms = 0;

request(process.argv[2], function (err, _response, body) {
  if (err == null) {
    const resp = JSON.parse(body); // Analyse la resp JSON en un objet JS

    const results = resp.results;// Obtient la propriété 'results' de l'objet 'resp'.

    for (const personnage of results) {
      const characters = element.characters;

      for (const personnage of characters) {
        if (personnage.search('18') > 0) { // Vérifie si le 'personnage' contient '18'.
          countFilms++;
        }
      }
    }
  }
  console.log(countFilms);
});
