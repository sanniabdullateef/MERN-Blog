const express = require('express');
const router = express.Router();
const Articles = require('../models/articles');


//  Request Get All Articles
router.get('/', (req, res) => {
    Articles.find()
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
});

// REQUEST TO ADD NEW ARTICLE
router.post('/add', (req, res) => {
    console.log(req.body)
    const newArticles = new Articles({ 
        title: req.body.title,
        article: req.body.article,
        authorname: req.body.authorname
    });

    newArticles
    .save()
    .then(() => res.json("The new Article posted Succefully"))
    .catch(err => res.status(400).json(`Error: ${err}`));
});

//  Request Find Article By ID
router.get('/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => res.json(article))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// Request Find Article by ID and Update
router.put('/update/:id', (req, res) => {
    Articles.findById(req.params.id)
    .then(article => {
        article.title = req.body.title;
        article.article = req.body.article;
        article.authorname = req.body.authorname;

        article 
         .save()
         .then(() => res.json ("The Article is UPDATED succesful"))
         .catch(err => res.status(400).json(`Error: ${err}`))
    })
    .catch(err => res.status(400).json(`Error: ${err}`))
})

// Request find Article by id and delete
router.delete('/:id', (req, res) => {
    Articles.findByIdAndDelete(req.params.id)
    .then(() => res.json("The article succefully deleted"))
    .catch(err => res.status(400).json(`Error: ${err}`))
})

module.exports = router;