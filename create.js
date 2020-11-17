'use strict';

const connection = require('./db');

// Create table
let createTodos = `create table if not exists todos(
    id int primary key auto_increment,
    title varchar(255)not null,
    completed tinyint(1) not null default 0
)`;

connection.query(createTodos, function (err, results, fields) {
	if (err) {
		console.log(err.message);
	}
});

// Insert record
let sql = `INSERT INTO todos(title, completed)
            VALUES('Learn how to insert a new row.', true)`;

connection.query(sql, function (err, results, fields) {
	if (err) {
		console.log(err.message);
	}
});

// Insert row with placehlders
let stmt = `INSERT INTO todos(title,completed)
            VALUES(?,?)`;
let todo = ['Insert a new row with placeholders', false];

// execute the insert statment
connection.query(stmt, todo, (err, results, fields) => {
	if (err) {
		return console.error(err.message);
	}
	// get inserted id
	console.log('Todo Id:' + results.insertId);
});
