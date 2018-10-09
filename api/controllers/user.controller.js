const express = require('express');
const router = express.Router({});
const UserModel = require('../models/user.model');
const md5 = require('md5');

const methods = {
  getUser: function(req, res) {
    // Get user data
    UserModel.find({email: req.params.userEmail}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      if (users.length) {
        const userFound = users.pop();

        const userFoundReturned = {
          email: userFound.email
        };

        return res.json({
          success: true,
          user: userFoundReturned
        });
      }

      return res.json({
        success: false,
        message: 'Not found user'
      });
    });
  },
  addUser: function(req, res) {
    UserModel.find({email: req.body.email}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      if (users.length) {
        return res.json({
          success: false,
          message: 'A user with this email has been registered'
        });
      } else {
        const newUser = new UserModel();

        /*newUser.email = 'quangthien27@gmail.com';
        newUser.fullName = 'Thien Nguyen';
        newUser.phone = '0404040404';
        newUser.address = 'Address';
        newUser.suburb = 'Suburb';
        newUser.state = 'NSW';
        newUser.postcode = '1111';
        newUser.country = 'AU';
        newUser.password = md5('1234');*/

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

        fields.forEach(field => {
          newUser[field] = req.body[field];
        });

        // Hash the password
        newUser.password = md5(req.body.password);

        // TODO: Define admin on more specific condition
        newUser.isAdmin = (newUser.email.toLowerCase() === 'quangthien27@gmail.com');

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
  authorizeUser: function(req, res) {
    UserModel.find({email: req.body.email}, function(err, users) {
      if (err) {
        res.status(500).send(err);
      }

      let authorized = true;

      if (!users.length) {
        authorized = false;
      } else {
        const foundUser = users.pop();
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
      } else {
        return res.json({
          success: false,
          message: 'Invalid Username or Password'
        });
      }
    });
  }
};

router.get('/getUser/:userEmail', methods.getUser);
router.post('/addUser', methods.addUser);
router.post('/authorizeUser', methods.authorizeUser);

module.exports = Object.assign(router, {methods});
