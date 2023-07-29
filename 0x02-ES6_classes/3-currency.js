export default class Currency {
  constructor(code, name) {
    this._code = this._validateString(code, 'code');
    this._name = this._validateString(name, 'name');
  }

  // Getter for code
  get code() {
    return this._code;
  }

  // Setter for code
  set code(newCode) {
    this._code = this._validateString(newCode, 'code');
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for name
  set name(newName) {
    this._name = this._validateString(newName, 'name');
  }

  // Method to display the attributes in the specified format
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }

  // Private helper method to validate string attribute
  _validateString(value, attribute) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a string.`);
    }
    return value;
  }
}
