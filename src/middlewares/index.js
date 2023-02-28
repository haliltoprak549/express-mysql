export const logger = (req, res, next) => {
    console.log("Log")
    next()
}

export const notFound = (req, res, next) => {
    res.status(404)
    const error = new Error('Not Found', req.originalUrl)
    next(error)
}

export const errorHandler = (err, req, res, next) => {
    console.log('Hata')
    res.status(res.statusCode || 500)
    res.json({
        message: err.message,
        stack: err.stack
    })
}