// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

const errors = require('feathers-errors');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function (hook) { // eslint-disable-line no-unused-vars
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    if (hook.data && Object.keys(hook.data).length > 0){//Data is not empty
      //do something
    
      //Return hook and continue
      return Promise.resolve(hook);
    } else {
      //Cancel hook chain with error
      return Promise.reject(new errors.GeneralError('fails when create without data', {sourcee: 'test-a-635'}));
    }
  };
};
     