function dataHas (propertyName) {
    return (req, _res, next) => {
        const { data } = req.body
        if (data && data[propertyName]) {
            next()
        } else {
            next({
                status: 400,
                message: `${propertyName} required`
            })
        }
    }
}

module.exports = {
    dataHas
}