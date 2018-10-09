const express = require('express');
const router = express.Router({});
const UserModel = require('../models/user.model');
const md5 = require('md5');

const methods = {
  getUser: function(req, res) {
    // Get user data
    UserModel.find({email: req.params.userEmail}, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }

      if (result.length) {
        const userFound = result.pop();

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
    UserModel.find({email: req.body.email}, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }

      if (result.length) {
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

        // TODO: Define admin on specific condition
        /*newUser.isAdmin = true;*/

        newUser.save((err, newUser) => {
          if (err) {
            res.status(500).send(err);
          }

          return res.json({
            success: true,
            message: 'User added successfully'
          });
        });
      }
    });
  },
  authorizeUser: function(req, res) {
    UserModel.find({email: req.body.email}, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }

      let authorized = true;

      if (!result.length) {
        authorized = false;
      } else {
        const foundUser = result.pop();
        if (foundUser.password !== md5(req.body.password)) {
          authorized = false;
        }
      }

      if (authorized) {
        return res.json({
          success: true
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
