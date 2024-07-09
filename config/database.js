// Import Sequelize from the sequelize package
const { Sequelize } = require('sequelize');

// Create a new Sequelize instance, which represents a connection to the database
const sequelize = new Sequelize(
  'oluwadarapostre', // Database name
  'Oluwadara123',    // Database username
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1d2xxYnhvd3JobHliZXdmZ291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA1MzI2NDcsImV4cCI6MjAzNjEwODY0N30.bH_t2z1vClq8eaUjS5XF2Hgv0fjjqhqQs0moWJKRRAE', // Database password
  {
    dialect: 'postgres', // The database dialect to be used (PostgreSQL in this case)
    host: 'huwlqbxowrhlybewfgou.supabase.co',   // The host where the database is running (localhost means it's running on your local machine)
  }
);

// Export the Sequelize instance to be used in other parts of your application
module.exports = sequelize;
