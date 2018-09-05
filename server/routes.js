const user = require('./user.controller');
const tick = require('./tick.controller');

module.exports = function(app, express) {
  const apiRouter = express.Router();

  // Setup user route
  apiRouter.use('/user', user);

  // Test tick
  apiRouter.use('/tick', tick);

  return apiRouter;
};
