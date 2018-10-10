const express = require('express');
const router = express.Router({});
const RegistryModel = require('../models/registry.model');

const methods = {
  addRegistry: function(req, res) {
    const newRegistry = new RegistryModel();

    const fields = [
      'userID',
      'event',
      'greetingMessage',
      'cardDesign',
      'closeDate'
    ];

    fields.forEach(field => {
      newRegistry[field] = req.body[field];
    });

    newRegistry.save((err, newRegistry) => {
      if (err) {
        res.status(500).send(err);
      }

      return res.json({
        success: true,
        message: 'Registry added successfully',
        registry: newRegistry
      });
    });
  },
  getRegistry: function(req, res) {
    RegistryModel.findById(req.params['registryID'], function(err, registry) {
      if (err) {
        res.status(500).send(err);
      }

      if (null !== registry) {
        return res.json({
          success: true,
          message: 'Registry found',
          registry: registry
        });
      }

      return res.json({
        success: false,
        message: 'Registry not found'
      });
    });
  },
  getAllRegistries: function(req, res) {
    RegistryModel.find({userID: req.body.userID}, function(err, registries) {
      if (err) {
        res.status(500).send(err);
      }

      if (registries.length) {
        return res.json({
          success: true,
          message: 'Registries found',
          registries: registries
        });
      }

      return res.json({
        success: false,
        message: 'No registry found for that user'
      });
    });
  },
  updateRegistry: function(req, res) {
    RegistryModel.findById(req.body.registryID, function(err, registry) {
      if (err) {
        res.status(500).send(err);
      }

      registry.amount += parseInt(req.body.amount);

      RegistryModel.findOneAndUpdate({
        _id: req.body.registryID
      }, registry, {new: false}, (err, registry) => {
        if (err) {
          res.status(500).send(err);
        }

        return res.json({
          success: true,
          message: 'Registry updated',
          registry: registry
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
