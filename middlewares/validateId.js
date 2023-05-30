const { musicalItems } = require('../models/musicalItems');

const validateId = async (req, res, next) => {
    const search = await musicalItems.findById(req.params.id);
    search !== null ? 
    next() :
     res.status(500).json({msg: `the id ${req.params.id} is not valid`}) 
}

module.exports = {validateId}