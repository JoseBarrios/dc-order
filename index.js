const Intangible = require('dc-intangible');

class OrderItem extends Intangible {

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

  get orderDelivery(){ return this.model.orderDelivery; }
  set orderDelivery(value){
    this.model.orderDelivery = value;
  }

  get orderItemNumber(){ return this.model.orderItemNumber; }
  set orderItemNumber(value){
    this.model.orderItemNumber = value;
  }

  get orderItemStatus(){ return this.model.orderItemStatus; }
  set orderItemStatus(value){
    this.model.orderItemStatus = value;
  }

  get orderQuantity(){ return Number(this.model.orderQuantity); }
  set orderQuantity(value){
    if(OrderItem.isString(value)){ this.model.orderQuantity = Number(value); }
    else if( OrderItem.isNumber(value)){ this.model.orderQuantity = value; }
  }

  get orderedItem(){ return this.model.orderedItem; }
  set orderedItem(value){ this.model.orderedItem = value; }

  //NON-STANDARD
  get price(){ return this.model.price; }
  set price(value){
    if(OrderItem.isString(value)){ this.model.price = Number(value); }
    else if( OrderItem.isNumber(value)){ this.model.price = value; }
  }

  get priceCurrency() { return this.model.priceCurrency}
  set priceCurrency(value){ this.model.priceCurrency = value; }

  set total(value){}
  get total(){ return this.model.price * this.model.orderQuantity }


  //////////////////////
  //
  // INSTANCE METHODS
  //
  // //////////////////
  priceFormatted(symbol='', currency=''){
    let amount = `${symbol}${(this.price/100).toFixed(2)}${currency}`;
    return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }
  totalFormatted(symbol='', currency=''){
    let amount = `${symbol}${(this.total/100).toFixed(2)}${currency}`;
    return amount.replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  }

}





































const Type = 'Order';
const Empty = '';
class Order extends Intangible {

  static get type(){ return TYPE; }
  static get OrderItem(){ return OrderItem; }

  static assignedProperties(order, format='object'){
    format = format.toLowerCase();
    var assignedProperties = null;

    switch(format){

      case 'array':
        assignedProperties = [];
        Intangible.utils.forIn(order.model, (value, key) => {
          if(!Intangible.isEmpty(value)){
            assignedProperties.push(key);
          }
        })
        break;

      case 'object':
        assignedProperties = {};
        Intangible.utils.forIn(order.model, (value, key) => {
          if(!Intangible.isEmpty(value)){
            assignedProperties[key] = value;
          }
          if(key === 'orderedItem'){
            value.forEach((orderedItem, index) => {
              assignedProperties[key][index] = Intangible.assignedProperties(orderedItem)
            })
          }
        })
        break;

      default:
        console.log('assignedProperties format not supported')
    }

    return assignedProperties;
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
    this.model.acceptedOffer = value;
  }

  get billingAddress(){ return this.model.billingAddress; }
  set billingAddress(value){
    this.model.billingAddress = value;
  }

  get broker(){ return this.model.broker; }
  set broker(value){
    this.model.broker = value;
  }

  get confirmationNumber(){ return this.model.confirmationNumber; }
  set confirmationNumber(value){
    this.model.confirmationNumber = value;
  }

  get customer(){ return this.model.customer; }
  set customer(value){
    this.model.customer = value;
  }

  get discount(){ return this.model.discount; }
  set discount(value){
    this.model.discount = value;
  }

  get discountCode(){ return this.model.discountCode; }
  set discountCode(value){
    this.model.discountCode = value;
  }

  get discountCurrency(){ return this.model.discountCurrency; }
  set discountCurrency(value){
    this.model.discountCurrency = value;
  }

  get isGift(){ return this.model.isGift; }
  set isGift(value){
    this.model.isGift = value;
  }

  get orderDate(){ return this.model.orderDate; }
  set orderDate(value){
    this.model.orderDate = value;
  }

  get orderDelivery(){ return this.model.orderDelivery; }
  set orderDelivery(value){
    this.model.orderDelivery = value;
  }

  get orderNumber(){ return this.model.orderNumber; }
  set orderNumber(value){
    this.model.orderNumber = value;
  }

  get orderStatus(){ return this.model.orderStatus; }
  set orderStatus(value){
    this.model.orderStatus = value;
  }

  get orderedItem(){ return this.model.orderedItem; }
  set orderedItem(value){
    if(OrderItem.isEmpty(value)){
      this.model.orderedItem = [];
    } else if(OrderItem.isArray(value)){
      this.model.orderedItem = [];
      value.forEach((model, index) => {
        this.model.orderedItem[index] = new OrderItem(model)
      })
    } else { console.error('orderedItem must be of type Array') }
  }

  get partOfInvoice(){ return this.model.partOfInvoice; }
  set partOfInvoice(value){
    this.model.partOfInvoice = value;
  }

  get paymentDueDate(){ return this.model.paymentDueDate; }
  set paymentDueDate(value){
    this.model.paymentDueDate = value;
  }

  get paymentMethod(){ return this.model.paymentMethod; }
  set paymentMethod(value){
    this.model.paymentMethod = value;
  }

  get paymentMethodId(){ return this.model.paymentMethodId; }
  set paymentMethodId(value){
    this.model.paymentMethodId = value;
  }

  get paymentUrl(){ return this.model.paymentURL; }
  set paymentUrl(value){
    this.model.paymentURL = value;
  }

  get paymentURL(){ return this.model.paymentURL; }
  set paymentURL(value){
    this.model.paymentURL = value;
  }


  get seller(){ return this.model.seller; }
  set seller(value){
    this.model.seller = value;
  }

}

module.exports = Order;
