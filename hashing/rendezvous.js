const utils = require('./hashing-utils.js');

const serverSet1 = [
  'server0',
  'server1',
  'server2',
  'server3',
  'server4',
  'server5',
];

// A server is removed in this set/list
const serverSet2 = ['server0', 'server1', 'server2', 'server3', 'server4'];

// clients
const usernames = [
  'usernames0',
  'usernames1',
  'usernames2',
  'usernames3',
  'usernames4',
  'usernames5',
  'usernames6',
  'usernames7',
  'usernames8',
  'usernames9',
];

// Simple hashing strategy
function pickServerSimple(username, servers) {
  const hash = utils.hashString(username);
  return servers[hash % servers.length];
}

// Rendezvous hashing strategy
function pickServerRendezvous(username, servers) {
  let maxServer = null;
  let maxScore = null;
  for (const server of servers) {
    const score = utils.computeScore(username, server);
    if (maxScore === null || score > maxScore) {
      maxScore = score;
      maxServer = server;
    }
  }
  return maxServer;
}

console.log('Simple Hashing Strategy');
for (const username of usernames) {
  const server1 = pickServerSimple(username, serverSet1);
  const server2 = pickServerSimple(username, serverSet2);
  const serverAsEqual = server1 === server2;
  console.log(
    `${username}: ${server1} ==After_removal==> ${server2} | equal : ${serverAsEqual}`
  );
}
console.log('----------------------------------------');
console.log('Rendezvous Hashing Strategy');
for (const username of usernames) {
  const server1 = pickServerRendezvous(username, serverSet1);
  const server2 = pickServerRendezvous(username, serverSet2);
  const serverAsEqual = server1 === server2;
  console.log(
    `${username}: ${server1} ==After_removal==> ${server2} | equal : ${serverAsEqual}`
  );
}
