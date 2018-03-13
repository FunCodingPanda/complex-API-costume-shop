const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/costume-shop')
const ctrlTags = require('../controllers/tags')

router.post('/', ctrl.create)
router.get('/', ctrl.getAll)
router.get('/:id', ctrl.getById)
router.put('/:id', ctrl.update)
router.delete('/:id', ctrl.deleteById)


router.post('/:id/tags', ctrlTags.create)
router.get('/:id/tags', ctrlTags.getById)
router.put('/:id/tags', ctrlTags.update)
router.delete('/:id/tags', ctrlTags.deleteById)

module.exports = router
