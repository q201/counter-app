// Require http module
let http = require("http");

// Create server
http.createServer(function (req, res) {

	res.writeHead(200, { 'Content-Type': 'text/plain' });

	// Send the response body as "This is the example
	// of node.js web based application"
	res.end('This is the example of node.js web-based application \n');

	// Console will display the message
}).listen(5000,
	() => console.log('Server running at http://127.0.0.1:5000/'));



    let options = {
        host: 'www.geeksforgeeks.org',
        path: '/courses',
        method: 'GET'
    };
    
    // Making a get request to
    // 'www.geeksforgeeks.org'
    http.request(options, (response) => {
    
        // Printing the statusCode
        console.log(`STATUS: ${response.statusCode }`);
    }).end();
    