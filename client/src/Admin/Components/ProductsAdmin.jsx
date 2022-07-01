import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import style from "./Styles/ProductsAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts } from "../../redux/actions/index"
import { ImCross } from "react-icons/im"
import { BiPlusMedical } from "react-icons/bi"
import { HiPencilAlt } from "react-icons/hi"







function ProductsAdmin(){

const dispatch = useDispatch()
const products = useSelector((state)=> state.products)
const [estado, setEstado] = useState({  
  category: "",
});

useEffect(() => {
dispatch(getAllProducts());
}, [dispatch]);




  return (
          <div className={style.container}>
            
            <div className={style.secondaryBar}>
              
              <Link to="/admin/products/create"><button className={style.addbtn}><h3>Create New Product</h3><BiPlusMedical/></button></Link>
              

            </div>
            <div className={style.cardinfo}>
                
                <p>Product Name</p>
                <p>Brand</p>
                <p>Image</p>
                <p>Price</p>
                <p>Rating</p>
                <p>Categories</p>
                <p>Stock</p>
                
            </div>

            {products.map(e=> {
                return(
                        <div className={style.card} key={e.id}>
                            <button className={style.DelBtn}><ImCross/></button>
                            <button className={style.ModBtn}><HiPencilAlt/></button>
                            <button className={style.stockBtn}>Restock</button>
                            <p className={style.element}>{e.name}</p>
                            <p className={style.element}>{e.brand}</p>
                            <p className={style.element}><img className={style.img} src={e.image} alt={e.id} /></p>
                            <p className={style.element}>${e.price}</p>
                            <p className={style.element}>{e.rating}</p>
                            <p className={style.element}>{e.CategoryId}</p>
                            <p className={style.element}>{e.in_Stock}</p>                       
                        </div>




                )
            } )}

            
          </div>
  );
};

export default ProductsAdmin;