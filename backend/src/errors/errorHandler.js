/**
 * Express API error handler.
 */
function errorHandler(error, _req, res) {
    const { status = 500, message = "Something went wrong!" } = error
    res.status(status).json({ error: message })
}
  
module.exports = errorHandler