import './BlogContent.css';
import {posts} from "../DataProject/projectData";
import {BlogItem} from "./components/BlogItem";
import {Component, useState} from "react";

export class BlogContent extends Component {

    state = {
        blogArr: posts
    };

    likePosts = (pos) => {
        const temp = this.state.blogArr;
        const like = this.state.blogArr;
        like[pos].liked = !like[pos].liked;
        if (like[pos].liked) {
            temp[pos].likeCount++;
        } else temp[pos].likeCount--;





        this.setState({
            blogArr: temp, like
        })
    }



    render() {

        const blogPosts = this.state.blogArr.map((item, pos) => {
            return (
                <BlogItem
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    liked={item.liked}
                    likeCount={item.likeCount}
                    likePosts={() => this.likePosts(pos)}
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