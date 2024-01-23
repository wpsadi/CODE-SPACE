const errMiddleWare = (err, req, res, next) => {
    err.statusCode = err.statusCode || 400;
    err.message = err.message || "something went wrong"

    res.status(err.statusCode).json({
        success: false,
        message: err.message,
        stack: err.stack
    })
}

export default errMiddleWare; 