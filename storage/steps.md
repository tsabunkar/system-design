# Steps

- Terminal-1:
  - \$ npm run start-storage
- Terminal-2:
  - POST Request :
    - \$ curl localhost:3001/memory/foo --header 'Content-Type: application/json' --data '{"data": "This is some data in memory"}'
  - GET Request : (-w for new line)
    - \$ curl localhost:3001/memory/foo -w "\n"
    - \$ curl localhost:3001/memory/bar -w "\n"
  - POST Request (Disk) :
    - Create a folder - storage/db
    - \$ curl localhost:3001/disk/foo --header 'Content-Type: application/json' --data '{"data": "This is some data in Disk-file"}'
  - GET Request :
    - \$ curl localhost:3001/disk/foo -w "\n"
    - \$ curl localhost:3001/disk/bar -w "\n"
