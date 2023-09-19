#!/opt/homebrew/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const todo = JSON.parse(body);
    const completedTasksByUser = {};

    todo.forEach((todo) => {
      if (todo.completed) {
        completedTasksByUser[todo.userId] = (completedTasksByUser[todo.userId] || 0) + 1;
      }
    });

    console.log(completedTasksByUser);
  } else {
    console.error(error || `Code d'état ${response.statusCode}`);
  }
});
