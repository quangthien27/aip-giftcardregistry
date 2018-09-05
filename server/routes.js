const user = require('./user');
const tick = require('./tick');

module.exports = function(app, express) {
  const apiRouter = express.Router();

  // Setup user route
  apiRouter.use('/user', user);

  // Test tick
  apiRouter.use('/tick', tick);

  return apiRouter;
};
