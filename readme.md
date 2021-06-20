# System Design

## Cache:

- \$ cd cache
- \$ node server.js
- Goto : http://localhost:3001/nocache/index.html (Every request will 3 second)
- http://localhost:3001/nocache/index.html (first request takes 3 second, after that every consecutive request is spontaneous from localCahce)
