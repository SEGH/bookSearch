const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("../models");

// Authentication strategy to use email and password for login
passport.use(new LocalStrategy({
    // Passport expects username and password, so this lets it know we are using email instead
    usernameField: "email"
}, function (username, password, done) {

    db.User.findOne({ email: username }, function (err, user) {
        if (err) { return done(err); }

        if (!user) {
            return done(null, false, { message: 'Incorrect username.' });
        }

        if (!user.validPassword(password)) {
            return done(null, false, { message: 'Incorrect password.' });
        }

        return done(null, user);
    });
}
));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    db.User.findById(id, function(err, user) {
        done(err, user);
    });
});

module.exports = passport;