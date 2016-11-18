const tasks = require('express').Router();
const db = require('../model/tasks');

const showMethod = (req, res) => res.json(`${req.method} tasks/${req.params.taskID}`);
const sendJSONresp = (req, res) => res.json(res.rows);

//specifics first, so taskID before task
tasks.route('/:taskID')
	.get((req, res) => res.json(`get tasks/${req.params.taskID}`))
	.put(showMethod)
	.delete(showMethod);

	tasks.route('/')
	.get(db.getTasks, sendJSONresp);
	.post(showMethod);


module.exports = tasks;
