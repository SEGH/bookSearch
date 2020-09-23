const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    books: [
        {
            type: Schema.Types.ObjectId,
            ref: "Book"
        }
    ]
});

// Method to check password used when logging in
UserSchema.methods.validPassword = function (password) {
    if (password === this.password) {
        return true;
    } else {
        return false;
    }
}

const User = mongoose.model("User", UserSchema);

module.exports = User;