import React, { useState, useEffect, useCallback } from 'react';
import { photos as photo } from '../constants'
import { El_Greco, execution, Judit, Kripal, Weyden } from '../assets/index'
import './photo.css'

function Photo({ match }) {

    useEffect(() => {
        fetch();
    }, []);


    const [photoId, setPhoto] = useState({})


    //https://www.youtube.com/watch?v=Law7wfdg_ls
    //const [photoInfo, setPhotoInfo] = useState(0);
    //setPhotoInfo(photo.Number(match.params.id)


    const fetch = async () => {
        const found = await photo.find(pic => pic.Id == match.params.id)
        setPhoto(found)
    }


    return (
        <div style={{ display: 'flex', justifyContent:'center' }}>
            <div>
                <h1>{photoId.label}</h1>
                <div>
                    <img src={photoId.image} style={{ maxWidth: "600px", maxHeight: "800px" }}></img>
                </div>
                <h2>{photoId.author}</h2>
                <h3>{photoId.description}</h3>
            </div>
        </div>
    );
}

export default Photo

