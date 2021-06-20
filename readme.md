# System Design

- GoodNotes: https://drive.google.com/drive/folders/1WF7gOTTMT9tNCgNlbOXsxa3h8zHkVioq?usp=sharing

## Cache:

- \$ cd cache
- \$ node server.js
- Goto : http://localhost:3001/nocache/index.html (Every request will 3 second)
- http://localhost:3001/nocache/index.html (first request takes 3 second, after that every consecutive request is spontaneous from localCahce)

## Proxy

- \$ cd proxy
- \$ docker build -t nginx-conf:1.0.0 . (build the custome image)
- \$ docker image ls
- \$ docker run nginx-conf:1.0.0 (run the custome image)
- \$ node server.js (run the server at 3000)
- At client (another terminal)
  - \$ curl localhost:3000/hello
  - \$ curl localhost:8081/hello
