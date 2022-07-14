import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getAllCategories,
  getAllProducts,
} from "../../redux/actions";

import style from "./Styles/ProductCreateAdmin.module.css";
import swal from 'sweetalert'



const inputValidate = (estado) => {
  let errors = {};
  if(!isNaN(Number(estado.name))) {
  errors.name = 'The name cannot contain only numbers';
} if(estado.name === "") {
  errors.name = 'The name is required';
} if(estado.name.length <2) {
  errors.name = 'Name must contain at least four (2) characters';
} 
if(!estado.price.length) {
  errors.difficult = `Price is required`;
} 
 if(estado.brand.length === 0) {
  errors.brand = 'You must select at least one brand';
}if(estado.category.length === 0) {
  errors.category = 'You must select at least one category';
}
console.log("error", errors)
return errors;
};

export default function AdminProduct() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  
  const {id} = useParams()
  
  useEffect(() => {
    dispatch(getAllProducts());
    dispatch(getAllCategories());
  }, []);
  
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);

  

  const prodToMod = products.filter(e=> e.id===id)
  
  const categoryid = prodToMod[0].CategoryId

  const selectedCategory = category.filter(e=> e.id===categoryid)

  


  console.log("this" , selectedCategory)


  //console.log("2",products);
  const [err, SetErr] = useState({});
  const [estado, setEstado] = useState({
    name: prodToMod[0].name,
    brand: prodToMod[0].brand,
    image: prodToMod[0].image,
    price: prodToMod[0].price,        
    category: selectedCategory[0].name,
  });
  console.log("estado",estado);
  

  const setBrand = [];
  products.map((e) =>setBrand.push(e.brand));
  let newDatas = [...new Set(setBrand)];


  function handleChange(e) {
    
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    SetErr(inputValidate({ ...estado, [e.target.name]: e.target.value }));
  }


  function handleSelectCat(e) {
    
    //let result  = estado.category.includes(e.target.value)
    //console.log("resultado", result)
    //if(!result){ 
    //
    setEstado({
      ...estado,
      category: [ e.target.value]
    });
    SetErr(inputValidate({
      ...estado,
      category: [ e.target.value]
    }));
    //} else {
    //  swal("you cant do that")
    //}

  }

 //function Handledelete(e){
 //  
 //  
 //  setEstado({
 //      ...estado,
 //      category: estado.category.filter(el=>el !== e.target.value)
 //  })
 //  console.log( "this", e.target.value)

 //}


  function handleSelectBrand(e) {
    setEstado({
      ...estado,
      brand: [e.target.value],
    });
    console.log(estado.brand)
    SetErr(inputValidate({
      ...estado,
      brand: [e.target.value]
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(err).length)
{return alert("Faltan datos")}
    dispatch(createProduct(estado));
    
    setEstado({
      name: "",
      brand: "",
      image: "",
      price: "",      
      category: "",
    });
    swal("product Modified successfully")
    setTimeout(() => {
      nav(-1)
      }, 1000);

  }

  return (
    <div className={style.backg}>
    <div className={style.wrapper}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h1 className={style.titleform}>Modify Product</h1>
            <div className={style.divcell}>
            <label className={style.label1}>Name: </label>
            <input
              className={style.input1}
              type="text"
              value={estado.name}
              name="name"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.name}
          </div>
          <div className={style.divcell}>
            <label className={style.label1}>Price: </label>
            <input
              className={style.input1}
              type="number"
              value={estado.price}
              min="0"
              max="1000"
              name="price"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.price}
          </div>




          <div className={style.divcell}>
            <label className={style.label1}>Image: </label>
            <input
              className={style.input1}
              // key="image"
              type="text"
              value={estado.image}
              name="image"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.image}
          </div>


          <div>
            <div>
              <label className={style.label1}>Brand: </label>

              <select className={style.input1} onChange={(e) => handleSelectBrand(e)}>
                 <option value={prodToMod[0].brand} selected > {prodToMod[0].brand}</option>
                {newDatas?.map((e) => (
                  <option className={style.input1} key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {err.brand}              
            </div>

            <div>
              <label className={style.label1}>Category: </label>

              <select className={style.input1} onChange={(e) => handleSelectCat(e)}>
                <option value={selectedCategory[0].name}  selected > {selectedCategory[0].name}</option>
                {category?.map((e) => (
                  <option className={style.input1} key={e.id} value={e.name}>
                    {e.name}
                  </option>
                ))}
                {err.category}
              </select>
            </div>

            <div>
              <button type="submit" className={style.btn}  onClick={handleSubmit}>
                Modify
              </button>
              <Link to="/admin/products">
                <button className={style.btn}>Go Back</button>
              </Link>
            </div>

            

          </div>
        </div>
      </form>
    </div>
    </div>
  );
}                  
        //  <form action="/images/add" method="POST" enctype="multipart/form-data">
        //                <div >
        //                    <input type="file" name="image"  id="inputGroupFile01"
        //                        aria-describedby="inputGroupFileAddon01"/>
        //                    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
        //                </div>
        //            
        //            <button  >
        //                Upload Photo
        //            </button >
        //  </form>




