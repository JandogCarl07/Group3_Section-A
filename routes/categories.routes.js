const express = require ('express');

const route = express.Router();

let categories = [
    {
        id: 1,
        product: 'Iphone 15',
        category: 'Cellphone',
        quantity: 15
    },

    {
        id: 2,
        product: 'Samsung',
        category: 'Cellphone',
        quantity: 40
    },

    {
        id: 3,
        product: 'Redmi 12',
        category: 'Cellphone',
        quantity: 24
    },

    {
        id: 4,
        product: 'Oppo',
        category: 'Cellphone',
        quantity: 32
    },

    {
        id: 5,
        product: 'OnePlus',
        category: 'Cellphone',
        quantity: 26
    },

    {
        id: 6,
        product: 'Google',
        category: 'Cellphone',
        quantity: 67
    }

];