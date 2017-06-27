const Thing = require('@josebarrios/thing')
const Intangible = require('@josebarrios/intangible');
const Multiple = require('aggregation/es6')

class OrderItem extends Multiple(Thing, Intangible) {

  static get type(){ return 'OrderItem'; }

  constructor(model){
    model = model || {};
    super(model);

    this.orderDelivery = model.orderDelivery;
    this.orderItemNumber = model.orderItemNumber;
    this.orderItemStatus = model.orderItemStatus;
    this.orderQuantity = model.orderQuantity;
    this.orderedItem = model.orderedItem;
    //Non standard
    this.price = model.price;
    this.priceCurrency = model.priceCurrency || 'USD';
  }

  get type(){ return 'OrderItem'; }
  set type(value) {}

  get orderDelivery(){ return this.computed.orderDelivery; }
  set orderDelivery(value){
    this.computed.orderDelivery = value;
  }

  get orderItemNumber(){ return this.computed.orderItemNumber; }
  set orderItemNumber(value){
    this.computed.orderItemNumber = value;
  }

  get orderItemStatus(){ return this.computed.orderItemStatus; }
  set orderItemStatus(value){
    this.computed.orderItemStatus = value;
  }

  get orderQuantity(){ return this.computed.orderQuantity; }
  set orderQuantity(value){
    this.computed.orderQuantity = Number(value);
  }

  get orderedItem(){ return this.computed.orderedItem; }
  set orderedItem(value){ this.computed.orderedItem = value; }

  //NON-STANDARD
  get price(){ return this.computed.price; }
  set price(value){ this.computed.price = Number(value); }

  get priceCurrency() { return this.computed.priceCurrency}
  set priceCurrency(value){ this.computed.priceCurrency = value; }

  set total(value){}
  get total(){ return this.computed.price * this.computed.orderQuantity }

  priceFormatted(){ return `$${(this.price/100).toFixed(2)} ${this.priceCurrency}`; }
  totalFormatted(){ return `$${(this.total/100).toFixed(2)} ${this.priceCurrency}`; }

}

const Type = 'Order';
const Empty = '';
class Order extends Multiple(Thing, Intangible) {

  static get type(){ return TYPE; }
  static get OrderItem(){ return OrderItem; }

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

  get type(){ return TYPE; }
  set type(value) {}

  get acceptedOffer(){ return this.computed.acceptedOffer; }
  set acceptedOffer(value){
    this.computed.acceptedOffer = value;
  }

  get billingAddress(){ return this.computed.billingAddress; }
  set billingAddress(value){
    this.computed.billingAddress = value;
  }

  get broker(){ return this.computed.broker; }
  set broker(value){
    this.computed.broker = value;
  }

  get confirmationNumber(){ return this.computed.confirmationNumber; }
  set confirmationNumber(value){
    this.computed.confirmationNumber = value;
  }

  get customer(){ return this.computed.customer; }
  set customer(value){
    this.computed.customer = value;
  }

  get discount(){ return this.computed.discount; }
  set discount(value){
    this.computed.discount = value;
  }

  get discountCode(){ return this.computed.discountCode; }
  set discountCode(value){
    this.computed.discountCode = value;
  }

  get discountCurrency(){ return this.computed.discountCurrency; }
  set discountCurrency(value){
    this.computed.discountCurrency = value;
  }

  get isGift(){ return this.computed.isGift; }
  set isGift(value){
    this.computed.isGift = value;
  }

  get orderDate(){ return this.computed.orderDate; }
  set orderDate(value){
    this.computed.orderDate = value;
  }

  get orderDelivery(){ return this.computed.orderDelivery; }
  set orderDelivery(value){
    this.computed.orderDelivery = value;
  }

  get orderNumber(){ return this.computed.orderNumber; }
  set orderNumber(value){
    this.computed.orderNumber = value;
  }

  get orderStatus(){ return this.computed.orderStatus; }
  set orderStatus(value){
    this.computed.orderStatus = value;
  }

  get orderedItem(){ return this.computed.orderedItem; }
  set orderedItem(value){
    if(OrderItem.isEmpty(value)){
      this.computed.orderedItem = [];
    } else if(OrderItem.isArray(value)){
      this.computed.orderedItem = value;
    } else { console.error('orderedItem must be of type Array') }
  }

  get partOfInvoice(){ return this.computed.partOfInvoice; }
  set partOfInvoice(value){
    this.computed.partOfInvoice = value;
  }

  get paymentDueDate(){ return this.computed.paymentDueDate; }
  set paymentDueDate(value){
    this.computed.paymentDueDate = value;
  }

  get paymentMethod(){ return this.computed.paymentMethod; }
  set paymentMethod(value){
    this.computed.paymentMethod = value;
  }

  get paymentMethodId(){ return this.computed.paymentMethodId; }
  set paymentMethodId(value){
    this.computed.paymentMethodId = value;
  }

  get paymentUrl(){ return this.computed.paymentURL; }
  set paymentUrl(value){
    this.computed.paymentURL = value;
  }

  get paymentURL(){ return this.computed.paymentURL; }
  set paymentURL(value){
    this.computed.paymentURL = value;
  }


  get seller(){ return this.computed.seller; }
  set seller(value){
    this.computed.seller = value;
  }

}

module.exports = Order;
