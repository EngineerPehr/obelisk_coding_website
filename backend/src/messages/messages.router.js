const router = require('express').Router({ mergeParams: true })
const controller = require('./messages.controller')
const methodNotAllowed = require('../errors/methodNotAllowed')

router
    .route('/:messageId')
    .get(controller.read)
    .delete(controller.delete)
    .all(methodNotAllowed)

router
    .route('/')
    .get(controller.list)
    .post(controller.create)
    .all(methodNotAllowed)

module.exports = router