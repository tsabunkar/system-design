const axios = require('axios');
const express = require('express');

const SHARD_ADDRESS = ['http://localhost:3000', 'http://localhost:3001'];
const SHARD_COUNT = SHARD_ADDRESS.length;

const app = express();
app.use(express.json());

function getShardEndpoint(key) {
  // db sharding strategy, should rather use consistent or rendezvous hashing strategy
  const shardNumber = key.charCodeAt(0) % SHARD_COUNT;
  const shardAddress = SHARD_ADDRESS[shardNumber];
  return `${shardAddress}/${key}`;
}

// This is acting like ReverseProxy where we are just forwarding to correct db shards
app.post('/:key', (req, res) => {
  const shardEndpoint = getShardEndpoint(req.params.key);
  console.log(`Forwarding to: ${shardEndpoint}`);

  axios.post(shardEndpoint, req.body).then((innerRes) => {
    res.send();
  });
});

app.get('/:key', (req, res) => {
  const shardEndpoint = getShardEndpoint(req.params.key);
  console.log(`Forwarding to: ${shardEndpoint}`);

  axios.get(shardEndpoint).then((innerRes) => {
    if (innerRes.data === null) {
      res.send('null');
      return;
    }
    res.send(innerRes.data);
  });
});

app.listen(8000, () => {
  console.log(`Listening at port 8000`);
});
