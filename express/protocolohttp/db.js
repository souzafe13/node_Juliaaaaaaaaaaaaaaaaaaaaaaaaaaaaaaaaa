// Biblioteca Sequelize
const sequelize = require('sequelize');

// Conexão com Banco de Dados
const sequelize2 = new sequelize('postapp', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

module.exports = {
    sequelize : sequelize,
    sequelize2 : sequelize2
}