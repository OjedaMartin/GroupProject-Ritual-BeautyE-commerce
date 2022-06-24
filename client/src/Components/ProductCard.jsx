import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import cart from '../images/carritoIcon.png';


export default function ProductCard({ id, name, brand, image, price }) {
    const dispatch = useDispatch();
    
    
    const handleCart = (e) => {
        e.preventDefault();
    //    dispatch(addToCart(id))
    }
    return (
        <div>
            <div>
                <Link to={`/details/:${id}`}>{/*VER COMO VA A SER LA RUTA DETAIL*/}
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
            <button onClick={handleCart}>
                <img src={cart}/>
            </button>
        </div>
    )
}