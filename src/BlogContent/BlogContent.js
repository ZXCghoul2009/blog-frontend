import './BlogContent.css';
import {posts} from "../DataProject/projectData";
import {BlogItem} from "./components/BlogItem";
import {Component} from "react";
import axios from "axios";

export class BlogContent extends Component {

    state = {
        blogArr: [],
    };


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/1/posts')
            .then((response) => {
                this.setState({
                    blogArr: response.data
                })
            })

            .catch((err) => {
                console.log(err)
            })
    }




    render() {

        const blogPosts = this.state.blogArr.map((item, pos) => {
            return (
                <BlogItem
                    key={item.id}
                    title={item.title}
                    description={item.body}
                />
            )
        })
        return (
            <>
                <h1>Blog</h1>
                <div className="posts">
                {blogPosts}
                </div>
        </>)

    }
}