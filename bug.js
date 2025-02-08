const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Asynchronous operation that might throw an error
  doSomethingAsync()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      // Error handling, but the response is never sent if the error occurs after res.send
      console.error(err);
    });
  // Sending the response before the async operation completes
  res.send('Hello');
});

function doSomethingAsync() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate an error
      reject(new Error('Something went wrong'));
    }, 100);
  });
}