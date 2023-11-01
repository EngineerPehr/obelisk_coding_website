const { PORT = 5001 } = process.env

const app = require('./app')
const knex = require('./db/connection')

const listener = () => {
    console.log(`Listening on Port ${PORT}`)
}

knex.migrate
    .latest()
    .then(() => {
    app.listen(PORT, listener)
})
    .catch((error) => {
        console.error(error)
        knex.destroy()
    })
