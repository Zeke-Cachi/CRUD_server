//THIS FUNCTIONS MAKES SURE THAT, ACCORDING TO THE INSTRUMENT TYPE, ONLY CERTAIN MANUFACTURERS CAN BE SELECTED

const checkBrand = (value, { req }) => {
    if (req.body.type == "stringed") {
        if (value !== "Gibson" && value !== "Fender" && 
        value !== "Jackson" && value !== "Romantica") {
            throw new Error ('Stringed instrument brands must be "Gibson" "Fender" "Jackson" or "Romantica"')
        } else {
            return true;
        }
    }

    if (req.body.type == "wind") {
        if (value !== "Yamaha" && value !== "King") {
            throw new Error ('Wind instrument brands must be "Yamaha" or "King"')
        } else {
            return true;
        }
    }

    if (req.body.type == "percussion") {
        if (value !== "Tama" && value !== "Sonor") {
            throw new Error ('Percussion instrument brands must be "Tama" or "Sonor"')
        } else {
            return true;
        }
    }
}

module.exports = { checkBrand }