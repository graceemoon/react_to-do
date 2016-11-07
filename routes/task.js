const tasks = require('express').Router();


const showMethod = (req, res) => res.json(`${req.method} tasks/${req.params.taskID}`);


//specifics first, so taskID before task
tasks.route('/:taskID')
	.get((req, res) => res.json(`get tasks/${req.params.taskID}`))
	.put(showMethod)
	.delete(showMethod);

	tasks.route('/')
	.get(showMethod)
	.post(showMethod);


module.exports = tasks;
