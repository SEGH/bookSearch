import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

export default {
    getBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_GPASS}`);
    },
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    },
    getSavedBooks: function() {
        return axios.get("/api/books");
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    createUser: function(userData) {
        console.log(userData);
        return axios.post("/api/users", userData);
    }
}
