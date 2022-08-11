const router = require('express').Router();
let Books = require('./books.model');

router.route('/').get((req,res) => {
    Books.find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: '+err))
})

router.route('/add').post(async (req,res) => {
    const name = req.body.name;
    const author = req.body.author;
    const genre = req.body.genre;
    const published = Number(req.body.published);

    const newBook = await new Books({
        name, author, genre, published
     })
    console.log(newBook);

    newBook.save()
    .then(() => res.json('Added a new book!'))
    .catch((err) => res.status(400).json('Error: ' + err));
})

router.route('/:id').get((req,res) => {
    console.log(req.params.id);
    Books.findById(req.params.id)
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json('Error: '+err))
})

router.route('/delete/:id').delete(async (req,res) => {
    console.log('Deleted book!');

    await Books.findByIdAndDelete(req.params.id)
    .then(() => res.json('Deleted book!'))
    .catch((err) => res.status(400).json('Error: '+err))
})

router.route('/update/:id').post(async (req,res) => {
    console.log(req.params.id);

    await Books.findById(req.params.id)
    .then((editBook) => {
        editBook.name = req.body.name;
        editBook.author = req.body.author;
        editBook.genre = req.body.genre;
        editBook.published = Number(req.body.published);

        editBook.save()
        .then(() => res.json('Updated book!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: '+err))
})

module.exports = router;