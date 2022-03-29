class ValueNotSuported extends Error {
  constructor(contentType) {
    super(`${contentType} not suported`);
    this.name = 'ValueNotSuported';
    this.errorId = 3;
  };
};

module.exports = ValueNotSuported;