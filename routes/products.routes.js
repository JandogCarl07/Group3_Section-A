const express = require('express');
const router = express.router();

let products = [
    {
        id: 1,
        name: "Samsung S20 ULTRA",
        category: "Smartphone",
        price: 21,000,
        stock: 100
},
{
        id: 2,
        name: "Iphone 17",
        category: "Smartphone",
        price: 50,000
        stock: 120
},
{
        id: 3,
        name: "Iphone 8 plus",
        category: "Smartphone",
        price: 8,000,
        stock: 203
}
]

router.get ('/', req, res) => {
    let results = products:
    if (req.query.category){
        result = products.filter (
            product => product.category ===
        );
    }
}

res.status(200).json ({
    success: true,
    data: result,
    meta: {
        timestamp: new Date(), to ISOString(),
        count: result.length
    }
});

router.get (/:id, (req, res)) => {
    const id = Number (req.params.id);
    const product = products.find (product => product.id === i);

    if (!Product){
        return res.status (404).json ({
            success: false,
            error: {
                code: "NOT_FOUND",
                message: "Product not found."
            }
        });
    }
}

res.status(200).json ({
    success: true,
    data: product,
    meta: {
        timestamp: new Date(). to ISOString(),
        count: 1
    }
});

router.post ('/', (req, res) => {
    const {name, category, price, stock} = req.body;
        if (!name || !category || !price === undefined || stock === undefined){
            return res.status(400).json ({
                success: false,
                error: {
                    code: "BAD_REQUEST",
                    message: "Name, category, price, and stock are required."
                }
            });
        }
    }
)

const newProduct = {
    id: products.length > 0
    ?Math.max (... products.map(product => product.id)) ||
    : 1,
    name,
    category,
    price,
    stock
};

Products.push (newProduct);
    res.status(201).json({
        success: true,
        data: newProduct,
        meta: {
            timestamp: new Data().to ISOString(),
            count: 1
        }
    });

router.delete ('/:id', (req, res) => {
    const id = Number (res.params.id);
    const index = Products.findIndex (product => product.id === id);
    
    if (index === -1) {
        return res.status (404).json ({
            success: false,
            error: {
                code: "NOT_FOUND",
                message: "Product not found."
            }
        });
    }
}
)

products.splice (index, 1);
res.status (204).send ();

module.exports = router;
