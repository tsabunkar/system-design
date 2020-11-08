const express = require('express');

const app = express();

app.use(express.json());

app.get('/hello', (req, resp) => {
  console.log('Headers', req.headers);
  console.log('Method', req.method);
  resp.send('Received Get Request\n');
});

app.post('/hello', (req, resp) => {
  console.log('Headers', req.headers);
  console.log('Method', req.method);
  console.log('Body', req.body);
  resp.send('Received Post Request\n');
});

app.listen(3000, () => {
  console.log('listening at port 3000');
});
