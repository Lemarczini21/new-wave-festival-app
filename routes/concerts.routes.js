const express = require('express');
const router = express.Router();
const ConcertController = require('../controllers/concerts.controller.js');

router.get('/concerts', ConcertController.getAll);

router.get('/concerts/:id', ConcertController.getById);

router.post('/concerts', ConcertController.addCon);

router.put('/concerts/:id', ConcertController.updateCon);

router.delete('/concerts/:id', ConcertController.deleteCon);

module.exports = router;
