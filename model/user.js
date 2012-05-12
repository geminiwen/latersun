var sequelize = require('../sequelize').sequelize;
var Sequelize = require('sequelize');
exports.User = sequelize.define('userinfo',{
	'userid'	: {
			type			: Sequelize.INTEGER,
			autoIncrement	: true,
			primaryKey		: true,
			validate		:	{
				notNull	: true
				}
			},
	'familyid'	: {
			type		: Sequelize.INTEGER,
			validate	:	{
				notNull	: false
				}
			},
	'username'	: {
			type		: Sequelize.STRING,
			validate	: {
				len		: 32,
				notNull	: true
				}
			},
	'password'	: {
			type		: Sequelize.STRING,
			validate	: {
				len		: 10,
				notNull	: true
				}
			},
	'realname'	: {
			type		: Sequelize.STRING,
			validate	: {
				len		: 10,
				notNull	: true
				}
			},
	'age'		: {
			type		: Sequelize.INTEGER,
			validate	: {
				len		: 6,
				notNull	: false
				}
			},
	'sex'		: {
			type		: Sequelize.STRING,
			validate	: {
				len		: 4,
				notNull	: true 
				}
			},
	'photourl'	: {
			type		: Sequelize.STRING,
			validate	: {
				len		: 30,
				notNull	: false
				}
			},
	'email'		: {
			type		: Sequelize.STRING,
			validate	: {
				len		: 50,
				notNull : false
				},
			},
	'address'	: {
			type		: Sequelize.STRING,
			validate	: {
				notNull	: false
				},
			},
	'registertime' : {
			type		: Sequelize.STRING,
			validate	: {
				isDate	: true
				}
			}
	},
	{
		freezeTableName	: true,
		timestamps		: false
	}
);
