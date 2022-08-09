import axios from "axios";

export default class PostService {
    static async getAll() {
            const response = await axios.get('http://localhost:8081/api/posts/')
            return response.data

    }

    static async getById(id) {
        console.log(id)
        const response = await axios.get('http://localhost:8081/api/posts/' + id)
        return response.data

    }
}