const service = require('./messages.service')
const asyncErrorHandler = require('../errors/asyncErrorHandler')
const { dataHas } = require('../utils/validationFunctions')

async function messageExists (req, res, next) {
    const messageId = Number(req.params.messageId)
    const message = await service.read(messageId)
    if (message) {
        res.locals.message = message
        next()
    } else {
        next({
            status: 404,
            message: `Message not found - ID: ${messageId}`
        })
    }
}

async function create (req, res) {
    const message = req.body.data
    const response = await service.create(message)
    if (response) res.status(200).json({ data: response[0]})
}

function read (_req, res) {
    const data = res.locals.message
    res.json({ data })
}

async function remove (_req, res) {
    const messageId = res.locals.message.message_id
    const response = await service.remove(messageId)
    if (response) res.sendStatus(204)
}

async function list (_req, res) {
    const response = await service.list()
    res.json({ data: response })
}

module.exports = {
    create: [
        dataHas('sender_name'),
        dataHas('sender_email'),
        dataHas('message_subject'),
        dataHas('message_body'),
        asyncErrorHandler(create)
    ],
    read: [
        asyncErrorHandler(messageExists), read
    ],
    delete: [
        asyncErrorHandler(messageExists), remove
    ],
    list: [
        asyncErrorHandler(list)
    ]
}