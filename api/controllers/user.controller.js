const express = require('express');
const router = express.Router({});
const UserModel = require('../models/user.model');
const md5 = require('md5');

const methods = {
  /**
   * Find user by email address
   * @param req
   * @param res
   */
  getUser: function(req, res) {
    // Get user data
    UserModel.find({email: req.params.userEmail}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      if (users.length) {
        const userFound = users.pop();

        return res.json({
          success: true,
          user: {
            email: userFound.email
          }
        });
      }

      return res.json({
        success: false,
        message: 'User not found'
      });
    });
  },

  /**
   * Add a new user to database
   * @param req
   * @param res
   */
  addUser: function(req, res) {
    // Look up if user exists in database
    UserModel.find({email: req.body.email}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      if (users.length) {
        // User found
        return res.json({
          success: false,
          message: 'A user with this email has been registered'
        });
      } else {
        // Create new user
        const newUser = new UserModel();

        const fields = [
          'fullName',
          'email',
          'phone',
          'address',
          'suburb',
          'state',
          'postcode',
          'country'
        ];

        // Map request's payload to new user fields
        fields.forEach(field => {
          newUser[field] = req.body[field];
        });

        // Hash the password before saving
        newUser.password = md5(req.body.password);

        // TODO: Define admin on more specific condition, only 1 email as admin for now
        newUser.isAdmin = (newUser.email.toLowerCase() === 'quangthien27@gmail.com');

        // Save the user to database
        newUser.save((err, newUser) => {
          if (err) {
            res.status(500).send(err);
          }

          return res.json({
            success: true,
            message: 'User added successfully',
            userID: newUser._id
          });
        });
      }
    });
  },

  /**
   * Authorize user login
   * @param req
   * @param res
   */
  authorizeUser: function(req, res) {
    UserModel.find({email: req.body.email}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      let authorized = true;

      if (!users.length) {
        // Unauthorized if user not found
        authorized = false;
      } else {
        const foundUser = users.pop();

        // Compare the hashed password
        if (foundUser.password !== md5(req.body.password)) {
          authorized = false;
        } else {
          authorized = foundUser._id;
        }
      }

      if (authorized) {
        return res.json({
          success: true,
          message: 'Login successfully',
          userID: authorized
        });
      }

      return res.json({
        success: false,
        message: 'Invalid Username or Password'
      });
    });
  }
};

router.get('/getUser/:userEmail', methods.getUser);
router.post('/addUser', methods.addUser);
router.post('/authorizeUser', methods.authorizeUser);

module.exports = Object.assign(router, {methods});
