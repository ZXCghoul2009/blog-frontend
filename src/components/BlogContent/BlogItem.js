import './BlogItem.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';
import {useNavigate} from "react-router-dom";

export const BlogItem = ({
    title,
    description,
    likeCount,
    duration,
    id

}) => {

    const router = useNavigate()

    const [liked, setLiked] = useState(false)
    const [vote, setVote] = useState('UPVOTE')
    const likePosts = () => {
        console.log(vote)
        setLiked((v)=> !v)
        if (!liked){
            setVote('UPVOTE')
        } else {
            setVote('DOWNVOTE')
        }
        fetch('http://localhost:8081/api/votes/',
            {
                method: 'POST',
                body: JSON.stringify({

                    voteType: vote
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then(data => {
                    let errorMessage = "Authentication failed";
                    //  if (data && data.error && data.error.message) {
                    //    errorMessage = data.error.message;
                    //  }
                    throw new Error(errorMessage);
                })
                    .then((data) => {
                        console.log(data)
                    })
                    .catch((err) => {
                        alert(err.message)
                    });
            }
        });
        }


    const likedFill = liked ? 'crimson' : 'grey';

    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{description}</p>
            <p>пост был создан: {duration}</p>
            <div>
                <button  onClick={likePosts}>
                    <FavoriteIcon style={{fill:likedFill}}/>
                </button>
                {likeCount}
            </div>
            <div>
                <button onClick={() => router(`post/${id}`)}>
                    Read more
                </button>
            </div>
        </div>
    )
}