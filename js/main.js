baseURL  = "https://api.formclip.xyz";

function registerUser(email){
	if(email == "") {
        alert("Kindly fill in the email field!");
        return;
    }
	var data = JSON.stringify({
		"email": email
	});
	
	var config = {
		method: 'post',
		url: baseURL + '/auth/register',
		headers: { 
		'Content-Type': 'application/json'
		},
		data : data
	};
	
	axios(config)
	.then(function (response) {
		alert(JSON.stringify(response.data.message));
	})
	.catch(function (error) {
		alert(JSON.stringify(error.response.data.message));
	});
}