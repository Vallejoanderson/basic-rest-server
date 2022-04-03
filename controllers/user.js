const { response } = require('express');

const userGet = (request, res = response) => {
	const query = request.query;
	res.json({
		msg: 'get API - Controllers',
		query
	})
};

const userPut = (request, res = response) => {

	const { id } = request.params;

	res.json({
		msg: 'put API - Controllers',
		id
	})
}

const userPost = (request, res = response) => {
	const body = request.body;
	res.status(201).json({
		msg: 'post API - Controllers',
		...body
	})
}

const userPatch = (request, res = response) => {
	res.status(201).json({
		msg: 'patch API - Controllers'
	})
}

const userDelete = (request, res = response) => {
	res.json({
		msg: 'delete API - Controllers'
	})
}

module.exports = {
	userGet,
	userPut,
	userPost,
	userPatch,
	userDelete
}