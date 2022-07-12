import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProdToCart, removeProdFromCart, addCartToBack, clearCartUserPRUEBA } from '../redux/actions'
// import { useDispatch } from 'react-redux';
// import cart from '../images/carritoIcon.png';
import ClassesProductCard from './ProductCard.module.css'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"
import swal from 'sweetalert'
import { useAuth0 } from '@auth0/auth0-react';

export default function ProductCard({ name, brand, image, price, id, in_Stock, CategoryId, rating }) {
    const dispatch = useDispatch();
    const prodCart = useSelector((state) => state.prodCart);
    const [updateStateToADD, setUpdateStateToADD] = useState(false);
    //const [updateStateToREMOVE, setUpdateStateToREMOVE] = useState(false);
    const userCart = useSelector((state) => state.cartUserPRUEBA);
    //--------------------------------------------------
    const { isAuthenticated, user } = useAuth0();
    //------------------------------------------------------------------------------------------------
    console.log(` ME REPITO ${name}`)

    //--------------------------------VER SI EL PRODUCTO YA ESTA CARGADO------------------------------
    const data = prodCart.length > 0
        ? prodCart.find((el) => el.id === id)
        : undefined
    //-----UNA VEZ QUE CONFIRME QUE AL TRAER EL CART DEL BACK ME LO GUARDA EN PRODCART BORRO ESTO-------
    const data2 = userCart.length > 0
        ? userCart.find((el) => el.ProductId.id === id)
        : undefined
    //----------------------SI YA ESTABA CARGADO, SACO LA CANTIDAD QUE TIENE--------------------------

    const quantityDATA = data !== undefined ? data.quantity : data2 !== undefined ? data2.quantity : 0;

    //     useEffect(() => {
    //         const handleAddToDB =  () => {
    //             if ( isAuthenticated) {
    //                 const productsAux = [];
    //                 prodCart.map((item) => productsAux.push({ id: item.id, cant: item.quantity }))
    //                  dispatch(addCartToBack({ productsId: productsAux, email: user.email }))
    //             }
    //         }
    //         handleAddToDB()

    //     });
    // // , [dispatch, isAuthenticated, updateStateToADD, setUpdateStateToADD, prodCart, user]
    const handleAddCart = (e) => {

        if (quantityDATA === 0) {
            swal(`Added to cart`);
        }
        if (quantityDATA < in_Stock) {
            const objeToAdd = {
                id: id,
                name: name,
                image: image,
                price: price,
                brand: brand,
                in_Stock: in_Stock,
                CategoryId: CategoryId,
                rating: rating,
                quantity: quantityDATA,
            }
            dispatch(addProdToCart(objeToAdd, isAuthenticated));

            if (isAuthenticated) {
                setUpdateStateToADD(true)
            }
        } else {
            swal(`Insufficient stock in: ${name}`);
        }
    }

    const handleRemoveCart = async (e) => {

        if (quantityDATA === 1) {
            swal(`Removed of cart`);
        }
        await dispatch(removeProdFromCart({
            id: id,
            quantity: quantityDATA,
        }));

        if (isAuthenticated) {
            setUpdateStateToADD(true)
            if (quantityDATA === 1) {
                dispatch(clearCartUserPRUEBA())
            }
        }
    }

    const handleDB = async () => {
        if (isAuthenticated) {
            const productsAux = [];
            prodCart.map((item) => productsAux.push({ id: item.id, cant: item.quantity }))
            await dispatch(addCartToBack({ productsId: productsAux, email: user.email }))
        }
    }




    return (
        <div className={ClassesProductCard.container1}>
            <div className={ClassesProductCard.top}>
                <h5>{brand.length > 18 ? brand.slice(0, 15).concat('...') : brand}</h5>
            </div>

            <div className={ClassesProductCard.ImgDiv}>
                <Link to={'/details/' + id}>
                    <div className={ClassesProductCard.prodImg}>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>

            <div className={ClassesProductCard.names} >
                <p>{name.length > 28 ? (name.slice(0, 25)).concat('...') : name}</p>
            </div>
            <p>{`$${price}`}</p>
            <div className={ClassesProductCard.priceAndcart}>
                {quantityDATA > 0 ? <AiFillMinusSquare className={ClassesProductCard.btn} onClick={(e) => handleRemoveCart(e)} /> : ""}
                <p>{quantityDATA > 0 ? quantityDATA : ""}</p>
                <AiFillPlusSquare className={ClassesProductCard.btn} onClick={(e) => {
                    handleAddCart(e); handleDB(e);
                }} />
            </div>


        </div>
    )
}