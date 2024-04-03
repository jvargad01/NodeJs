exports.success = function (req, res, mensaje = '', statusCode = 200){
    
    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: mensaje
    });
}

exports.error = function (req, res, mensaje = 'Error Interno', statusCode = 500){
    
    res.status(statusCode).send({
        error: true,
        status: statusCode,
        body: mensaje
    });
}