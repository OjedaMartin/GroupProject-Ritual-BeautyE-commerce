import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, addProdToCart, removeProdFromCart, clearcartUser, addCartToBack } from "../redux/actions/index";
import style from "./Detail.module.css"
import Review from "./reviews";
import StarDetail from "./StarDetail";
//---------------------------------------
import swal from 'sweetalert'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"
import { useAuth0 } from '@auth0/auth0-react';
//--------------------------------------
export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  //--------------------------------------------------
  const { isAuthenticated, user } = useAuth0();

  //------------------------------------------------------------------------------------------------
  const prodCart = useSelector((state) => state.prodCart);
  const productDetail = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(getDetail(id));

  }, [dispatch, id]);

  const objectCat = {
    cat140006: 'Makeup',
    cat150006: 'Skincare',
    cat130042: 'Tools & Brushes',
    cat130038: 'Hair',
  }

  console.log('esto seria quantity')
  const data = prodCart.length > 0 ? prodCart.find((e) => e.id === productDetail[0]?.id) : undefined;
  const quantity = data !== undefined ? data.quantity : 0;


  const handleAddCart = (e) => {
    if (quantity === 0) {
      swal(`Added to cart`);
    }
    if (quantity < productDetail[0].in_Stock) {
      dispatch(addProdToCart({
        id: productDetail[0].id,
        name: productDetail[0].name,
        image: productDetail[0].image,
        price: productDetail[0].price,
        brand: productDetail[0].brand,
        in_Stock: productDetail[0].in_Stock,
        CategoryId: productDetail[0].CategoryId,
        rating: productDetail[0].rating,
        quantity: quantity,
      }));

      if (isAuthenticated) {
        const itemInclud =
          prodCart.length > 0
            ?
            prodCart.find((element) => element.id === productDetail[0].id)
            :
            undefined

        const cartItems = itemInclud !== undefined
          ?
          prodCart.map((it) => it.id === productDetail[0].id
            ?
            { ...it, quantity: it.quantity + 1 } : it)
          :
          [...prodCart, { ...productDetail[0], quantity: 1 }]

        dispatch(addCartToBack({ productsId: cartItems, email: user.email }))
      }

    } else {
      swal(`Insufficient stock in: ${productDetail[0].name}`);
    }

  }
  const handleRemoveCart = (e) => {
    if (quantity === 1) {
      let confirmDelete = window.confirm(`Do you are sure, to delet this product of your cart?`)
      if (confirmDelete) {
        swal(`Removed of cart.`);
        dispatch(removeProdFromCart({
          id: productDetail[0].id,
        }));
        if (isAuthenticated) {
          let cartItems = prodCart.filter((upgrade) => upgrade.id !== productDetail[0].id);
          dispatch(addCartToBack({ productsId: cartItems, email: user.email }));
        }
      }
    } else {
      dispatch(removeProdFromCart({
        id: productDetail[0].id,
      }));
      const cartUpgrade =
        prodCart.map((it) => it.id === productDetail[0].id
          ? { ...it, quantity: it.quantity - 1 }
          : it)
      dispatch(addCartToBack({ productsId: cartUpgrade, email: user.email }));
    }
  }

  return (
    <div className={style.back}>
      <div className={style.manzana}>
        <div className={style.img}>
          <img className={style.imgdetail} src={productDetail?.map(e => e.image)} width="100%" height="100%" alt='Img not found!' />
        </div>
        <div className={style.divInfo}>
          <h1 className={style.titles}>  {productDetail?.map(e => e.name.length > 20 ? e.name.slice(0, 20).concat('...') : e.name)} </h1>
          <h4 className={style.label}> price: {productDetail?.map((e) => e.price)} </h4>
          <h4 className={style.label}>  brand: {productDetail?.map((e) => e.brand)} </h4>
          {/* <h4 className={style.label}> rating:{productDetail?.map((e) => e.rating)} </h4> */}
          <h4 className={style.label}> rating:{productDetail?.map((e) => (<StarDetail
            stars={parseInt(e.rating)}
            key={e.id}
          />))} </h4>
          <h4 className={style.label}> {objectCat[productDetail?.map((e) => e.CategoryId)]}</h4>
          <h4 className={style.label}>Add to cart</h4>
          <div className={style.btnAddToCart}>
            {quantity > 0 ? <AiFillMinusSquare className={style.btn2} onClick={handleRemoveCart} /> : ""}
            <h4>{quantity > 0 ? quantity : ""}</h4>
            <AiFillPlusSquare className={style.btn2} onClick={handleAddCart} />
          </div>
          <Link to="/">
            <button className={style.btn} > Back to Home </button>
          </Link>
        </div>
      </div>
      <div>
        <Review
          id={id}
           />
      </div>
    </div>
  );
}