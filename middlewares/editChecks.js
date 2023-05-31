const { check } = require('express-validator');
const { checkBrand } = require('./checkBrand')

const editChecks = [
    check('name')
        .optional() 
        .notEmpty().withMessage('The field "name" cannot be empty')
        .isString().withMessage('the field "name" cannot be a number'),

    check('type')
        .optional()
        .notEmpty().withMessage('The field "type" cannot be empty')
        .isString().withMessage('the field "type" cannot be a number'),

    check('color')
        .optional()
        .isString().withMessage('The field "color" cannot be a number'),

    check('stock')
        .optional()
        .notEmpty().withMessage('The field "stock" cannot be empty')
        .isNumeric().withMessage('the field "stock" must be a number')
        .custom( value => {
            if (value < 0) {
                throw new Error('stock cannot be negative')  
            } else {
                return true
            }
        }),

    check('brand')
        .optional()
        .notEmpty().withMessage('The field "brand" cannot be empty')
        .isString().withMessage('the field "brand" cannot be a number')
        .custom(checkBrand),

    check('active')
        .optional()
        .notEmpty().withMessage('The field "active" cannot be empty')
        .isBoolean().withMessage('the field "active" only allows true or false'),
]

module.exports = editChecks