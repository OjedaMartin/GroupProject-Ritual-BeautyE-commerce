import React, { useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import style from "./Styles/ProductsAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts} from "C:/Users/marti/OneDrive/Documentos/GitHub/Proyecto-Grupal-Henry-Cohorte25a---Grupo-19/client/src/redux/actions/index.js"

function ProductsAdmin(){

const dispatch = useDispatch()
const products = useSelector((state)=> state.products)

useEffect(() => {
dispatch(getAllProducts());
}, [dispatch]);



  return (
          <div className={style.container}>
            
            <h2>Mostrar productos en lista, poder crear productos, "eliminar" y tambien modificar, agregar categorias, gestionar stock</h2>

            <Link to="/admin/products/create"><button className={style.createButton}>New Product</button> </Link>

            <div className={style.tabletop}>
                <p>Del</p>
                <p>Mod</p>
                <p>ID</p>
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
                            <button>X</button>
                            <button>MOD</button>
                            <p className={style.element}>{e.id}</p>
                            <p className={style.element}>{e.name}</p>
                            <p className={style.element}>{e.brand}</p>
                            <p className={style.element}>{e.image}</p>
                            <p className={style.element}>{e.price}</p>
                            <p className={style.element}>{e.rating}</p>
                            <p className={style.element}>{e.idcategory}</p>
                            <p className={style.element}>{e.in_stock}</p>
                            

                        </div>




                )
            } )}

            
          </div>
  );
};

export default ProductsAdmin;