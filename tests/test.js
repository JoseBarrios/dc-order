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

describe('Order.OrderItem', function() {
	it('should return OrderItem class', function() {
    var model = {};
    model.orderItemNumber = 1;
    let orderItem = new Order.OrderItem(model)
    let one = Order.assignedProperties(orderItem);
    order.orderedItem.push(one);
    assert.deepEqual(order.orderedItem, [one]);

    model.orderItemNumber = 2;
    model.description = 'two'
    let orderItem2 = new Order.OrderItem(model)
    let two = Order.assignedProperties(orderItem2);
    order.orderedItem.push(two);
		assert.deepEqual(order.orderedItem, [one, two]);
	});
});
