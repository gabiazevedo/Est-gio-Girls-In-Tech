const ValueNotSuported = require('./errors/ValueNotSuported');
const jsontoxml = require('jsontoxml');

class Serializer {
  json(data) {
    return JSON.stringify(data);
  };

  xml(data) {
    let tag = this.singularTag;

    if (Array.isArray(data)) {
      tag = this.pluralTag;
      data = data.map((item) => { 
        return {
          [this.singularTag]: item
        }
      });
    };

    return jsontoxml({ [tag]: data });
  }

  serialize(data) {
    data = this.filter(data);
    if (this.contentType === 'application/json') {
      return this.json(data);
    };

    if (this.contentType === 'application/xml') {
      return this.xml(data);
    };

    throw new ValueNotSuported(this.contentType);
  };

  filterObj(data) {
    const newObj = {};

    this.publicData.forEach((item) => {
      if (data.hasOwnProperty(item)) {
        newObj[item] = data[item];
      };
    });
    return newObj;
  };

  filter(data) {
    if (Array.isArray(data)) {
      data = data.map((item) => this.filterObj(item));
    } else {
      data = this.filterObj(data);
    }
    return data;
  };
};

class SupplierSerializer extends Serializer {
  constructor(contentType, extraFields) {
    super();
    this.contentType = contentType;
    this.publicData = ['id', 'company', 'category']
      .concat(extraFields || []);
    this.singularTag = 'supplier';
    this.pluralTag = 'suppliers';
  };
};

class ErrorSerializer extends Serializer {
  constructor(contentType, extraFields) {
    super();
    this.contentType = contentType;
    this.publicData = ['id', 'message']
      .concat(extraFields || []);
    this.singularTag = 'error';
    this.pluralTag = 'errors';
  };
}

module.exports = {
  Serializer: Serializer,
  SupplierSerializer: SupplierSerializer,
  ErrorSerializer: ErrorSerializer,
  acceptFormat: ['application/json', 'application/xml']
};
