const users = require('./users/users.service.js');
const myService = require('./my-service/my-service.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(myService);
};
