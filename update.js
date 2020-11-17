'use strict';

const connection = require('./db');

let sql = `UPDATE todos SET completed = ? WHERE id = ?`;
let data = [false, 1];

connection.query(sql, data, (error, results, fields) => {
	if (error) {
		return console.error(error.message);
	}
	console.log(results);
});
