// validators.js

/**
 * Validates the input data.
 */
function validateData(data) {
    return typeof data === 'string';
}

module.exports = { validateData };