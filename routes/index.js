
/*
 * GET home page.
 */

var sequelize	= require('../sequelize');
var User		= require('../model/user').User;
exports.index = function(req, res){
	res.render("index.html");
};

exports.register = function(req,res)
{
	var netaction = req.params.action;
	if( netaction == null )
	{
		res.render('register.html');
		return;
	}
	var action = { 
		init : function( user )
			{
				User
					.find({ where: { 'username': user.username } })
					.success(this.success);
			},
		success : function( _user )
			{
				if( null == _user )
				{
					action.register(user);
				}
				else
				{
					res.json(
						{
							'success'	: false,
							'reason'	: '用户名已存在'
						});
				}
			},
		error		: function( error )
			{
					console.log(error);
			},
		register	: function ( newuser )
			{
				console.log(newuser);
				User
					.build(
						{
							'username'	: newuser.username,
							'password'	: newuser.password,
							'realname'	: newuser.realname,
							'age'		: newuser.age,
							'sex'		: newuser.sex,
							'photourl'	: newuser.photourl || 'cpp.jpg',
							'registertime'	: new Date()
					})
					.save()
					.success(function( user )
						{
							res.json(
								{
									'success' : true
								});
						}
					)
					.error(this.error);
			}
	};
	var user = {};
	user['username'] = req.body['username'];
	user['password'] = req.body['password'];
	user['age']		 = req.body['age'];
	user['sex']		 = req.body['sex'];
	user['address']	 = req.body['address'];
	user['email']	 = req.body['email'];
	user['realname'] = req.body['realname'];
	user['photourl'] = req.body['photourl'];
	action.init(user);
	
}
