import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {getDetail} from "../redux/actions/index";
// import s from "./Detail.module.css"

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const product = useSelector((state) => state.details);
  // console.log("state product", product)

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);


  return (
    <div >
      <div>
            <div>
              
              <img src={product.map(e=>e.image)} />
              <h1>  {product.map(e=>e.name)} </h1>
              <h4> price: {product.map((e)=>e.price)} </h4>
              <h4>  brand: {product.map((e)=>e.brand)} </h4>
              <h4> rating:{product.map((e)=>e.rating)} </h4>
              <h4> {product.map((e)=>e.idcategory)}</h4>
            </div>
          
      
      </div>

      <Link to="/">
        <button  > Back to Home </button>
      </Link>
    </div>
  );
}