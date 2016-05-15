//List() Function - Calls a list of movie quotes and displays them in browser.
function list() {
	
	$("#quotes").empty(); //Clears <div id="quotes"> so results do not stack
	
	$.ajax({
		url: "http://movie-quotes-2.herokuapp.com/api/v1/quotes",
		type: "get",
		dataType: "json",
		success: function(result) {

			$.each(result, function(i, item) {
				console.log(item);

				var quote = "";
				quote += "<p><em>" + item.content + "</em></p>";
				quote += "<p>&mdash; " + item.character + ", " +  item.film + "</em></p>";
				quote += "<hr>";
				$("#quotes").append(quote);

				//Adds padding and box shadow
				document.getElementById("quotes").setAttribute("style", "padding:10px; box-shadow: 10px 10px 5px #888888;");
			});
		},
		error: function(result) {
			alert ("Oops! Something went wrong, Please try again.");
		}
	});

}
//End of List() function


//Value Function() - Calls a movie quote based on the users selected input.
function selectValue() {

    var quoteNumber = document.getElementById("noSelect").value;
    console.log (quoteNumber);


		$.ajax({
			url: "http://movie-quotes-2.herokuapp.com/api/v1/quotes" + "/" + quoteNumber,
			type: "get",
			dataType: "json",
			success: function(result) {
					console.log(result);

					var quote = "";
					quote += "<p><em>" + result.content + "</em></p>";
					quote += "<p>&mdash; " + result.character + ", " +  result.film + "</em></p>";
					quote += "<hr>";
					//.empty() Clears <div id="quotes"> so results do not stack
					$("#quotes").empty().append(quote);

					//Adds padding and box shadow
					document.getElementById("quotes").setAttribute("style", "padding:10px; box-shadow: 10px 10px 5px #888888;");
					
			},
			error: function(result) {
				alert ("Please choose a valid number and try again.");
			}
		}); 

}

//End of Value function


//Random() Function - Calls a random movie quote and displays in browser.
function random() {

	$.ajax({
		url: "http://movie-quotes-2.herokuapp.com/api/v1/quotes/random",
		type: "get",
		dataType: "json",
		success: function(result) {
				console.log(result);

				var quote = "";
				quote += "<p><em>" + result.content + "</em></p>";
				quote += "<p>&mdash; " + result.character + ", " +  result.film + "</em></p>";
				quote += "<hr>";
				//.empty() Clears <div id="quotes"> so results do not stack
				$("#quotes").empty().append(quote);
				//Adds padding and box shadow
				document.getElementById("quotes").setAttribute("style", "padding:10px; box-shadow: 10px 10px 5px #888888;" );
				

		},
		error: function(result) {
			alert ("Oops! omething went wrong, Please try again.");
		}
	
	});

}
//End of Random() function

