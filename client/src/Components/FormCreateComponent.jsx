import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import {
  createProduct,
  getAllCategories,
  getAllProducts,
} from "../redux/actions";
import "./FormCreateComponent.css";


export default function AdminProduct() {
//   const dispatch = useDispatch();
//   // const { register } = useForm();
//   const { estado, setEstado } = useState({
//     name: "",
//     brand: "",
//     image: "",
//     price: "",
//     rating: "",
//     category: [],
//   });
  
//   // const onSubmit = (products) => console.log(products);
//   function handleS(e) {
//     e.preventDefault();
//     dispatch(createProduct(estado));
//     dispatch(estado);
//     alert("successfully");
//     setEstado({
//       name: "",
//       brand: "",
//       image: "",
//       price: "",
//       rating: "",
//       category: "",
//     });
//   }
//   function Change(e) {
//     e.preventDefault();
//     setEstado({
//       ...estado,
//       [e.target.name]: e.target.value,
//     });
//   return (
    
//     <div className="wrapper">
//       <pre>
//       JSON.stringify(estado)
//     </pre>
//       <h1 className="titleForm">Create New Product</h1>
//       <form onSubmit={(e) => handleS(e)}>
//         <div className="divcell">
//           <label htmlFor="name" className="label1">
//             Name
//           </label>
//           <input
//             // {...register("name")}
//             name="name"
//             type="text"
//             required
//             value= {estado.name}
//             onChange={(e) =>Change(e)}

//           />
//         </div>
//         <div className="divcell">
//           <label htmlFor="brand" className="label1">
//             Brand
//           </label>
//           <input
//             value= {estado.brand}

//             // {...register("brand")}
//             name="brand"
//             type="text"
//             required
//             onChange={(e) =>Change(e)}
//           />
//         </div>
//         <div className="divcell">
//           <label htmlFor="price" className="label1">
//             Price
//           </label>
//           <input
//             value= {estado.price}

//             // {...register("price")}
//             name="price"
//             type="text"
//             required
//             onChange={(e) =>Change(e)}

//           />
//         </div>
//         <div className="divcell">
//           <label htmlFor="rating" className="label1">
//             rating
//           </label>
//           <input
//             value= {estado.rating}

//             // {...register("rating")}
//             name="rating"
//             type="text"
//             required
//             onChange={(e) =>Change(e)}

//           />
//         </div>
//         <div className="divcell">
//           <label htmlFor="category" className="label1">
//             Category
//           </label>
//           <input
//             value= {estado.category}

//             // {...register("category")}
//             name="category"
//             type="text"
//             required
//             onChange={(e) =>Change(e)}

//           />
//         </div>
//         <div className="divcell">
//           <label htmlFor="image" className="label1">
//             image
//           </label>

//           <input
//             value= {estado.image}

//             // {...register("image")}
//             name="image"
//             type="text"
//             requered
//             onChange={(e) => Change(e)}

//           />
//         </div>
//         <div className="divcell"></div>
//         <input className="btn" type="submit" name="crear" />
//         <Link to="/">
//           <button className="btn">Volver</button>
//         </Link>
//       </form>
//     </div>
//   );
// }
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  console.log (products)
  // const setArr = [];

  
  const [estado, setEstado] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    rating: "",
    idcategory: "",
  });
  console.log(estado);
  const [err, SetErr] = useState({});
 

  function handleChange(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    
  }
  function handleSelect(e) {
    setEstado({
      ...estado,
      idcategory: [...estado.idcategory, e.target.value],
    });
   
  }
  function handleSelectBrand(e) {
    setEstado({
      ...estado,
      brand: [...estado.brand, e.target.value],
    });
  }
  
 
  function handleSubmit(e) {
    e.preventDefault();
    if (!Object.keys.length) {
      return alert("Faltan datos");
    }
    dispatch(createProduct(estado));
    dispatch(estado);
    alert("Actividad Añadida");
    SetErr({});
    setEstado({
      name: "",
      brand: "",
      image: "",
      price: "",
      rating: "",
      category:"",
      idcategory: "",
    });
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (

  
    <div className='wrapper'>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h1 className='titleForm'>Create New Product</h1>
          <div className='divcell'>
            <label className='label1'>Rating: </label>
            <input
            className='input1'
              type="number"
              value={estado.rating} min="0" max="1000"
              name="rating"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className='divcell'>
            <label className='label1'>Name: </label>
            <input
            className='input1'
              type="text"
              value={estado.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {err.name}
          </div>
          <div className='divcell'>
            <label className='label1'>Price: </label>
            <input
            className='input1'
              type="number"
              value={estado.price} min="0" max="1000"
              name="price"
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className='divcell'>
            <label className='label1'>Image: </label>
            <input
            className='input1'
            // key="image"
              type="text"
              value={estado.image}
              name="image"
            
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div>
          
          <div>
            <label className='label1' >Category: </label>

            <select onChange={(e) => handleSelect(e)}>
              {products?.map((e) => (
                <option key={e} value={e.idcategory}>
                  {e.idcategory}
                </option>
              ))}
              {err.brand}
            </select>
            <div>
              
              <ul className='label1'>
                 selected:{" "}
                {estado.products?.map((e) => (
                  <p key={e}>{e.idcategory}</p>
                ))}
              </ul>
            </div>
          </div>
          
          <div>
            <label className='label1' >Brand: </label>

            <select onChange={(e) => handleSelectBrand(e)}>
              {products?.map((e) => (
                <option key={e} value={e.brand}>
                  {e.brand}
                </option>
              ))}
            </select>
            <div>
              <ul className='label1'>
                Brands selected:{" "}
                {estado.products?.map((e) => (
                  <p key={e}>{e.brand}</p>
                ))}
              </ul>
            </div>
          </div>
          
          {/* <div>
            <label className='label1' > </label>

            <select onChange={(e) => handleSelectC(e)}>
              {products?.map((e) => (
                <option key={e} value={e.category}>
                  {e.category}
                </option>
              ))}
            </select>
            <div>
              <ul className='label1'>
                Brands selected:{" "}
                {estado.products?.map((e) => (
                  <p key={e}>{e.category}</p>
                ))}
              </ul>
            </div>
          </div> */}
          <div>
            <button className='btn' onClick={(e) => handleSubmit(e)}>Crealo!</button>
            <Link to="/">
              <button className='btn'>Volver</button>
            </Link>
          </div>
        </div>
        </div>

      </form>
    </div>
  );
}