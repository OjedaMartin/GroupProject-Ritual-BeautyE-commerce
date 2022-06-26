import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getDetail} from "../redux/actions/index";
import  "./Detail.css"

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const product = useSelector((state) => state.details);
  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);


  return (
    <div className="back">
    <div className="manzana">
      <div className="img">
              <img src={product.map(e=>e.image)} width="100%" height="100%"/>
      </div>
 <div className="divInfo">
 <h1 className="titles">  {product.map(e=>e.name)} </h1>
              <h4  className="label"> price: {product.map((e)=>e.price)} </h4>
              <h4  className="label">  brand: {product.map((e)=>e.brand)} </h4>
              <h4  className="label"> rating:{product.map((e)=>e.rating)} </h4>
              <h4  className="label"> {product.map((e)=>e.idcategory)}</h4>
              <Link to="/">
        <button className="btn" > Back to Home </button>
      </Link>
 </div>
    </div>
    </div>
  );
}