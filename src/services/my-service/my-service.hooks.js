
const testA635 = require('../../hooks/test-a-635');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [testA635()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
