const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');


router.get('/', function (req, res) {       // Sending Page Query Parameter is mandatory http://localhost:3000/api/categories?page=1
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;   // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;     // 0, 10, 20, 30
        endValue = page * limit;                  // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }
    
    
    database.table('categories as c')
        .withFields(['c.cat_name as category',
            'c.cat_id as id',
            'c.image'
        ])
        .slice(startValue, endValue)
        .sort({id: .1})
        .getAll()
        .then(prods => {
            if (prods.length > 0) {
                res.status(200).json({
                    count: prods.length,
                    books: prods
                });
            } else {
                res.json({message: "No books found"});
            }
        })
        .catch(err => console.log(err)); 
});

router.get('/:catName', (req, res) => { // Sending Page Query Parameter is mandatory http://localhost:3000/api/categories/categoryName?page=1
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;   // check if page query param is defined or not
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;   // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;      // 0, 10, 20, 30
        endValue = page * limit;                  // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }

    // Get category title value from param
    const cat_name = req.params.catName;

    database.table('books as p')
        .join([
            {
                table: "categories as c",
                on: `c.cat_id = p.cat_id WHERE c.cat_name LIKE '%${cat_name}%'`
            }
        ])
        .withFields(['c.cat_name as category',
            'p.title as name',
            'p.author',
            'p.description',
            'p.image',
            'p.id'
        ])
        .slice(startValue, endValue)
        .sort({id: 1})
        .getAll()
        .then(prods => {
            if (prods.length > 0) {
                res.status(200).json({
                    count: prods.length,
                    books: prods
                });
            } else {
                res.json({message: `No books found matching the category ${cat_name}`});
            }
        }).catch(err => res.json(err));

});

module.exports = router;