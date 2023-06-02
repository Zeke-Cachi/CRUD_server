//EXPRESS
const express = require('express');
const router = express.Router();

//CONTROLLERS
const apiController = require('../controllers/apiController');

//MIDDLEWARES
const createChecks = require('../middlewares/createChecks');
const editChecks = require('../middlewares/editChecks')
const { validateChecks } = require('../middlewares/validateChecks')
const { validateId } = require('../middlewares/validateId');

//GET REQUESTS
router.get('/list', apiController.getList)
router.get('/list/stock/:stock', apiController.findStock)
router.get('/list/brand/:brand', apiController.findByBrand)
router.get('/list/id/:id', validateId, apiController.findId)


//POST REQUEST
router.post('/create', createChecks, validateChecks, apiController.postItem)

//EDIT REQUEST
router.put('/edit/:id', validateId, editChecks, validateChecks, apiController.editItem)

//DELETE REQUEST
router.delete('/delete/:id', validateId, apiController.deleteItem)


module.exports = router