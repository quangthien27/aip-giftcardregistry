const user = require('./controllers/user.controller');
const tick = require('./controllers/tick.controller');

module.exports = function(app, express) {
  const apiRouter = express.Router();

  // Setup user route
  apiRouter.use('/user', user);

  // Test tick
  apiRouter.use('/tick', tick);

  return apiRouter;
};
