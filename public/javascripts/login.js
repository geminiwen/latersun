$(function(){
	$('#login_btn').click(function()
	{
		var username = $('#username').val();
		var password = $('#password').val();
		
		if( '' == username )
		{
			alert('用户名不能为空');
			$('#username').focus();
			return;
		}
		
		if( '' == password )
		{
			alert('密码不能为空');
			$('#password').focus();
			return;
		}
		
		var loginObject = 
			{
				url			: 'login/do',
				type		: 'post',
				dataType	: 'json',
				data		:	{
					username	: username,
					password	: password
					},
				success		: function(data,textStatus)
					{
						var result = data['success'];
						if(result)
						{
							alert('登陆成功');
						}
						else
						{
							alert(data['reason']);
						}
					}
			};
		$.ajax(loginObject);
		
	});   
});
