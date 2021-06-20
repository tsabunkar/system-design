# System Design

- GoodNotes: https://drive.google.com/drive/folders/1WF7gOTTMT9tNCgNlbOXsxa3h8zHkVioq?usp=sharing

## Cache:

- \$ cd cache
- \$ node server.js
- Goto : http://localhost:3001/nocache/index.html (Every request will 3 second)
- http://localhost:3001/nocache/index.html (first request takes 3 second, after that every consecutive request is spontaneous from localCahce)
