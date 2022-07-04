import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, getAllCategories } from "../redux/actions/index";
import "./Detail.css"

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  
  const product = useSelector((state) => state.details);
  // const allCategories = useSelector((state) => state.category);
  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(getAllCategories());
  }, [dispatch, id]);

  const objectCat = {
    cat140006: 'Makeup',
    cat150006: 'Skincare',
    cat130042: 'Tools & Brushes',
    cat130038: 'Hair',
  }

  return (
    <div className="back">
      <div className="manzana">
        <div className="img">
          <img className="imgdetail" src={product.map(e => e.image)} width="100%" height="100%" alt='Img not found!'/>
        </div>
        <div className="divInfo">
          <h1 className="titles">  {product.map(e => e.name)} </h1>
          <h4 className="label"> price: {product.map((e) => e.price)} </h4>
          <h4 className="label">  brand: {product.map((e) => e.brand)} </h4>
          <h4 className="label"> rating:{product.map((e) => e.rating)} </h4>
          <h4 className="label"> {objectCat[product?.map((e) => e.CategoryId)]}</h4>
          <Link to="/">
            <button className="btn" > Back to Home </button>
          </Link>
        </div>
      </div>
    </div>
  );
}