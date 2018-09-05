const express = require('express');
const router = express.Router({});
const UserModel = require('./models/user.model');

const methods = {
  userInfo: function(req, res) {
    // Get user data
    UserModel.findById(req.params.userId, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }

      const userObj = {
        email: result.email,
        username: result.username
      };

      return res.json({
        success: true,
        data: {
          user: userObj
        }
      });
    });
  }
};

router.get('/userInfo/:userId', methods.userInfo);

module.exports = Object.assign(router, {methods});
