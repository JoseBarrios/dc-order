'use strict'

var assert = require('assert');
var Intangible = require('dc-intangible')
var Order = require('../index.js');

var model = {};
model.name = 'jose';
model.orderNumber = 1234;
model.orderedItem = [{price:1000, orderQuantity: 3}]
let order = new Order(model);


describe('Order.isNumber', function() {
	it('should inheret Thing static method isNumber', function() {
		assert.equal(Order.isNumber(1), true);
		assert.equal(Order.isNumber('x'), false);
	});
});

describe('Order.assignedProperties', function() {
	it('should inheret Thing static method assignedProperties', function() {
		//assert.equal(Order.assignedProperties(order).name, 'jose');
		assert.deepEqual(Order.assignedProperties(order).orderedItem[0].price, model.orderedItem[0].price);
	});
});

describe('Order.OrderItem', function() {
	it('should return OrderItem class', function() {
    var model = {};
    model.orderItemNumber = 1;
    model.orderQuantity = 10;
    model.orderPrice = 2500;
    let orderItem = new Order.OrderItem(model)
		assert.equal(orderItem.orderItemNumber, 1);
	});
});

describe('order.orderedItem', function() {
	it('should return OrderItem class results', function() {
    assert.equal(order.orderedItem[0].price, 1000);
    assert.equal(order.orderedItem[0].orderQuantity, 3);
    assert.equal(new Order.OrderItem(order.orderedItem[0]).priceFormatted('$'), '$10.00');
    assert.equal(new Order.OrderItem(order.orderedItem[0]).totalFormatted('$'), '$30.00');
	});
});

describe('Order.OrderItem.itemTotal', function() {
	it('should return the total for the item (price * quantity)', function() {
    var model = {};
    model.orderQuantity = 10;
    model.price = 2500;
    let orderItem = new Order.OrderItem(model)
    assert.equal(orderItem.total, 25000)
	});
});

describe('Order.OrderItem.totalFormatted', function() {
	it('should return the item total in human readable format', function() {
    var model = {};
    let orderItem = new Order.OrderItem(model)
    orderItem.price = '2500';
    orderItem.orderQuantity = '10';
    assert.equal(orderItem.totalFormatted(), '250.00')
    assert.equal(orderItem.totalFormatted('$'), '$250.00')
    assert.equal(orderItem.totalFormatted('', 'USD'), '250.00USD')
    assert.equal(orderItem.totalFormatted('$', 'USD'), '$250.00USD')
	});
});

describe('Order.OrderItem.priceFormatted', function() {
	it('should return the price in human readable format', function() {
    var model = {};
    model.price = 2100;
    let orderItem = new Order.OrderItem(model)
    assert.equal(orderItem.priceFormatted(), '21.00')
    //assert.equal(orderItem.priceFormatted('$'), '$21.00')
    //assert.equal(orderItem.priceFormatted('','USD'), '21.00 USD')
    //assert.equal(orderItem.priceFormatted('$','USD'), '$21.00 USD')
	});
});
