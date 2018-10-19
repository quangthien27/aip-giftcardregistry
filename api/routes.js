const registry = require('./controllers/registry.controller');
const user = require('./controllers/user.controller');

module.exports = function(app, express) {
  const apiRouter = express.Router();

  // Registry route
  apiRouter.use('/registry', registry);

  // User route
  apiRouter.use('/user', user);

  return apiRouter;
};
