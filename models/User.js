  // models/User.js

  const { DataTypes } = require('sequelize');
  const sequelize = require('../config/database'); // Import the Sequelize configuration

  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });

  module.exports = User;
