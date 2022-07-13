import React from 'react';
import './AddNewPostPage.css';

export const AddNewPostPage = () => {

    return (
        <>
            <form className="add-new__post">
                <h2>Add post title</h2>
                <div>
                    <input type="postTitle"/>
                </div>
                <h2>Add post description</h2>
                <div>
                    <textarea name="postDescription"/>
                </div>

                <div>
                    <button className="blackBtn">add post</button>
                </div>

            </form>
        </>

        )
};

