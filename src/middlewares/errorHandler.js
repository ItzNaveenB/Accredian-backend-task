const errorHandler = (err, req, res, next) => {
    res.status(500).json({ error: 'An unexpected error occurred', details: err.message });
  };
  
  module.exports = errorHandler;
  