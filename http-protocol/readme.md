# Http Protocol

- Terminal-1:
  - \$ npm run start-interaction
- Terminal-2:
  - GET API:
    - \$ curl localhost:3000/hello
  - POST API:
    - \$ curl --header "Content-Type: application/json" localhost:3000/hello --data '{"foo": "bar"}'
