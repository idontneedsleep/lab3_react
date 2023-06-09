import React, {useEffect, useState} from "react";
import {List} from 'react-virtualized';
import Picture from "./picture";

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

    const [hasRender, setRender] = useState(false);
    const show = React.useCallback(() => setRender(true), []);

    const renderRow = () => {
        return (
            photos
                .filter(({ title }) => title.split(' ').length <= 7)
                .map((photo, key) => (
                    <tr key={key}>
                        <td>
                            {photo.title}
                        </td>
                        <td>
                            <button onClick={show}>{photo.thumbnailUrl}</button>
                            {hasRender && <Picture thumbnail={photo.thumbnailUrl} />}
                        </td>
                    </tr>
            ))
        )
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
            .then((response) => response.json())
            .then((actualPhotos) => {
                setPhotos(actualPhotos);
            });
    }, []);

    return (
        <div className="list">
            <List
                width={rowWidth}
                height={listHeight}
                rowHeight={rowHeight}
                rowRenderer={renderRow}
                rowCount={photos.length}
            />
        </div>
    );
}