'use strict'

let events = {
	"queue-operations": {}
};

let tasks = [];


module.exports = {
	module: require('./queue-operations.js'),
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'queue-operations',
		shorthands: events.queue-operations_box
	}
};
