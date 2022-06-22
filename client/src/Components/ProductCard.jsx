import React from 'react';
import { Link } from 'react-router-dom';


export default function ProductCard({ name, brand, image, price }) {
    return (
        <div>
            <div>
                <Link to={`/home/${id}`}>{/*VER COMO VA A SER LA RUTA DETAIL*/}
                    <div>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>
            <div>
                <h2>{brand}</h2>
                <h3>{name}</h3>
                <h3>{price}</h3>
            </div>
        </div>
    )
}