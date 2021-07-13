# Shards

- Think we have two shards i.e- `aedb_data_0` and `aedb_data_1` (folders)
- Think Reverse proxy as : `aedb_proxy.js`
- Open Four Terminals: (Before every terminal ==> \$ cd shards)
  - Terminal 1: \$ DATA_DIR=aedb_data_0 PORT=3000 node aedb.js
  - Terminal 2: \$ DATA_DIR=aedb_data_1 PORT=3001 node aedb.js
  - Terminal 3: \$ node aedb_proxy.js
  - Terminal 4: \$ curl --header 'Content-Type: application/json' --data '{"data": "This is some data."}' localhost:8000/a
- You see that reverse proxy is forwarding or chossing right db shards :)
- Again run -> Terminal 4: \$ curl -w "\n" localhost:8000/a
- Again run -> Terminal 4: \$ curl --header 'Content-Type: application/json' --data '{"data": "This is some data."}' localhost:8000/b
- Again run -> Terminal 4: \$ curl -w "\n" localhost:8000/b
