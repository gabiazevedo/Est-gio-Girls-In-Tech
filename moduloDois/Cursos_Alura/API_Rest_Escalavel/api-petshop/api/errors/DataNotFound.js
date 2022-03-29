class DataNotFound extends Error {
  constructor() {
    super('No data to update');
    this.name = 'DataNotFound';
    this.errorId = 2;
  };
};

module.exports = DataNotFound;