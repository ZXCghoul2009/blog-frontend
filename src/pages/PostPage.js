import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../hooks/useFetching";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader/Loader";
import FavoriteIcon from "@mui/icons-material/Favorite";
const PostPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        console.log(id)
        const response = await PostService.getById(params.id)
        console.log(response)
        setPost(response)
    })
    console.log(post)
    useEffect(() => {
        fetchPostById(params.id)
    }, [])
    return (
        <div className="post">

            {isLoading
                ? <Loader/>
                : <div>
                    <h2>{post.postName}</h2>
                    <p>{post.description}</p>
                    <p>пост был создан: {post.duration}</p>
                    <div>
                        <button >
                            <FavoriteIcon/>
                        </button>
                        {post.likeCount}
                    </div>
            </div>

            }

        </div>
    );
};

export default PostPage;

