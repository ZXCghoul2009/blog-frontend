import axios from "axios";

export default class PostService {
    static async getAll() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
            return response.data

    }
}