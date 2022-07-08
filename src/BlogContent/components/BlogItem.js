import './BlogItem.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';


export const BlogItem = ({
    title,
    description,

}) => {

    const [liked, setLiked] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    const likePosts = () => {
        setLiked((v)=> !v)
        if (!liked) {
            setLikeCount((v) => v + 1)
        } else {
            setLikeCount((v) => v - 1)
        }

        }


    const likedFill = liked ? 'crimson' : 'grey';

    return (
        <div className="post">
            <h2>{title}</h2>
            <p>{description}</p>
            <div>
                <button onClick={likePosts}>
                    <FavoriteIcon style={{fill:likedFill}}/>
                </button>
                {likeCount}
            </div>
        </div>
    )
}