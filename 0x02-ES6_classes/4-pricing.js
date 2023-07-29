import Currency from './3-currency.js';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this._validateNumber(amount, 'amount');
    this._currency = this._validateCurrency(currency, 'currency');
  }

  // Getter for amount
  get amount() {
    return this._amount;
  }

  // Setter for amount
  set amount(newAmount) {
    this._amount = this._validateNumber(newAmount, 'amount');
  }

  // Getter for currency
  get currency() {
    return this._currency;
  }

  // Setter for currency
  set currency(newCurrency) {
    this._currency = this._validateCurrency(newCurrency, 'currency');
  }

  // Method to display the attributes in the specified format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price using the provided conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Private helper method to validate number attribute
  _validateNumber(value, attribute) {
    if (typeof value !== 'number') {
      throw new TypeError(`${attribute} must be a number.`);
    }
    return value;
  }

  // Private helper method to validate Currency object attribute
  _validateCurrency(value, attribute) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${attribute} must be an instance of Currency.`);
    }
    return value;
  }
}
