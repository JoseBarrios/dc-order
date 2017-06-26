const Thing = require('@josebarrios/thing')
const Intangible = require('@josebarrios/intangible');
const Multiple = require('aggregation/es6')

class Order extends Multiple(Thing, Intangible) {

  constructor(model){
    model = model || {};
    super(model);

    this.acceptedOffer = model.acceptedOffer;
    this.billingAddress  = model.billingAddress ;
    this.broker = model.broker;
    this.confirmationNumber = model.confirmationNumber;
    this.customer = model.customer;
    this.discount = model.discount;
    this.discountCode = model.discountCode;
    this.discountCurrency = model.discountCurrency;
    this.isGift = model.isGift;
    this.orderDate = model.orderDate;
    this.orderDelivery = model.orderDelivery;
    this.orderNumber = model.orderNumber;
    this.orderStatus = model.orderStatus;
    this.orderedItem = model.orderedItem;
    this.partOfInvoice = model.partOfInvoice;
    this.paymentDueDate = model.paymentDueDate;
    this.paymentMethod = model.paymentMethod;
    this.paymentMethodId = model.paymentMethodId;
    this.paymentURL = model.paymentURL || model.paymentUrl;
    this.seller = model.seller;
  }

  get acceptedOffer(){ return this.computed.acceptedOffer; }
  set acceptedOffer(value){
    if(!value) return;
    this.computed.acceptedOffer = value;
  }

  get billingAddress(){ return this.computed.billingAddress; }
  set billingAddress(value){
    if(!value) return;
    this.computed.billingAddress = value;
  }

  get broker(){ return this.computed.broker; }
  set broker(value){
    if(!value) return;
    this.computed.broker = value;
  }

  get confirmationNumber(){ return this.computed.confirmationNumber; }
  set confirmationNumber(value){
    if(!value) return;
    this.computed.confirmationNumber = value;
  }

  get customer(){ return this.computed.customer; }
  set customer(value){
    if(!value) return;
    this.computed.customer = value;
  }

  get discount(){ return this.computed.discount; }
  set discount(value){
    if(!value) return;
    this.computed.discount = value;
  }

  get discountCode(){ return this.computed.discountCode; }
  set discountCode(value){
    if(!value) return;
    this.computed.discountCode = value;
  }

  get discountCurrency(){ return this.computed.discountCurrency; }
  set discountCurrency(value){
    if(!value) return;
    this.computed.discountCurrency = value;
  }

  get isGift(){ return this.computed.isGift; }
  set isGift(value){
    if(!value) return;
    this.computed.isGift = value;
  }

  get orderDate(){ return this.computed.orderDate; }
  set orderDate(value){
    if(!value) return;
    this.computed.orderDate = value;
  }

  get orderDelivery(){ return this.computed.orderDelivery; }
  set orderDelivery(value){
    if(!value) return;
    this.computed.orderDelivery = value;
  }

  get orderNumber(){ return this.computed.orderNumber; }
  set orderNumber(value){
    if(!value) return;
    this.computed.orderNumber = value;
  }

  get orderStatus(){ return this.computed.orderStatus; }
  set orderStatus(value){
    if(!value) return;
    this.computed.orderStatus = value;
  }

  get orderedItem(){ return this.computed.orderedItem; }
  set orderedItem(value){
    if(!value) return;
    this.computed.orderedItem = value;
  }

  get partOfInvoice(){ return this.computed.partOfInvoice; }
  set partOfInvoice(value){
    if(!value) return;
    this.computed.partOfInvoice = value;
  }

  get paymentDueDate(){ return this.computed.paymentDueDate; }
  set paymentDueDate(value){
    if(!value) return;
    this.computed.paymentDueDate = value;
  }

  get paymentMethod(){ return this.computed.paymentMethod; }
  set paymentMethod(value){
    if(!value) return;
    this.computed.paymentMethod = value;
  }

  get paymentMethodId(){ return this.computed.paymentMethodId; }
  set paymentMethodId(value){
    if(!value) return;
    this.computed.paymentMethodId = value;
  }

  get paymentUrl(){ return this.computed.paymentUrl; }
  set paymentUrl(value){
    if(!value) return;
    this.computed.paymentUrl = value;
  }

  get seller(){ return this.computed.seller; }
  set seller(value){
    if(!value) return;
    this.computed.seller = value;
  }

}

module.exports = Order;
