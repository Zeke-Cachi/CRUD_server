const { musicalItems } = require('../models/musicalItems')

class apiController {

    //GET METHODS
    async getList (_req, res) {
        const findItems = await musicalItems.find();
        res.status(200).json(findItems)
    }

    async findStock (req, res) {
        const seeStock = await musicalItems.find({stock: req.params.stock});
        res.status(200).json(seeStock)
    }

    async findByBrand (req, res) {
        const findBrand = await musicalItems.find({brand: req.params.brand});
        res.status(200).json(findBrand)
    }

    async findId (req, res) {
        const findId = await musicalItems.findById(req.params.id);
        res.status(200).json(findId)
    }



    //POST METHOD
    async postItem (req, res) {
        try {
            const news = new musicalItems(req.body)
            await news.save()
            res.status(201).json(news)
        }
        catch (error) {
            console.log(error)
        }
    }


    //EDIT METHOD (YOU CAN ALSO MARK AN ITEM AS NOT-ACTIVE AND IT WOULD COUNT AS DELETED)
    async editItem (req, res) {
        try {
            await musicalItems.findByIdAndUpdate(req.params.id, req.body)
            const item = await musicalItems.findById(req.params.id);
            res.status(200).json(item)
        } catch (error) {
            res.status(400).json(error)
        }
    }

    
    //DELETE METHOD
    async deleteItem (req, res) {
        await musicalItems.findByIdAndDelete(req.params.id)
        res.status(200).json({
            msg: `the object with id ${req.params.id} has been deleted`
        })
    }

}

module.exports = new apiController
