class NotFound extends Error {
  constructor () {
    super('Supplier not found')
    this.name = 'Not Found';
    this.errorId = 0;
  };
};


module.exports = NotFound;
