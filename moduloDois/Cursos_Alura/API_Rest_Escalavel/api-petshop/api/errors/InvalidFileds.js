class InvalidFields extends Error {
  constructor(field) {
    const message = `The field ${field} is not valid!`;
    super(message)
    this.name = 'InvalidFields';
    this.errorId = 1
  };
};

module.exports = InvalidFields;