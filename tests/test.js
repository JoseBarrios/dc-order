'use strict'

var assert = require('assert');
var Order = require('../index.js');

var model = {};
model.name = 'jose';
model.orderNumber = 1234;
let order = new Order(model);

describe('Order.isNumber', function() {
	it('should inheret Thing static method isNumber', function() {
		assert.equal(Order.isNumber(1), true);
		assert.equal(Order.isNumber('x'), false);
	});
});

describe('Order.keys', function() {
	it('should inheret Thing static method keys', function() {
		assert.equal(Order.keys(order), true);
	});
});
