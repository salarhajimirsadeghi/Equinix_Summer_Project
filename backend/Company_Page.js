//Everytime you click on a company, all their information and lerts will pop up

var express = require('express'); //creates express application
// var clearbit = require('clearbit')('aae1b2264fb94d5d447c252c75dc19b8');
var app = express(); //top-level function exported by the express module

var mysql = require('mysql'); //gets MySQL
var mysqlConnection = mysql.createConnection({ //creates connection and uses the necessary info
	host:'localhost',
	user: 'root',
	password: 'Welcome_10481',
	database: 'all_data',
	port: 3306
});

app.set('port', (process.env.PORT || 5001)) //sets the port of your local program
app.use(express.static(__dirname + '/public')) //tells node where your static assets are located (CSS, HTML, JAVASCRIPT)
app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");

	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
})

//console.log('MADE IT!');
app.get('/alerts/:companyName', function(request, response) {
  	//response.send('c/users/shajimirsadeghi/webstormprojects/DCIM/platforms/browser/www/index.html')
 	inDatabase(request.params.companyName, function(err, results, bReturn) {
		//console.log("PASS 1");
		//var parsedResult = JSON.parse(results);
		// console.log("PASS 2");
		if (bReturn == true){
			response.send(results);
	 		// response.send(" "+request.params.companyName+" Profile!");	
	 	}
	 	else{
	 		response.send("Company Information is not available");
	 	} 	
 	});
 	// console.log('Made It');
 })

//sees if a company name they entered is in our database
function inDatabase(company, callback){
	// mysqlConnection.connect();
	//company parameter isn't being passed in?
	var companyQuery = "SELECT * FROM breaker_trips WHERE Name LIKE '%" + company + "%'";
	
	mysqlConnection.query(companyQuery, function(err, results, fields){
		console.log("CHECK THIS!") //parse the data

		var bReturn = false;
		if(err){
			console.log("ERROR");
		}	
		else{
			console.log(results);
			if(results.length >0){
				console.log(company+ " was found in the database");
				bReturn=true;	
			}
			else{
				console.log("Result not in database");
			}			
		}
		// mysqlConnection.end();
		callback(err, results, bReturn);
	})
}

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})


app.get('/allAlerts', function(request,response){
	console.log("Made it!")
	getAllAlerts(function(err, results){
		if(err){
			console.log("error displaying data");
		}
		else {
			response.send(results);
		}
	})
})

function getAllAlerts(callback){
	var alertRetriever = "Select Name FROM breaker_trips";
	var compQuery = "Select SubString_Index(Name,' ',1) Name from breaker_trips"
	mysqlConnection.query(alertRetriever, function(err,results,fields){
		if (err){
			console.log("error in MySQL");
		}
		else{
			console.log("Alert Retrieval Succesful");
		}
		callback(err,results);
	})
}
