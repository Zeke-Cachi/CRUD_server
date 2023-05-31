const { check } = require('express-validator');
const { checkBrand } = require('./checkBrand')


const createChecks = [
    check('name')
        .notEmpty().withMessage('The field "name" is mandatory')
        .isString().withMessage('the field "name" cannot be a number'),

    check('type')
        .notEmpty().withMessage('The field "type" is mandatory')
        .isString().withMessage('the field "type" cannot be a number'),

    check('color')
        .isString().withMessage('The field "color" cannot be a number'),

    check('stock')
        .notEmpty().withMessage('The field "stock" is mandatory')
        .isNumeric().withMessage('the field "stock" must be a number')
        .custom( value => {
            if (value < 0) {
                throw new Error('stock cannot be negative')  
            } else {
                return true
            }
        }),

    check('brand')
        .notEmpty().withMessage('The field "brand" is mandatory')
        .isString().withMessage('the field "brand" cannot be a number')
        .custom(checkBrand),

    check('active')
        .notEmpty().withMessage('The field "active" is mandatory')
        .isBoolean().withMessage('the field "active" only allows true or false'),
]

module.exports = createChecks