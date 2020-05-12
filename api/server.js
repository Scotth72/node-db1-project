const express = require('express');

const db = require('../data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
	db('accounts')
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
});

server.get('/:id', (req, res) => {
	db('accounts')
		.where('id', req.params.id)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
});

server.post('/', (req, res) => {
	db('accounts')
		.insert(req.body)
		.then((response) => {
			res.status(201).json(response);
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
});

server.delete('/:id', (req, res) => {
	db('accounts')
		.where('id', req.params.id)
		.delete()
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
});

server.put('/:id', (req, res) => {
	db('accounts')
		.where('id', req.params.id)
		.update(req.body)
		.then((response) => {
			res.status(200).json(response);
		})
		.catch((error) => {
			res.status(500).json({ message: error.message });
		});
});

module.exports = server;
