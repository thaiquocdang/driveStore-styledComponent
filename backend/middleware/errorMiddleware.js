const notFound = (req, res, next) => {
  // console.log(req.originalUrl);
  const error = new Error(`Not Found - ${req.originalUrl}`)
  res.status(404)
  next(error)
}


const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode //500 server error -> back to default
  res.status(statusCode) // set res.status to whatever statusCode is
  res.json({//response
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
}

export { notFound, errorHandler }