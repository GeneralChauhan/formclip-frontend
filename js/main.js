baseURL  = "https://api.formclip.xyz";

function registerUser(email){
	console.log(email);
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
		console.log(JSON.stringify(response.data.response));
		alert(JSON.stringify(response.data.response));
	})
	.catch(function (error) {
		console.log(error);
	});
}