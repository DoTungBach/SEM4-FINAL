function login(){
    var email = $('#username').val();
    var pwd = $('#userpwd').val();
    api_login(email,pwd).done(function(result){
    	if(result.data == null) {
        	$('#blank').html(result.message);
    	} else {
    		sessionStorage.setItem("user_id", result.data.id);
    		sessionStorage.setItem("user_name", result.data.name);
    		window.location.assign('index.html');
    	}
    })
}