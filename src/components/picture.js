import React from "react";

const Picture = (item) => {
        return (
            <img src={item.thumbnailUrl} alt="" height={100}/>
        )
}

export default Picture;