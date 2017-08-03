// Initializes the `myService` service on path `/my-service`
const createService = require('feathers-memory');
const hooks = require('./my-service.hooks');
const filters = require('./my-service.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');

  const options = {
    name: 'my-service',
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/my-service', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('my-service');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
