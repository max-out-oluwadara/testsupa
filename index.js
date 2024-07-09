// index.js
const express = require("express"); // Import Express.js
const sequelize = require('./config/database'); // Import the Sequelize instance
const User = require('./models/User'); // Import the User model (ensure this file exists and is correctly defined)

const app = express(); // Create an Express application

app.use('/', (req,res )=>{
    res.send("Hello World")
})

const port = 3000; // Define the port number the app will listen on

// Test the database connection
sequelize.authenticate().then(() => {
  app.listen(port, () => console.log(`Database connected successfully and app listening on port ${port}`));
}).catch((error) => {
  console.log(error.message);
});
