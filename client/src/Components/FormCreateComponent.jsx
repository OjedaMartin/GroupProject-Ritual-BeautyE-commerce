import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProduct,
  getAllCategories,
  getAllProducts,
} from "../redux/actions";
import "./FormCreateComponent.css"
// import s from "./Create.module.css";
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
  if (!estado.difficult.length) {
    errors.difficult = `Difficult is required`;
  }
  if (estado.season.length === 0) {
    errors.season = "You must select at least one season";
  }
  if (!estado.duration || estado.duration === "") {
    errors.duration = `Duration is required`;
  }
  if (estado.countries.length === 0) {
    errors.countries = "You must select at least one country";
  }
  console.log("error", errors);
  return errors;
};

export default function AdminProduct() {
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   const countries = useSelector((state) => state.country);
  const products = useSelector((state) => state.products);
  //   const countries = useSelector((state) => state.country);
  const setArr = [];

  //   products.map((e) => e.products?.map((e) => setArr.push(e)));
  //   let newData = [...new Set(setArr)];

  const [estado, setEstado] = useState({
    name: "",
    brand: "",
    image: "",
    price: "",
    rating: "",
    category: [],
  });
  console.log(estado);
  const [err, SetErr] = useState({});

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
      products: [...estado.countries, e.target.value],
    });
    SetErr(
      inputValidate({
        ...estado,
        products: [...estado.products, e.target.products],
      })
    );
  }
  function handleCheck(e) {
    if (e.target.checked) {
      setEstado({
        ...estado,
        categories: [...estado.season, e.target.value],
      });
    } else {
      setEstado({
        ...estado,
        rating: estado.rating?.filter((s) => s !== e.target.value),
      });
    }
  }
  function handleCheckDif(e) {
    e.preventDefault();
    setEstado({
      ...estado,
      difficult: e.target.value,
    });
    SetErr(
      inputValidate({
        ...estado,
        difficult: [...estado.difficult, e.target.value],
      })
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.keys(err).length) {
      return alert("Faltan datos");
    }
    dispatch(createProduct(estado));
    dispatch(estado);
    alert("Actividad Añadida");
    SetErr({});
    setEstado({
      name: "",
      difficult: "",
      duration: [],
      season: [],
      countries: [],
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
              //   className={s.input}
              type="text"
              value={estado.rating}
              name="name"
              // onChange={(e) => handleChange(e)}
            />
            {err.name}
          </div>
          <div className='divcell'>
            <label className='label1'>Name: </label>
            <input
            className='input1'
              //   className={s.input}
              type="text"
              value={estado.name}
              name="name"
              onChange={(e) => handleChange(e)}
            />
            {err.name}
          </div>
          <div className='divcell'>
            <label className='label1'>Price: </label>
            <select onChange={(e) => handleCheckDif(e)}>
              <option value={0}>Price</option>
              {/* <option value={1} onChange={(e) => handleCheckDif(e)}>
                1
              </option>
              <option value={2} onChange={(e) => handleCheckDif(e)}>
                2
              </option>
              <option value={3} onChange={(e) => handleCheckDif(e)}>
                3
              </option>
              <option value={4} onChange={(e) => handleCheckDif(e)}>
                4
              </option>
              <option value={5} onChange={(e) => handleCheckDif(e)}>
                5
              </option> */}
            </select>
            {/* {err.difficult} */}
          </div>
          <div className='divcell'>
            <label className='label1'>Image: </label>
            <input
            className='input1'
              //   className={s.input}
              type="text"
              value={estado.brand}
              name="duration"
              //   className={s.body}
              onChange={(e) => handleChange(e)}
              // required="se te olvido algo"
            />
            {err.duration && <p>{err.duration}</p>}
          </div>
          <div>
            <label className='label1'>Categories </label>
<br/>
            <label className='label1'>
             Skincare
              <input
              className='input1'
                // className={s.input}
                type="checkbox"
                name={estado.category}
                value="Spring"
                onChange={(e) => handleCheck(e)}
              />
            </label >
            <label className='label1'>
              Hair
              <input
              className='input1'
                // className={s.input}
                type="checkbox"
                name={estado.category}
                value="Summer"
                onChange={(e) => handleCheck(e)}
              />
            </label>
            {/* <label>
              Otoño:
              <input
                className={s.input}
                type="checkbox"
                name={estado.season}
                value="Autumn"
                onChange={(e) => handleCheck(e)}
              />{" "}
            </label>
            <label>
              Invierno:
              <input
                className={s.input}
                type="checkbox"
                name={estado.season}
                value="Winter"
                onChange={(e) => handleCheck(e)}
              />{" "}
            </label> */}
            {err.category && <p>{err.category}</p>}

            {/* {err.rating && <p>{err.rating}</p>} */}
          </div>

          <div>
            <label className='label1' >brand: </label>

            <select onChange={(e) => handleSelect(e)}>
              {products?.map((e) => (
                <option key={e.name} value={e.name}>
                  {e.name}
                </option>
              ))}
              {err.brand}
            </select>
            <div>
              <ul className='label1'>
                brands selected:{" "}
                {estado.products?.map((e) => (
                  <p key={e}>{e}</p>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <button className='btn' onClick={(e) => handleSubmit(e)}>Crealo!</button>
            <Link to="/">
              <button className='btn'>Volver</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}