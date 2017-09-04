const assert = require('assert');
const app = require('../src/app');

describe('Feathers issues 635', () => {
  
  it('works when create with data', () => {
    const data = {name: 'test-a-635: works when create with data'};
    return app.service('my-service').create(data)
      .then(function(result) {
        assert.ok(result.name === 'test-a-635: works when create with data', 'my-service.then: create with empty data must fail');
      })      
      .catch(function(result) { // eslint-disable-line no-unused-vars
        assert.ok(false, 'my-service.create.catch: create with data must work');
      });
  });//it  
  
  it('fails when create with empty data', () => {
    const data = {};
    return app.service('my-service').create(data)
      .then(function(result) {
        assert.ok(typeof(result.id) === 'undefined', 'my-service.then: create with empty data must fail');
      }).catch(function (result) {
        assert.ok(result.type === 'FeathersError', 'my-service.catch: create with empty data fail');
      });
  });//it
  
});//describe


  