$(function(){
	$('#reg_btn').click(function()
	{
		var username	= $('#username').val();
		var password	= $('#password').val();
		var repassword	= $('#repassword').val();
		var email		= $('#email').val();
		var address		= $('#address').val();
		var rule		= $('#rule').attr('checked');
	    var realname	= $('#realname').val();
		var sex			= $('.gender').val();

		if( username == '' )
		{
			alert('用户名不能为空');
			$('#username').focus();	
			return;
		}
		
		if( password == '' )
		{
			alert('密码不能为空');
			$('#password').focus();
			return;
		}
		
		if( repassword == '' )
		{
			alert('您必须输入两次密码');
			$('#repassword').focus();
			return;
		}
		
		if( password != repassword )
		{
			alert('两次输入的密码不一致');
			$('#password').val('');
			$('#repassword').val('');
			return;
		}
		if( !rule )
		{
			alert('不同意条款，不能进行注册');
			return;
		}

		$.ajax({
			url			: "register/new",
			dataType	: "json",
			data		: {
				'username'	: username,
				'password'	: password,
				'age'		: 50,
				'sex'		: sex,
				'address'	: address,
				'email'		: email,
				'realname'	: realname 
				},
			type		: "post",
			success		: function(data,textStatus)
						{
							var result = data['success'];
							if(result)
							{
								alert('注册成功');
							}
							else
							{
								alert(data['reason']);
							}
						}
		});
		
	});
});
