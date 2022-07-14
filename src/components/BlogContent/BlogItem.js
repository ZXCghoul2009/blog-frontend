import './BlogItem.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';


export const BlogItem = ({
    title,
    description,
    likeCount,
    duration,
    key

}) => {

    const [liked, setLiked] = useState(false)
    const [vote, setVote] = useState('')
    const likePosts = () => {

        const postId = {key};

        setLiked((v)=> !v)
        if (liked){
            setVote('UPVOTE')
        } else {
            setVote('DOWNVOTE')
        }
        fetch('http://localhost:8080/api/votes/',
            {
                method: 'POST',
                body: JSON.stringify({
                    postId: postId,
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
        </div>
    )
}