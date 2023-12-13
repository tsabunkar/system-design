// app.js - Your Node.js application

// Accessing configuration values from environment variables
const config = {
  appName: process.env.APP_NAME || "MyNodeApp",
  port: process.env.PORT || 3000,
  database: {
    host: process.env.DB_HOST || "localhost",
    username: process.env.DB_USERNAME || "user",
    password: process.env.DB_PASSWORD || "password",
    databaseName: process.env.DB_NAME || "mydatabase",
  },
  // Add more configuration options as needed
};

// Using the configuration values
console.log(`App Name: ${config.appName}`);
console.log(`Port: ${config.port}`);
console.log(`Database Host: ${config.database.host}`);
console.log(`Database Name: ${config.database.databaseName}`);
