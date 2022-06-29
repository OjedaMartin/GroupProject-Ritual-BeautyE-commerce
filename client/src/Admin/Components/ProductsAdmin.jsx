import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import style from "./Styles/ProductsAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts, postCategory} from "../../redux/actions/index"







function ProductsAdmin(){

const dispatch = useDispatch()
const products = useSelector((state)=> state.products)
const [estado, setEstado] = useState({  
  category: "",
});

useEffect(() => {
dispatch(getAllProducts());
}, [dispatch]);


function handleChange(e) {
  e.preventDefault();
  setEstado({
    ...estado,
    [e.target.name]: e.target.value,
  });
//  SetErr(inputValidate({ ...estado, [e.target.name]: e.target.value }));
}

function handleSubmit(e) {
  e.preventDefault();
//  if (Object.keys(err).length)
//{return alert("Faltan datos")}
  dispatch(postCategory(estado));
  dispatch(estado); //?
  alert("Category added successfully");
  setEstado({    
    category: "",
  });
}




  return (
          <div className={style.container}>
            
            <h2>Mostrar productos en lista, poder crear productos, "eliminar" y tambien modificar, agregar categorias, gestionar stock</h2>
            <div className={style.secondaryBar}>

              <Link to="/admin/products/create"><button className={style.createButton}>New Product</button> </Link>

              <div className={style.categoryAdder}>
                <h3>Addcategory:</h3>
                <input type="text" value={estado.category} name="category" onChange={(e) => handleChange(e)} />
                <button onClick={(e) => handleSubmit(e)}>+</button>
              </div>

            </div>
            <div className={style.tabletop}>
                <p>Del</p>
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
                            <button className={style.DelBtn}>X</button>
                            <Link to= {'/admin/products/modify/' + e.id} ><button className={style.ModBtn}>MOD</button></Link>
                            <button className={style.stockBtn}>Stock</button>
                            <p className={style.element}>{e.name}</p>
                            <p className={style.element}>{e.brand}</p>
                            <p className={style.element}>{e.image}</p>
                            <p className={style.element}>{e.price}</p>
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