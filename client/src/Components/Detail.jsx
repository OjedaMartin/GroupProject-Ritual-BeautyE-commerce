import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, addProdToCart, removeProdFromCart } from "../redux/actions/index";
import style from "./Detail.module.css"
import Review from "./reviews";
//---------------------------------------
import swal from 'sweetalert'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"
//--------------------------------------
export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const prodCart = useSelector((state) => state.prodCart);
  const product = useSelector((state) => state.details);
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  const objectCat = {
    cat140006: 'Makeup',
    cat150006: 'Skincare',
    cat130042: 'Tools & Brushes',
    cat130038: 'Hair',
  }
 // console.log('id----->', id)

  const data = prodCart.length > 0 ? prodCart.find((e) => e.id === product[0].id) : undefined;
  const quantity = data !== undefined ? data.quantity : 0;

  //console.log('quantity--->', quantity)

  const handleAddCart = (e) => {
    if (quantity === 0) {
      swal(`Added to cart`);
    }
    if (quantity < product[0].in_Stock) {
      dispatch(addProdToCart({
        id: product[0].id,
        name: product[0].name,
        image: product[0].image,
        price: product[0].price,
        brand: product[0].brand,
        in_Stock: product[0].in_Stock,
        CategoryId: product[0].CategoryId,
        rating: product[0].rating,
        quantity: quantity,
      }));
    } else {
      swal(`Insufficient stock in: ${product[0].name}`);
    }

  }
  const handleRemoveCart = (e) => {
    dispatch(removeProdFromCart({
      id: id,
      quantity: quantity,
    }));

    if (quantity === 1) {
      swal(`Removed of cart`);
    }
  }
  return (
    <div className={style.back}>
      <div className={style.manzana}>
        <div className={style.img}>
          <img className={style.imgdetail} src={product?.map(e => e.image)} width="100%" height="100%" alt='Img not found!' />
        </div>
        <div className={style.divInfo}>
          <h1 className={style.titles}>  {product?.map(e => e.name.length > 20 ? e.name.slice(0, 20).concat('...') : e.name)} </h1>
          <h4 className={style.label}> price: {product?.map((e) => e.price)} </h4>
          <h4 className={style.label}>  brand: {product?.map((e) => e.brand)} </h4>
          <h4 className={style.label}> rating:{product?.map((e) => e.rating)} </h4>
          <h4 className={style.label}> {objectCat[product?.map((e) => e.CategoryId)]}</h4>
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
      id = {id}/>
      </div>
    </div>
  );
}