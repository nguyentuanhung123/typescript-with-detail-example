import React, { useState } from "react";
import Callback from "../2-children-prop-example/Callback";

const PostList = () => {

    const [UIcolor, setUIColor] = useState(null);
    const [UIsize, setUISize] = useState(null);

    //our callback function
    const getColor = (color) => {
        setUIColor(color);
    }

    const getSize = (size) => {
        setUISize(size);
    }

    return(
        <>
            <div className="postList" style={{background: `${UIcolor}`, fontSize: `${UIsize}px`}}>Post List</div>
            <Callback getSize={getSize} setUIColor={setUIColor}/>
        </>
    )
}

export default PostList;