const db = require("../models");
const bcrypt = require("bcrypt");

module.exports = {
    getUser: function(req, res) {
        // The req.user stores the user that has been authenticated
        res.send(req.user);
    },
    create: function (req, res) {
        const hash = bcrypt.hashSync(req.body.password, 12);
        db.User
            .create({
                email: req.body.email,
                password: hash
            })
            .then(user => res.json(user))
            .catch(err => res.status(422).json(err));
    },
    logout: function (req, res) {
        req.logout();
        res.redirect("/");
    }
};