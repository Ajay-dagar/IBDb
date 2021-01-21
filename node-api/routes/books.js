const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET ALL BOOKS*/
router.get('/', function (req, res) {       // Sending Page Query Parameter is mandatory http://localhost:3000/api/books?page=1
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 18;   // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;     // 0, 10, 20, 30
        endValue = page * limit;                  // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }
    
    
    database.table('books as p')
        .join([
            {
                table: "categories as c",
                on: `c.cat_id = p.cat_id`
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

/* GET ONE BOOK*/
router.get('/:bookId', (req, res) => {
    let bookId = req.params.bookId;
    database.table('books as p')
        .join([
            {
                table: "categories as c",
                on: `c.cat_id = p.cat_id`
            }
        ])
        .withFields(['c.cat_name as category',
            'p.title as name',
            'p.author',
            'p.description',
            'p.image',
            'p.id'
        ])
        .filter({'p.id': bookId})
        .get()
        .then(prod => {
            console.log(prod);
            if (prod) {
                res.status(200).json(prod);
            } else {
                res.json({message: `No book found with id ${bookId}`});
            }
        }).catch(err => res.json(err));
});

let  searchData = (req, res) => {
    search = req.query.search
    console.log(search)
    var searchEmployees = `SELECT * FROM books WHERE (id LIKE '%${search}%' OR title LIKE '%${search}%' OR author LIKE '%${search}%') AND isDeleted='0' `
    //searchValues = [search,search,search,search]
    console.log(searchEmployees)
    db.query(searchEmployees, function (errQuery, res) {
        if (errQuery) {
            res.send(errQuery)
        } else {
            res.send(res)
        }
    })
}
//get one book by name
router.get('/n/:bookName', (req, res) => {
    let bookName = req.params.bookName;
    database.table('books as p')
        .join([
            {
                table: "categories as c",
                on: `c.cat_id = p.cat_id`
            }
        ])
        .withFields(['c.cat_name as category',
            'p.title as name',
            'p.author',
            'p.description',
            'p.image',
            'p.id'
        ])
        .filter({'p.title': bookName})
        .get()
        .then(prod => {
            console.log(prod);
            if (prod) {
                res.status(200).json(prod);
            } else {
                res.json({message: `No book found with name ${bookName}`});
            }
        }).catch(err => res.json(err));
});

/* GET ALL BOOKS FROM ONE CATEGORY */
router.get('/category/:catName', (req, res) => { // Sending Page Query Parameter is mandatory http://localhost:3000/api/books/category/categoryName?page=1
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
