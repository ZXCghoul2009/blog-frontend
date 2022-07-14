import axios from "axios";

export default class PostService {
    static async getAll() {
            const response = await axios.get('http://localhost:8080/api/posts/')
            return response.data

    }
}