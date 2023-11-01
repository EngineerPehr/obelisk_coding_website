const service = require('./messages.service')
const asyncErrorHandler = require('../errors/asyncErrorHandler')

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

async function update (req, res) {
    const { message } = res.locals
    const { data } = req.body
    const updatedMessage = {
        ...message,
        ...data,
        message_id: message.message_id
    }
    const response = await service.update(updatedMessage)
    if (response) res.status(200).json({ data: response[0] })
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
        asyncErrorHandler(create)
    ],
    read: [
        asyncErrorHandler(messageExists), read
    ],
    update: [
        asyncErrorHandler(messageExists), update
    ],
    delete: [
        asyncErrorHandler(messageExists), remove
    ],
    list: [
        asyncErrorHandler(list)
    ]
}