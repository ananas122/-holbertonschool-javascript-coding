#!/usr/bin/node
const request = require('request');

// Récupération de l'URL depuis le 1er argv en ligne de commande.
const url = process.argv[2];

// Faire la requête GET.
request.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // Afficher le code de statut.
    console.log('code:', response.statusCode);
  }
});
