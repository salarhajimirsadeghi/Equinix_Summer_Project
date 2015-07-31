var express = require('express'); //creates express application
var app = express(); //top-level function exported by the express module


var mysql = require('mysql'); //gets MySQL
var mysqlConnection = mysql.createConnection({ //creates connection and uses the necessary info
	host:'localhost',
	user: 'root',
	password: 'Welcome_10481',
	database: 'all_data',
	port: 3306
});

app.set('port', (process.env.PORT || 5000)) //sets the port of your local program
app.use(express.static(__dirname + './www')) //tells node where your static assets are located (CSS, HTML, JAVASCRIPT)
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");

	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

//console.log('MADE IT!');
app.get('/', function(request, response) {
  	//response.send('c/users/shajimirsadeghi/webstormprojects/DCIM/platforms/browser/www/index.html')
 	//response.send('Hello World');
 	// console.log('Made It');
 	alertNumber(alertCallback, response);

})



app.get('/query', function (request, response) { //when the function finishes, it comes back
  testquery(queryCallback, response); //goes to testQuery 
});

function alertNumber(callback, response){
	// console.log('CHECK')
	// console.log('mysql is working')
	mysqlConnection.query("Select Count(*) alertCount FROM breaker_trips where Status=1;", function(err, rows,fields){
		
		if(err){
			console.log(err);
			callback(err,null,response);
		}
		else{
			//var parsedNumber = rows[0]["b_count"];
			// console.log(parsedNumber);
			// console.log('CHECKPOINT!');
			callback(null,rows,response);
		}
	});
}

function alertCallback(err,result,response){
	console.log('checker2')
	var alerts = result;
	if(err){
		// console.log('problem');
		alerts=err;
	}
	// console.log('CheckPoints')
	// console.log(alerts);
	response.send(alerts);
	// console.log("CHECCCCKKKK");
}

function testquery(callback, response){ //goes to query callback 

	mysqlConnection.query("Select * from ibx_data_2 where name != 'Pandora Media, Inc.';", function(err, rows, fields){
		if (err) {
			console.log(err);
			callback(err,null, response);
		}
		else{
			// console.log('The solution is: ', rows[0]);
			// console.log(rows.length);
			callback(null,rows, response);
		}
	});
}

function queryCallback(err, results, response){ //displays info
  	var responseFormatted = results;
  	if(err){
  		responseFormatted=err;
  	}
	console.log('Data Displayed');
 	response.send(responseFormatted);
}



app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


