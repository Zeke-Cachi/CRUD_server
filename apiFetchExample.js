const axios = require('axios');

//USING "FAKE STORE API" FOR FETCHING

const getProducts = async () => {
    try {
        const response = axios.get("https://fakestoreapi.com/products");
        const { data } = response;
        console.log(data)
        return data;
    } catch (error) {
        res.status(400).json(error)
    }
}


getProducts();