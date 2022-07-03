import React, { useState, useEffect } from 'react';
//import SlidingPanel from 'react-sliding-side-panel';
import { useDispatch, useSelector } from 'react-redux';
//import { FaShoppingCart } from "react-icons/fa";
import { addProdToCart, removeProdFromCart, clearCart } from '../redux/actions';
import { Link, useNavigate } from 'react-router-dom';
//import { CSSTransition } from 'react-transition-group';
//import './CartCard.module.css'
//import iconCart from '../images/cart2.png';
import s from './Prueba.module.css'

export default function Prueba() {
    // const [openPanel, setOpenPanel] = useState(false);
    const prodCart = useSelector((state) => state.prodCart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    //console.log('arrOfidProdtoBuy--->',arrOfidProdtoBuy)
    useEffect(() => {

    }, [dispatch, prodCart]);
    var totalAmount = 0;

    for (let i = 0; i < prodCart.length; i++) {
        totalAmount = totalAmount + (prodCart[i].price * prodCart[i].quantity);
    }

    console.log('totalAmount', totalAmount)



    const handleAddCart = (e) => {
        e.preventDefault();
        const filter = prodCart.find((item) => item.id === e.target.value);
        //console.log('e.target.value',e.target.value)
        // console.log('filter--->', filter)
        // console.log('prodCart', prodCart)

        dispatch(addProdToCart(
            {
                id: filter.id,
                name: filter.name,
                image: filter.image,
                price: filter.price,
                brand: filter.brand,
                in_Stock: filter.in_Stock,
                CategoryId: filter.CategoryId,
                rating: filter.rating,
                quantity: filter.quantity,
            }
        ));
        // alert(`${filter.name}  added to cart`);
    }

    const handleRemoveCart = (e) => {
        e.preventDefault();
        dispatch(removeProdFromCart({ id: e.target.value }));
        //alert(`${e.target.name}  removed of cart`);
    }

    const handleBuy = (e) => {
        e.preventDefault();
    }

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(clearCart());
        navigate('/');
    }


    return (

        <div className={s.body}>
            {/* {prodCart.length > 0 ? <button onClick={handleBuy}>Buy</button> : ""} */}
            {prodCart.length > 0 ? <button onClick={handleDelete} >Delete Cart</button> : ""}
            <Link to='/'><button>Go Home</button></Link>
            <div id="w">
                <header id="title">
                    <h1> Ritual Cart </h1>
                </header>
                <div id="page">
                    <table id="cart">
                        <thead>
                            <tr>
                                <th className={s.first}>Image</th>
                                <th className={s.second}>Qty</th>
                                <th className={s.third}>Product</th>
                                <th className={s.fourth}>Price</th>
                                <th className={s.fifth}>Line Total</th>
                                <th className={s.sixth}>&nbsp;</th>
                            </tr>
                        </thead>
                        <div className={s.body}>
                            <div>
                                {prodCart?.map(e => {
                                    return (
                                        <div key={e.id}>
                                            <tr className={s.productitm}>
                                                <td> <img src={e.image} className={s.thumb} alt='Img not found!' /></td>
                                                <button value={e.id} onClick={handleAddCart}>+</button>
                                                <td className={s.qtyinput}>{e.quantity}</td>
                                                <button value={e.id} onClick={handleRemoveCart}>-</button>
                                                {/* <td>{e.quantity}<input type="number" value="1" min="0" max="99" className={s.qtyinput}></td> */}
                                                <td>{e.name}</td>
                                                <td>{`$${e.price}`}</td>
                                                <td>{`$${e.price * e.quantity}`}</td>
                                                {/* <td><span className={s.remove}><img src="https://i.imgur.com/h1ldGRr.png" alt="X}></span></td> */}

                                            </tr>
                                        </div>
                                    )
                                })}
                                <tr className={s.totalprice}>
                                    <td className={s.light}>Total:</td>
                                    <td colspan="2">&nbsp;</td>
                                    <td colspan="2"><span className={s.thick}>{totalAmount}</span></td>
                                </tr>
                            </div>
                            {/* <!-- checkout btn --> */}
                            <tr className={s.checkoutrow}>
                                <td colspan="6" className={s.checkout}><button onClick={handleBuy} id="submitbtn">Buy Now!</button></td>
                            </tr>
                        </div>
                    </table>
                </div>
            </div>
        </div>
    );
}

