const knex = require('../db/connection')

function create (message) {
    return knex('messages')
        .insert(message)
        .returning('*')
}

function read (messageId) {
    return knex('messages')
        .select('*')
        .where({ message_id: messageId })
        .first()
}

function update (updatedMessage) {
    return knex('messages')
        .where({ message_id: updatedMessage.message_id })
        .update(updatedMessage, '*')
        .returning('*')
}

function remove (messageId) {
    return knex('messages')
        .where({ message_id: messageId })
        .del()
}

function list () {
    return knex('messages')
        .select('*')
}

module.exports = {
    create,
    read,
    update,
    remove,
    list
}