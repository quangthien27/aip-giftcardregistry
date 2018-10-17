const registry = require('./controllers/registry.controller');
const user = require('./controllers/user.controller');

module.exports = function(app, express) {
  const apiRouter = express.Router();

  // Setup registry route
  apiRouter.use('/registry', registry);

  // Setup user route
  apiRouter.use('/user', user);

  return apiRouter;
};
