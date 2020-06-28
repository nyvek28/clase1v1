import React, { useState, useEffect } from 'react';
import { photos as photo } from '../constants'

function Photo({ match }) {
    console.log(photo)


    const [photoId, setPhoto] = useState(match.params.id)
    //https://www.youtube.com/watch?v=Law7wfdg_ls
    //const [photoInfo, setPhotoInfo] = useState(0);
    //setPhotoInfo(photo.Number(match.params.id)
    function fetch() {
        const picId = photo.filter(photo => photo.id == photoId ? photo.label : Error)
        setPhoto(picId)
    }


    return (
        <div>
            <div>
                {
                    function fetch() {
                        const picId = photo.filter(photo => photo.id == photoId ? photo.label : 'Error')
                        setPhoto(picId)
                    }
                }
            </div>
            <h1>{photoId}</h1>
        </div>
    );
}

export default Photo

