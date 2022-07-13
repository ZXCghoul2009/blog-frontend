import './BlogContent.css';

import {BlogItem} from "./BlogContent/BlogItem";
import {useState, useEffect} from "react";
import {useFetching} from "../hooks/useFetching.js"
import PostService from "../API/PostService";
import Loader from "./UI/Loader/Loader";

export const BlogContent = () =>  {

   const [posts, setPosts] = useState([]);
   const [fetchPosts, isPostsLoading, postError] = useFetching( async  () =>{
       const posts = await PostService.getAll();
       setPosts(posts)
   })

   useEffect(() => {
       fetchPosts();
   }, [])



        const blogPosts = posts.map((item) => {
            return (
                <BlogItem
                    key={item.id}
                    title={item.postName}
                    description={item.body}
                    likeCount = {item.voteCount}
                    liked = {item.upVote}
                    duration = {item.duration}
                />
            )
        })
        return (
            <>
                {postError && <h1>Error: ${postError}</h1>}
                {isPostsLoading ? <Loader/> :
                    <div className="posts">
                    {blogPosts}
                </div>}

        </>)

    }
