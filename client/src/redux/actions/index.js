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
    //console.log("getAll", json)
    return dispatch({
      type: "GET_ALL",
      payload: json.data,
    });
  };
}
export function getAllCategories() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/categories");
    return dispatch({
      type: "GET_CAT",
      payload: json.data,
    });
  };
}
export function getAllUsers() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/users");    
    return dispatch({
      type: "GET_USERS",
      payload: json.data,
    });
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let prod = await axios.get(`http://localhost:3001/products/${id}`);
     //console.log("getDet", prod)
      return dispatch({
        type: "GET_DETAIL",
        payload: prod.data,
      });
    } catch (error) {
      return dispatch({
        type: "GET_DETAIL",
        payload: error.name,
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
    const info = await axios.post("http://localhost:3001/products/create", payload);
    console.log("info action", info);
    return {
      type: "CREATE_PRODUCTS",
      info
    }
  };
}


export function getfilterCategories(params) {
  return async function (dispatch) {
    try {
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
    try {
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
export function getProfile(params) {
  return async function (dispatch) {
    try{
    const json = await axios.get(``)
    return dispatch({
      type: 'GET_PROFILE',
      payload: json.data
    })
  } catch (error) {
    console.log(error)
   }
  }
}
export function logIn(params) {
  return async function (dispatch) {
    try{
    const json = await axios.get(`http://localhost:3001/users/login`)
    return dispatch({
      type: 'GET_PROFILE',
      payload: json.data
    })
  } catch (error) {
    console.log(error)
   }
  }
}

export function postCategory(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/categories/create", payload);
    console.log("info action", info);
    return {
      type: "CREATE_CATEGORY",
      info
    }
  };
}

export function addToCart (productId,cant,email) {
  return async function(dispatch){
    const json = await axios.post(`http://localhost:3001/cart/add/${productId}/${email}/${cant}`);
    console.log('json action addToCart',json);
    return dispatch({
      type: "ADD_TO_CART"
    })
  }
}

export function getAllCart (productId,cant,email){
  return async function (dispatch) {
    const json = await axios.get(`http://localhost:3001/cart/all${productId}/${email}/${cant}`);
    console.log('json action getAllCart',json);
    return dispatch({
      type: "GET_CART",
      payload: json.data,
    })
  }
}

export function deleteProductCart (productId){//DEBERIA HABER ALGO PARA IDENTIFICAR DE QUE CART BORRAR
  return async function (dispatch) {
    const json = await axios.delete(`http://localhost:3001/cart/delete/${productId}`);
    console.log('json action deleteProductCart',json);
    return dispatch({
      type: "DELETE_PRODUCT_CART",
    });
  }
}

export function addProdToCart (product){
  return ({
    type:'ADD_PROD_TO_CART', 
    payload: product,
  })
}

export function removeProdFromCart (product){
  return ({
    type:'REMOVE_PROD_FROM_CART', 
    payload:product,
  })
}
export function removeAllOneProdToCart (product){
  console.log('PROD ACTIONS--> REMOVE',product)
  return ({
    type:'REMOVE_ALL_PRODUCTS_BYID', 
    payload:product,
  })
}

export function clearCart (){
  return ({
    type:'CLEAR_CART',
  })
}
///USUARIOS: RUTA DE CREACION, BUSQEDA Y LISTA DE USUARIOS
export function createUser(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/users", payload);
    console.log("info action", info);
    return {
      type: "CREATE_USER",
      info
    }
  };
}
export function getUser(payload){
  return async function (dispatch){
      try {
          const json = await axios.get("http://localhost:3001/users/" + payload)
          return dispatch({
              type: "GET_USER",
              payload: json.data
          })
      } catch(err){
          console.log(err)
      }
  }
}
// export function getAllUsers(){
//   return async function (dispatch){
//       try {
//           const json = await axios.get("http://localhost:3001/users/" )
//           return dispatch({
//               type: "GET_ALL_USERS",
//               payload: json.data
//           })
//       } catch(err){
//           console.log(err)
//       }
//   }
// }
export const putUser = async (payload) => {
  return await axios.put("http://localhost:3001/users/update", payload)
  .then(function (response) {})
  .catch(function (error) {});
};
