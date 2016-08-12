'use strict'


class QueueOperations {
	constructor() {
		this.emitter = message_bus;
	}

	init(cfg) {
		this.services = new ServiceApi();
		this.services.initContent();
	}

	launch() {
		return Promise.resolve(true);
	}

}

module.exports = QueueOperations;
