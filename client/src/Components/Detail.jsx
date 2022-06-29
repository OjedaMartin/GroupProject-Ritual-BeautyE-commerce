import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail } from "../redux/actions/index";
import style from "./Detail.module.css"

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  
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
  return (
    <div className={style.back}>
      <div className={style.manzana}>
        <div className={style.img}>
          <img className={style.imgdetail} src={product.map(e => e.image)} width="100%" height="100%" alt='Img not found!'/>
        </div>
        <div className={style.divInfo}>
          <h1 className={style.titles}>  {product.map(e => e.name)} </h1>
          <h4 className={style.label}> price: {product.map((e) => e.price)} </h4>
          <h4 className={style.label}>  brand: {product.map((e) => e.brand)} </h4>
          <h4 className={style.label}> rating:{product.map((e) => e.rating)} </h4>
          <h4 className={style.label}> {objectCat[product?.map((e) => e.idcategory)]}</h4>
          <Link to="/">
            <button className={style.btn} > Back to Home </button>
          </Link>
        </div>
      </div>
    </div>
  );
}