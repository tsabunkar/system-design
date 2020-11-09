const express = require('express');
const fs = require('fs');

const DIR = 'storage/db';

const app = express();
app.use(express.json());

const hashTable = {}; // storing data in-memory(RAM) <- will be wipped out on every restart of server

app.post('/memory/:key', (req, res) => {
  hashTable[req.params.key] = req.body.data;
  res.send('Successfully stored in memory!!');
});

app.get('/memory/:key', (req, res) => {
  const key = req.params.key;
  if (key in hashTable) {
    res.send(hashTable[key]);
  }
  res.send('No data found in the in-memory variable');
});

app.post('/disk/:key', (req, res) => {
  const destinationFile = `${DIR}/${req.params.key}`;
  fs.writeFileSync(destinationFile, req.body.data);
  res.send('Successfully stored in Disk (i.e- file) !!');
});

app.get('/disk/:key', (req, res) => {
  const destinationFile = `${DIR}/${req.params.key}`;
  try {
    const data = fs.readFileSync(destinationFile);
    res.send(data);
  } catch (error) {
    res.send('No data found in the disk');
  }
});

app.listen(3001, () => {
  console.log('Listening at port 3001');
});
