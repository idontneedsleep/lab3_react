import React, {useEffect, useState} from "react";
import ReactDOM from 'react-dom';
import {List} from 'react-virtualized';

export function TableList(props) {
    const [photos, setPhotos] = useState([]);
    const listPhoto = photos
        .filter(({ title }) => title.split(' ').length <= 7)
        .map((photo, key) => (
        <tr key={key}>
            <td>
                <a href={photo.thumbnailUrl}>{photo.title}</a>
            </td>
        </tr>
    ));

    const listHeight = 700;
    const rowHeight = 80;
    const rowWidth = 800;

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((actualPhotos) => {
                setPhotos(actualPhotos);
            });
    }, []);

    /*return (
        <div className="list">
            <List
                width={rowWidth}
                height={listHeight}
                rowHeight={rowHeight}
                rowRenderer={listPhoto}
                rowCount={photos.length}
            />
        </div>
    );*/

    return (
        <table>
        {listPhoto}
        </table>
    );/**/
}
//<img key={key} src={item.thumbnailUrl} alt="" height={100} />