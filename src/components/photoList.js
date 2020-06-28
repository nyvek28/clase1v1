import React from 'react';
import { photos as photo } from '../constants';
import { Link } from "react-router-dom";
import './photoList.css'
import { El_Greco, execution, Judit, Kripal, Weyden } from '../assets/index'

class PhotoList extends React.Component {
    constructor(props) {
        super(props)
    }



    render() {

        return (
            <nav>
                <ul className="list">
                    {
                        photo.map((photo) => (
                            <li>
                                
                                <Link
                                    style={{ width:'auto', textDecoration: 'none', display: 'inline-flex', flexWrap:"wrap", flexDirection: 'column-reverse', margin:"20px", justifyContent:'center', alignItems:'center' }}
                                    className="listItem" key={photo.Id}
                                    to={photo.destination}><img src={photo.image} style={{ maxHeight:'200px', maxWidth:'200px' }}></img> <h4> {photo.label} </h4>
                                </Link>
                            </li>
                        ))}
                </ul>
            </nav>
        )
    }
}

export default PhotoList