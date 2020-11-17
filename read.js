'use strict';

const connection = require('./db');

let sql = `SELECT * FROM todos WHERE completed = ?`;

connection.query(sql, [true], (error, results, fields) => {
	if (error) {
		return console.error(error.message);
	}
	console.log(results);
});
