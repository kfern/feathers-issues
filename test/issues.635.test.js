const assert = require('assert');
const app = require('../src/app');

describe('Feathers issues 635', () => {
  it('fails when create with empty data', () => {
    const datos = {};
    return app.service('my-service').create(datos)
      .catch(function() {
        assert.ok(true, 'my-service.catch: create with empty data must fail');
      })    
      .then(function(result) {
        assert.equal(typeof(result.id), 'undefined', 'my-service.then: create with empty data must fail');
      });
  });//it
});//describe


  