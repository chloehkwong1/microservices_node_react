import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
    const [title, setTitle] = useState("");

    const onSubmit = async (e) => {
        // by default the browser will try and submit the form itself which we don't want!
        e.preventDefault();        
        await axios.post('http://localhost:4000/posts', {
            title 
        });

        setTitle('');
    }
    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default PostCreate;
