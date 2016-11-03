'use strict'

let events = {
	"queue-operations": {}
};

let tasks = [];


module.exports = {
	module: require('./queue-operations.js'),
	name: 'queue-operations',
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'queue-operations',
	}
};