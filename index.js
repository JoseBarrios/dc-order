const Intangible = require('@josebarrios/intangible');

class Order extends Intangible {

  static sayHi(){
    console.log('Hello, world!')
  }

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

  get acceptedOffer(){ return this.model.acceptedOffer; }
  set acceptedOffer(value){
    if(!value) return;
    this.model.acceptedOffer = value;
  }

  get billingAddress(){ return this.model.billingAddress; }
  set billingAddress(value){
    if(!value) return;
    this.model.billingAddress = value;
  }

  get broker(){ return this.model.broker; }
  set broker(value){
    if(!value) return;
    this.model.broker = value;
  }

  get confirmationNumber(){ return this.model.confirmationNumber; }
  set confirmationNumber(value){
    if(!value) return;
    this.model.confirmationNumber = value;
  }

  get customer(){ return this.model.customer; }
  set customer(value){
    if(!value) return;
    this.model.customer = value;
  }

  get discount(){ return this.model.discount; }
  set discount(value){
    if(!value) return;
    this.model.discount = value;
  }

  get discountCode(){ return this.model.discountCode; }
  set discountCode(value){
    if(!value) return;
    this.model.discountCode = value;
  }

  get discountCurrency(){ return this.model.discountCurrency; }
  set discountCurrency(value){
    if(!value) return;
    this.model.discountCurrency = value;
  }

  get isGift(){ return this.model.isGift; }
  set isGift(value){
    if(!value) return;
    this.model.isGift = value;
  }

  get orderDate(){ return this.model.orderDate; }
  set orderDate(value){
    if(!value) return;
    this.model.orderDate = value;
  }

  get orderDelivery(){ return this.model.orderDelivery; }
  set orderDelivery(value){
    if(!value) return;
    this.model.orderDelivery = value;
  }

  get orderNumber(){ return this.model.orderNumber; }
  set orderNumber(value){
    if(!value) return;
    this.model.orderNumber = value;
  }

  get orderStatus(){ return this.model.orderStatus; }
  set orderStatus(value){
    if(!value) return;
    this.model.orderStatus = value;
  }

  get orderedItem(){ return this.model.orderedItem; }
  set orderedItem(value){
    if(!value) return;
    this.model.orderedItem = value;
  }

  get partOfInvoice(){ return this.model.partOfInvoice; }
  set partOfInvoice(value){
    if(!value) return;
    this.model.partOfInvoice = value;
  }

  get paymentDueDate(){ return this.model.paymentDueDate; }
  set paymentDueDate(value){
    if(!value) return;
    this.model.paymentDueDate = value;
  }

  get paymentMethod(){ return this.model.paymentMethod; }
  set paymentMethod(value){
    if(!value) return;
    this.model.paymentMethod = value;
  }

  get paymentMethodId(){ return this.model.paymentMethodId; }
  set paymentMethodId(value){
    if(!value) return;
    this.model.paymentMethodId = value;
  }

  get paymentUrl(){ return this.model.paymentUrl; }
  set paymentUrl(value){
    if(!value) return;
    this.model.paymentUrl = value;
  }

  get seller(){ return this.model.seller; }
  set seller(value){
    if(!value) return;
    this.model.seller = value;
  }

}

module.exports = Order;
