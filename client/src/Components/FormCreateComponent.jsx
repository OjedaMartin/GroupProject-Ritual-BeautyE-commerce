import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getAllCategories,
  getAllProducts,
} from "../redux/actions/index";
import style from "./FormCreateComponent.module.css";
const inputValidate = (estado) => {
  let errors = {};
  if (!isNaN(Number(estado.name))) {
    errors.name = "The name of the Activities cannot contain only numbers";
  }
  if (estado.name === "") {
    errors.name = "The name is required";
  }
  if (estado.name.length < 2) {
    errors.name = "Name must contain at least four (2) characters";
  }
  if (!estado.price.length) {
    errors.price = `Price is required`;
  }
  if (estado.CategoryId.length === 0) {
    errors.CategoryId = "You must select at least one category";
  }
  if (estado.brand.length === 0) {
    errors.brand = "You must select at least one brand";
  }

  return errors;
};

export default function AdminProduct() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const category = useSelector((state) => state.category);
  const [err, SetErr] = useState({});
  const [estado, setEstado] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    CategoryId: "",
  });
  const setArr = [];
  category.map((e) => setArr.push(e.id));
  let newData = [...new Set(setArr)];

  const setBrand = [];
  products.map((e) => setBrand.push(e.brand));
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
      CategoryId: [...estado.CategoryId, e.target.value],
    });
    SetErr(
      inputValidate({
        ...estado,
        CategoryId: [...estado.CategoryId, e.target.value],
      })
    );
  }

  function handleSelectBrand(e) {
    setEstado({
      ...estado,
      brand: [...estado.brand, e.target.value],
    });
    SetErr(
      inputValidate({
        ...estado,
        brand: [...estado.brand, e.target.value],
      })
    );
  }

  function handleCreate(e) {
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
      CategoryId: "",
    });
  }
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getAllCategories());
  }, [dispatch]);

  return (
    <div className={style.backg}>
      <div className={style.wrapper}>
        <form onSubmit={(e) => handleCreate(e)}>
          <div>
            <h1 className={style.titleForm}>Create New Product</h1>

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
                <label className={style.label1}>Id: </label>

                <select
                  className={style.input1}
                  onChange={(e) => handleSelect(e)}
                >
                  {newData?.map((e) => (
                    <option className={style.input1} key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                {err.CategoryId}
                <div>
                  <ul className={style.label1}>
                    selected: {estado.CategoryId}
                  </ul>
                </div>
              </div>

              <div>
                <label className={style.label1}>Brand: </label>

                <select
                  className={style.label1}
                  onChange={(e) => handleSelectBrand(e)}
                >
                  {newDatas?.map((e) => (
                    <option className={style.input1} key={e} value={e}>
                      {e}
                    </option>
                  ))}
                </select>
                {err.brand}
                <div>
                  <ul className={style.label1}>Selected: {estado.brand}</ul>
                </div>
              </div>

              <div>
                <button className={style.btn} onClick={(e) => handleCreate(e)}>
                  Create
                </button>
                <Link to="/">
                  <button className={style.btn}>Back to Home</button>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}