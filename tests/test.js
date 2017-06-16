'use strict'

var assert = require('assert');
var Order = require('../index.js');

var model = {};
model.name = 'jose';
model.orderNumber = 1234;
let order = new Order(model);

describe('person.givenName', function() {
	it('should capitalize given name', function() {
		assert.equal(order.name, model.name);
	});
});
