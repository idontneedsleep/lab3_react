import React, {useEffect, useState} from "react";
import {List} from 'react-virtualized';

export function TableList(props) {
    const [photos, setPhotos] = useState([]);
    const listPhoto = photos.map((photo, key) => (
        <tr key={key}>
            <td>
                {photo.title}
            </td>
            <td>
                <a href={photo.thumbnailUrl}>{photo.thumbnailUrl}</a>
            </td>
        </tr>
    ));

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((actualPhotos) => {
                setPhotos(actualPhotos);
            });
    }, []);

    return (
        <table>
        {listPhoto}
        </table>
    );
}
//<img key={item} src={item.thumbnailUrl} alt="" height={100} />