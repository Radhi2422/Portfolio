// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {

    console.error(err); // Log actual error

    const statusCode = err.statusCode || 500;

    const message =
        process.env.NODE_ENV === "development"
            ? err.message
            : "Something went wrong. Please try again later.";

    res.status(statusCode).json({
        success: false,
        message
    });
};

module.exports = errorHandler;