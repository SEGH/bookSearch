import axios from "axios";
// import dotenv from "dotenv";
// dotenv.config();

export default {
    getBooks: function(query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${process.env.REACT_APP_GPASS}`);
    },
    saveBook: function(userId, bookData) {
        return axios.post("/api/books/" + userId, bookData);
    },
    getSavedBooks: function(userId) {
        return axios.get("/api/books/" + userId);
    },
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id);
    },
    getUser: function() {
        return axios.get("/api/users");
    },
    createUser: function(userData) {
        console.log(userData);
        return axios.post("/api/users/register", userData);
    },
    loginUser: function(userData) {
        console.log(userData);
        return axios.post("/api/users/login", userData);
    },
    logoutUser: function() {
        return axios.get("/api/users/logout");
    }
}
