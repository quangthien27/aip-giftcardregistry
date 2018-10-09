const express = require('express');
const router = express.Router({});
const TickModel = require('../models/tick.model');

const methods = {
  getTicks: function(req, res) {
    TickModel.find().exec((err, ticks) => {
      if (err) {
        return res.json({success: false, 'message': 'Something wrong, cannot retrieve'});
      }
      return res.json({
        success: true,
        data: {
          ticks: ticks,
          message: 'Ticks fetched successfully'
        }
      });
    });
  },
  addTick: function(req, res) {
    const newTick = new TickModel();

    newTick.save((err, tick) => {
      if (err) {
        return res.json({success: false, 'message': 'Something wrong, cannot save'});
      }

      return res.json({
        success: true,
        data: {
          tick: tick,
          message: 'Todo added successfully'
        }
      });
    });
  },
  increaseTick: function(req, res) {
    // Get user data
    TickModel.findById('5b8fae9ba529d3e15648f962', function(err, tick) {
      if (err) {
        res.status(500).send(err);
      }

      tick.count += 1;

      TickModel.findOneAndUpdate({
        _id: '5b8fae9ba529d3e15648f962'
      }, tick, {new: true}, (err, tick) => {
        if (err) {
          return res.json({'success': false, 'message': 'Some Error', 'error': err});
        }

        return res.json({
          success: true,
          data: {
            tick: tick
          }
        });
      });
    });
  }
};

router.post('/increaseTick', methods.increaseTick);
router.post('/addTick', methods.addTick);
router.get('/getTicks', methods.getTicks);

module.exports = Object.assign(router, {methods});
