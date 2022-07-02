import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import style from "./Styles/ProductsAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getAllProducts, deleteStock } from "../../redux/actions/index"
import { ImCross } from "react-icons/im"
import { BiPlusMedical, BiShowAlt } from "react-icons/bi"
import { HiPencilAlt } from "react-icons/hi"
import swal from 'sweetalert'

function ProductsAdmin(){

const dispatch = useDispatch()
const products = useSelector((state)=> state.products)
const [estado, setEstado] = useState({  
  stock: "0",
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
}

function StockHandler(e){
  console.log(e.id)
  console.log(estado)
  dispatch(deleteStock(e.id, estado))
  swal("stock has been changed")  
}



function deleteHandler(e){
  console.log(e.id)
  swal({
    title: "Are you sure?",
    text: "Once hidden, you will not be able to recover this product!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("the product has been deleted!", {
        icon: "success",
      });
      
      dispatch(deleteStock(e.id, estado))
      
    } else {
      swal("Your product is safe!");
    }
  });
}

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
                          
                          


                            <button className={style.DelBtn} id={e.id} onClick={()=>deleteHandler(e)}>
                              <ImCross/>
                            </button>                            

                            <button className={style.ModBtn}>
                              <Link style={{ textDecoration: 'none', color: 'green'}} to={`/admin/products/modify/${e.id}`}>
                                <HiPencilAlt/>
                              </Link>
                            </button>
                            <div>
                              <button className={style.stockBtn} id={e.id} onClick={()=>StockHandler(e)}>                              
                                 Restock                              
                              </button>
                              <input className={style.stockinput} type="text" name='stock' onChange={(e) => handleChange(e)}/>
                            </div>
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