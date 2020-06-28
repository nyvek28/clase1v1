import React from 'react';
import { photos as photo } from '../constants';
import { Link } from "react-router-dom";


class PhotoList extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return (
            <nav>
                <ul>
                    {
                        photo.map((photo) => (
                            <li>
                                <Link key={photo.Id} to={photo.destination}> {photo.label}</Link>
                            </li>
                        ))}
                </ul>
            </nav>
        )
    }
}

export default PhotoList