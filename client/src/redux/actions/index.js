import axios from "axios";

export function getProductName(name) {

  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/product?name=" + name)
      return dispatch({
        type: 'GET_PRODUCT_NAME',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}



export function getAllProducts() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/products");
    console.log("getAll", json)
    return dispatch({
      type: "GET_ALL",
      payload: json.data,
    });
  };
}
export function getAllCategories() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/categories");
    console.log("getAll", json)
    return dispatch({
      type: "GET_CAT",
      payload: json.data,
    });
  };
}
export function getDetail(id) {
  return async function (dispatch) {
    try {
      let prod = await axios.get(`http://localhost:3001/products/${id}`);
console.log("getDet", prod)
      return dispatch({
        type: "GET_DETAIL",
        payload: prod.data, //
      });
    } catch (error) {
      return dispatch({
        type: "GET_DETAIL",
        payload: error.name, //
      });
    }
  };
}

export function getFilterProducts(filterSelected) {

  return async function (dispatch) {
    try {
      const productsByFilter = await axios.get(`http://localhost:3001/filters/:${filterSelected}`);
      return dispatch({
        type: 'GET_PRODUCT_BY_FILTER',
        payload: productsByFilter.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}
export function orderProducts(orderSelected) {
  return {
    type: 'ORDER_PRODUCTS',
    payload: orderSelected,
  }
}
export function createProduct(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/product", payload);
    console.log(info);
    return info;
  };
}
