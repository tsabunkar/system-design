// app.js - Your Node.js application

const config = require("./config");

// Accessing configuration values
console.log(`App Name: ${config.appName}`);
console.log(`Port: ${config.port}`);
console.log(`Database Host: ${config.database.host}`);
console.log(`Database Name: ${config.database.databaseName}`);
