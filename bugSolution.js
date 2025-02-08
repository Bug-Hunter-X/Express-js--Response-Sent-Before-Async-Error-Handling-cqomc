const express = require('express');
const app = express();
app.get('/', (req, res) => {
  doSomethingAsync()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.status(500).send('Error: ' + err.message);
    });
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Something went wrong'));
    }, 100);
  });
}