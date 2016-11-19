var http = require('http');
var url = require('url');
var querystring = require('querystring');

function accept(req, res) {
	let loginData;
	req.on('data', function(chunk) {
		loginData = JSON.parse(chunk);
	}).on('end', function() {
		let responseData;
		let timer = Math.floor((Math.random() * 9) + 1) * 1000;
		if (loginData.name === '' || loginData.password === '' || (loginData.name === 'foo' && loginData.password === 'bar')) {
			responseData = JSON.stringify({ Auth: "Denied" });
		}
		else {
			responseData = JSON.stringify({ Auth: "Logged", Language: "EN" });
		}
		res.writeHead(200, {
			'Access-Control-Allow-Headers': 'Content-Type',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
			'Content-Type': 'application/json'
		});

		res.setTimeout(timer, function(){
			res.end(JSON.stringify(responseData))
		});
	});

}

http.createServer(accept).listen(9000);