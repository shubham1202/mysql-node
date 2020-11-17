'use strict';

var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'admin123',
	password: 'Admin@123',
	database: 'todoapp'
});

/**** 
 * connection -> object
	connect -> method
**/
connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.message);
		return;
	}
	console.log('Connected to the MySQL server.');
});

/*** connection.end(function (err) {
	if (err) {
		return console.log('error:' + err.message);
	}
	console.log('Close the database connection.');
});
***/

module.exports = connection;
