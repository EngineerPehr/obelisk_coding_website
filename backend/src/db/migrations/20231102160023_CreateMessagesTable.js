/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('messages', (table) => {
        table.increments('message_id').primary()
        table.string('sender_name').notNullable()
        table.string('sender_email').notNullable()
        table.string('message_subject').notNullable()
        table.string('message_body').notNullable()
        table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.dropTable('messages')
}
