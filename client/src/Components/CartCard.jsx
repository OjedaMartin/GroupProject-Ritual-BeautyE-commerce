import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import ClassesCartCard from './CartCard.module.css'



export default function ProductCard({ name, brand, image, price, id, cant, userId, userName, email }) {
    //const dispatch = useDispatch();


    return (
        <div className={ClassesCartCard.container1}>
            <div className={ClassesCartCard.top}>
                <Link to={'/details/' + id}>
                    <div className={ClassesCartCard.prodImg}>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
                <div className={ClassesCartCard.name} >
                    <h1>{name}</h1>
                </div>
            </div>
            <div>
                <h2>{cant}</h2>
            </div>
            <div>
                <h4>Stock</h4>
            </div>
            <div className={ClassesCartCard.price}>
                <h1>{`$${price}`}</h1>
            </div>

            <div className={ClassesCartCard.buttons}>
                <button>
                    Delete
                </button>
                <button>
                    Related products
                </button>
                <button>
                    Buy now
                </button>
                <button>
                    Save for later
                </button>

            </div>

        </div>
    )
}