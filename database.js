const Sequelize = require('sequelize')

const sequelize = new Sequelize('ExpenseTracker', 'root', 'Geeta@6204',{
    dialect: 'mysql',
    host: 'localhost'
})
module.exports = sequelize;