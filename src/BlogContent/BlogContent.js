import './BlogContent.css';
import {Spin} from "antd"
import {posts} from "../DataProject/projectData";
import {BlogItem} from "./components/BlogItem";
import {useState, useEffect} from "react";
import axios from "axios";
import PostService from "../API/PostService";
import Loader from "./UI/Loader/Loader";

export const BlogContent = () =>  {

   const [posts, setPosts] = useState([]);
   const [isPostLoading, setIsPostLoading] = useState(false)

   useEffect(() => {
       fetchPosts();
   }, [])


   async function fetchPosts() {
       setIsPostLoading(true);
           const posts = await PostService.getAll();
           setPosts(posts)
           setIsPostLoading(false);

   }


        const blogPosts = posts.map((item) => {
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
                {isPostLoading ? <Loader/> :
                    <div className="posts">
                    {blogPosts}
                </div>}

        </>)

    }
