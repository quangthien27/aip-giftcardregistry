const express = require('express');
const router = express.Router({});
const TickModel = require('./models/tick.model');

const methods = {
  increaseTick: function(req, res) {
    // Get user data
    TickModel.findById(0, function(err, result) {
      if (err) {
        res.status(500).send(err);
      }

      const tickObj = {
        count: result.count
      };

      return res.json({
        success: true,
        data: {
          tick: tickObj
        }
      });
    });
  }
};

router.post('/increaseTick', methods.increaseTick());

module.exports = Object.assign(router, {methods});
