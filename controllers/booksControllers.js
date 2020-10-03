const db = require("../models");
const mongoose = require("mongoose");

// Methods for querying the database
module.exports = {
    findAll: function (req, res) {
        db.User
            .findById({ _id: req.params.userId })
            .populate({
                path: "books"
            })
            // .sort({ date: -1 })
            .then(books => res.json(books))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body);
        db.Book
            .create({
                title: req.body.title,
                authors: req.body.authors,
                description: req.body.description,
                image: req.body.image,
                link: req.body.link
            })
            .then(book => {
                console.log(book);
                db.User.findOneAndUpdate({ _id: mongoose.Types.ObjectId(req.params.userId) }, { $push: { books: book } })
                    .then(user => {
                        console.log(user);
                        res.json(user);
                    })
                    .catch(err => {
                        res.status(422).json(err);
                    });
            })
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Book
            .findById({ _id: req.params.id })
            .then(book => book.remove())
            .then(book => res.json(book))
            .catch(err => res.status(422).json(err));
    }
};
