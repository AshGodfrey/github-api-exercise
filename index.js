function findRepos(){
	let userValue = $("#username").val();
	fetch (`https://api.github.com/users/${userValue}/repos`)
		.then(response => response.json())
		.then(responseJson => 
			displayResults(responseJson))
		.catch(error => alert('Something went wrong. Try again later.'));
	
}

function submitForm() {
	$('form').submit(event => {
    event.preventDefault();
    findRepos();
  });
}

function displayResults(responseJson) {
	console.log(responseJson);
	let error = responseJson.message;
	if (error == "Not Found") {
		$('#results').html(`Username not Found`)
	} else {
		let myArray = responseJson;
		for (var i=0; i < myArray.length; i++) {
		$('#results').append(`<a href="${myArray[i].archive_url}">${myArray[i].name}</a><br>`)
	}
		$('.results').removeClass('hidden');
	}
  
}
	
submitForm();