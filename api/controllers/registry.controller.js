const constants = require('../constants');
const express = require('express');
const router = express.Router({});
const RegistryModel = require('../models/registry.model');

const methods = {
  /**
   * Add a registry to database
   * @param req
   * @param res
   */
  addRegistry: function(req, res) {
    const newRegistry = new RegistryModel();

    const fields = [
      'userID',
      'event',
      'greetingMessage',
      'cardDesign',
      'closeDate'
    ];

    // Map request's fields to Registry object
    fields.forEach(field => {
      newRegistry[field] = req.body[field];
    });

    // Save the registry to database
    newRegistry.save((err, newRegistry) => {
      if (err) {
        res.status(500).send(err);
      }

      return res.json({
        success: true,
        message: constants.messages.registryAdded
      });
    });
  },

  /**
   * Retrieve the registry
   * @param req
   * @param res
   */
  getRegistry: function(req, res) {
    RegistryModel.findById(req.params['registryID'], function(err, registry) {
      if (err) {
        res.status(500).send(err);
      }

      if (null !== registry) {
        return res.json({
          success: true,
          message: 'Registry found',
          registry: {
            event: registry.event,
            greetingMessage: registry.greetingMessage,
            cardDesign: registry.cardDesign
          }
        });
      }

      return res.json({
        success: false,
        message: 'Registry not found'
      });
    });
  },

  /**
   * Retrieve all registries
   * @param req
   * @param res
   */
  getAllRegistries: function(req, res) {
    RegistryModel.find({userID: req.body.userID}, function(err, registries) {
      if (err) {
        res.status(500).send(err);
      }

      if (registries.length) {
        return res.json({
          success: true,
          message: 'Registries found',
          registries: registries.map((registry, index) => {
            return {
              event: registry.event,
              greetingMessage: registry.greetingMessage,
              cardDesign: registry.cardDesign,
              closeDate: registry.closeDate,
              amount: registry.amount
            };
          })
        });
      }

      return res.json({
        success: false,
        message: 'No registry found for that user'
      });
    });
  },

  /**
   * Update an existed registry
   * @param req
   * @param res
   */
  updateRegistry: function(req, res) {
    RegistryModel.findById(req.body.registryID, function(err, registry) {
      if (err) {
        res.status(500).send(err);
      }

      // Make sure amount is positive number
      registry.amount += Math.abs(parseInt(req.body.amount));

      // Update the registry to database
      RegistryModel.findOneAndUpdate({
        _id: req.body.registryID
      }, registry, {new: false}, (err, registry) => {
        if (err) {
          res.status(500).send(err);
        }

        return res.json({
          success: true,
          message: 'Registry updated'
        });
      });
    });
  }
};

router.post('/addRegistry', methods.addRegistry);
router.post('/updateRegistry', methods.updateRegistry);
router.get('/getRegistry/:registryID', methods.getRegistry);
router.post('/getAllRegistries', methods.getAllRegistries);

module.exports = Object.assign(router, {methods});
