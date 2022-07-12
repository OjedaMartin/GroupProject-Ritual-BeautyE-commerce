import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDetail, getAllCategories } from "../redux/actions/index";
import "./Detail.module.css"

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log('id----->',id)

  
  const products = useSelector((state) => state.details);
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
          <img className="imgdetail" src={products.map(product => product.image)} width="100%" height="100%" alt='Img not found!'/>
        </div>
        <div className="divInfo">
          <h4 className="titles">  {products.map(product => product.name)} </h4>
          <h4 className="label"> price: {products.map((product) => product.price)} </h4>
          <h4 className="label">  brand: {products.map((product) => product.brand)} </h4>
          <h4 className="label"> rating:{products.map((product) => product.rating)} </h4>
          <h4 className="label"> {objectCat[products?.map((product) => product.CategoryId)]}</h4>
          <Link to="/">
            <button className="btn" > Back to Home </button>
          </Link>
        </div>
      </div>
    </div>
  );
}