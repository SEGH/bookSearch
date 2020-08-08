import axios from "axios";

export default {
    getBooks: function(query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + "AIzaSyBsEW3rt6CfUI4K7qv6CBX4Lz3ovbjZFw4");
    }
}
