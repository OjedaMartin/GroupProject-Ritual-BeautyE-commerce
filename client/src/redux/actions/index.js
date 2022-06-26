import axios from "axios";

export function getProductName(name) {

  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/products/search?name=" + name)
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

export function getCategory(){
  return async function (dispatch) {
    try {
      const categories = await axios.get('http://localhost:3001/categories');
      return dispatch({
        type: 'GET_CATEGORY',
        payload: categories.data,
      })
    } catch(error){
      console.log(error);
    }
  }
  
};

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


export function getfilterCategories(params) {
  return async function (dispatch) {
    try{
    const json = await axios.get(`http://localhost:3001/filters/category/${params}`)
    return dispatch({
      type: 'GET_FILTER_CATEGORIES',
      payload: json.data
    })
  } catch (error) {
    console.log(error)
   }
  }
}
export function getfilterBrand(params) {
  return async function (dispatch) {
    try{
    const json = await axios.get(`http://localhost:3001/filters/brand/${params}`)
    return dispatch({
      type: 'GET_FILTER_BRAND',
      payload: json.data
    })
  } catch (error) {
    console.log(error)
   }
  }
}