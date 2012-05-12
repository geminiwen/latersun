var Sequelize = require('sequelize');
var dbconfig  = require('./dbConfig');
var sequelize = new Sequelize('latersun','root','123456',dbconfig.dbConfig);
exports.sequelize = sequelize;
