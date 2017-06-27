'use strict'

var assert = require('assert');
var Intangible = require('@josebarrios/intangible')
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
		assert.equal(Order.keys(order)[0], 'additionalType');
	});
});

describe('Order.assignedProperties', function() {
	it('should inheret Thing static method assignedProperties', function() {
		assert.equal(Order.assignedProperties(order).name, 'jose');
	});
});

describe('Order.OrderItem', function() {
	it('should return OrderItem class', function() {
    var model = {};
    model.orderItemNumber = 1;
    let orderItem = new Order.OrderItem(model)
		assert.equal(orderItem.orderItemNumber, 1);
	});
});

describe('order.orderedItem', function() {
	it('should return OrderItem class', function() {
    assert.equal(Order.isEmpty([]), true)
    var model = {};
    model.orderItemNumber = 1;
    let orderItem = new Order.OrderItem(model)
    order.orderedItem = [Order.assignedProperties(orderItem)];
    assert.deepEqual(order.orderedItem, [Order.assignedProperties(orderItem)]);
	});
});
