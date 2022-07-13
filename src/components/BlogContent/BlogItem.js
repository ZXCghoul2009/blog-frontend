import './BlogItem.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';


export const BlogItem = ({
    title,
    description,
    likeCount,
    duration

}) => {

    const [liked, setLiked] = useState(false)

    const likePosts = () => {
        setLiked((v)=> !v)

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