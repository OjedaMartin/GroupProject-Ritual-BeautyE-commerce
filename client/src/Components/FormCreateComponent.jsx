import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getAllCategories,
  getAllProducts,
} from "../redux/actions";
import "./FormCreateComponent.css";
const inputValidate = (estado) => {
  let errors = {};
  if(!isNaN(Number(estado.name))) {
  errors.name = 'The name of the Activities cannot contain only numbers';
} if(estado.name === "") {
  errors.name = 'The name is required';
} if(estado.name.length <2) {
  errors.name = 'Name must contain at least four (2) characters';
} 
if(!estado.price.length) {
  errors.difficult = `Difficult is required`;
} 
 if(estado.idcategory.length === 0) {
  errors.idcategory = 'You must select at least one category';
} if(!estado.rating || estado.rating === "") {
  errors.rating = `Rating is required`;
} if(estado.brand.length === 0) {
  errors.brand = 'You must select at least one brand';
}if(estado.category.length === 0) {
  errors.category = 'You must select at least one category';
}
console.log("error", errors)
return errors;
};

export default function AdminProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);
  console.log("2",products);
  const [err, SetErr] = useState({});
  const [estado, setEstado] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    rating: "",
    idcategory: "",
    category: "",
  });
  console.log("estado",estado);
  // const [err, SetErr] = useState({});
  const setArr = [];
  category.map((e) =>setArr.push(e.id));
  let newData = [...new Set(setArr)];

  const setBrand = [];
  products.map((e) =>setBrand.push(e.brand));
  let newDatas = [...new Set(setBrand)];


  function handleChange(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      [e.target.name]: e.target.value,
    });
    SetErr(inputValidate({ ...estado, [e.target.name]: e.target.value }));
  }
  function handleSelect(e) {
    setEstado({
      ...estado,
      idcategory: [...estado.idcategory, e.target.value],
    });
    SetErr(inputValidate({
      ...estado,
      idcategory: [...estado.idcategory, e.target.value]
    }));
  }
  function handleSelectCat(e) {
    setEstado({
      ...estado,
      category: [...estado.category, e.target.value],
    });
    SetErr(inputValidate({
      ...estado,
      category: [...estado.category, e.target.value]
    }));
  }
  function handleSelectBrand(e) {
    setEstado({
      ...estado,
      brand: [...estado.brand, e.target.value],
    });
    SetErr(inputValidate({
      ...estado,
      brand: [...estado.brand, e.target.value]
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(err).length)
{return alert("Faltan datos")}
    dispatch(createProduct(estado));
    dispatch(estado);
    alert("Actividad Añadida");
    setEstado({
      name: "",
      brand: "",
      image: "",
      price: "",
      rating: "",
      idcategory: "",
      category: "",
    });
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className="backg">
    <div className="wrapper">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <h1 className="titleForm">Create New Product</h1>
          <div className="divcell">
            <label className="label1">Rating: </label>
            <input
              className="input1"
              type="number"
              value={estado.rating}
              min="0"
              max="1000"
              name="rating"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.rating}
          </div>
          <div className="divcell">
            <label className="label1">Name: </label>
            <input
              className="input1"
              type="text"
              value={estado.name}
              name="name"
              onChange={(e) => handleChange(e)}
              required
            />
            {err.name}
          </div>
          <div className="divcell">
            <label className="label1">Price: </label>
            <input
              className="input1"
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
          <div className="divcell">
            <label className="label1">Image: </label>
            <input
              className="input1"
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
              <label className="label1">Id: </label>

              <select className="input1" onChange={(e) => handleSelect(e)}>
                {newData?.map((e) => (
                  <option className="input1"  key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {err.idcategory}
              <div>
                <ul className="label1">
                  selected:{" "}
                 {estado.idcategory}
                </ul>
              </div>
            </div>

            <div>
              <label className="label1">Brand: </label>

              <select className="input1" onChange={(e) => handleSelectBrand(e)}>
                {newDatas?.map((e) => (
                  <option className="input1" key={e} value={e}>
                    {e}
                  </option>
                ))}
              </select>
              {err.brand}
              <div>
                <ul className="label1">
                  Selected:{" "}
                  {estado.brand}
                 
                </ul>
                
              </div>
            </div>

            <div>
              <label className="label1">Category: </label>

              <select className="input1" onChange={(e) => handleSelectCat(e)}>
                {category?.map((e) => (
                  <option className="input1" key={e} value={e.name}>
                    {e.name}
                  </option>
                ))}
                {err.category}
              </select>
              <div>
                <ul className="label1">
                  Selected:{" "}
                  {estado.category}
                 
                </ul>
              </div>
            </div>

            <div>
              <button className="btn" onClick={(e) => handleSubmit(e)}>
                Crealo!
              </button>
              <Link to="/">
                <button className="btn">Volver</button>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
    </div>
  );
}
