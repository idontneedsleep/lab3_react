import React from "react";

function Picture(props) {
        return (
            <img src={props.thumbnail} alt="" height={100}/>
        )
}
Picture.defaultProps = {
        thumbnail : ''
};
export default Picture;