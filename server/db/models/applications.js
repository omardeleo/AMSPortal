const Sequelize = require('sequelize')
const db = require('../db')

const Applications = db.define('applications', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  applicantName: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  status: {
    type: Sequelize.ENUM('UNDER REVIEW', 'REJECTED', 'ACCEPTED'),
    allowNull: false
  },
  applicantEmail: {
    type: Sequelize.STRING
  },
  applicationBody: {
    type: Sequelize.TEXT
  }
})

module.exports = Applications
