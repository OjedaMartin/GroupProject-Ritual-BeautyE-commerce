import axios from "axios";



//////////////////////////////////////////////GETS//////////////////////////////////////////////////


//TRAE PRODUCTOS POR NOMBRE
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

//FILTRA POR CATEGORIA
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

//TRAE TODOS LOS PRODUCTOS
export function getAllProducts() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/products");
    return dispatch({
      type: "GET_ALL",
      payload: json.data,
    });
  };
}

//TRAE TODAS LAS CATEGORIAS
export function getAllCategories() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/categories");
    return dispatch({
      type: "GET_CAT",
      payload: json.data,
    });
  };
}

//TRAE TODOS LOS USUARIOS
export function getAllUsers() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/users");
    return dispatch({
      type: "GET_ALL_USERS",
      payload: json.data,
    });
  };
}
export function getAllReviews() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/review");
    return dispatch({
      type: "GET_ALL_REVIEWS",
      payload: json.data,
    });
  };
}

//FILTRA POR MARCA
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

// TRAE EL PREFIL POR NOMBRE
export function getProfile(params) {
  return async function (dispatch) {
    try {
      const json = await axios.get(`http://localhost:3001/users/name`, params)
      return dispatch({
        type: 'GET_PROFILE',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}

//TRAE EL DETALLE POR ID
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



//TRAE USUARIO POR NOMBRE
export function getUserByName(name) {

  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/users/" + name)
      return dispatch({
        type: 'GET_USER_BY_NAME',
        payload: json.data
      })
    } catch (error) {
      console.log(error)
    }
  }
}
////////////////////////////////////////////////POSTS////////////////////////////////////////////////


//CREA UN PRODUCTO
export function createProduct(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/products/create", payload);
    //console.log("info action", info);
    return {
      type: "CREATE_PRODUCTS",
      info
    }
  };
}
//CARGA A BD UN USUARIO
export function Log(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/users/login", payload);
    //console.log("info action", info);
    return {
      type: "LOG",
      info
    }
  };
}

//CREA UNA CATEGORIA
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



//CREA UN USUARIO
export function createUser(payload) {
  return async function (dispatch) {
    const info = await axios.post("http://localhost:3001/users/register", payload);
    console.log("info action", info);
    return {
      type: "REGISTER",
      info
    }
  };
}

///////////////////////////////////////////////////////PUTS////////////////////////////////////////////

//SETEA EL STOCK EN 0
export function deleteStock(id, payload) {
  return async function (dispatch) {
    const info = await axios.put(`http://localhost:3001/products/stock/${id}`, payload);
    console.log("info action", info);
    return {
      type: "DELETE_STOCK",
      info
    }
  };
}

//CAMBIA EL NOMBRE DE LA CATEGORIA
export function putCategory(payload) {
  return async function (dispatch) {
    const info = await axios.put(`http://localhost:3001/categories/change/`, payload);
    console.log("info action", info);
    return {
      type: "PUT_CATEGORY",
      info
    }
  };
}
//CAMBIA LA CATEGORIA A STATUS:HIDDEN
export function hideCategory(payload) {
  return async function (dispatch) {
    const info = await axios.put(`http://localhost:3001/categories/hide/`, payload);
    console.log("info action", info);
    return {
      type: "HIDE_CATEGORY",
      info
    }
  };
}

//CAMBIA LOS DATOS DEL USER
export const putUser = (payload) => {
  return async function (dispatch) {
    let profile = await axios.put("http://localhost:3001/users/update", payload)
    return dispatch(
      {
        type: "PUT",
        payload: profile.data
      }
    )

  }

};


///////////////////////////////////////////////////////DELETE//////////////////////////////////////////

//BORRA DEL PRODUCTOS DEL CARRITO

export function deleteReview(reviewId) {
  return async function (dispatch) {
    const json = await axios.delete(`http://localhost:3001/review/delete/${reviewId}`);
    console.log('json action delete review', json);
    return dispatch({
      type: "DELETE_REVIEW",
    });
  }
}

///////////////////////////////////////////////////CART/////////////////////////////////////////////

// export function deleteProductCart (productId){//DEBERIA HABER ALGO PARA IDENTIFICAR DE QUE CART BORRAR
//   return async function (dispatch) {
//     const json = await axios.delete(`http://localhost:3001/cart/delete/${productId}`);
//     console.log('json action deleteProductCart',json);
//     return dispatch({
//       type: "DELETE_PRODUCT_CART",
//     });
//   }
// }
// MUEVE EL CONTENIDO DEL CARRITO AL USUARIO

export function getCartbyUser(params) {
  return async function (dispatch) {
    try {
      let json = await axios.get(`http://localhost:3001/cart/user/${params}`)
      return dispatch({
        type: 'GET_CART_USER',
        payload: json.data,
      })
    } catch (e) {
      console.log(e)
    }
  }
}

// //TRAE USUARIO POR NOMBRE
// export function getUserByName(name) {

//   return async function (dispatch) {
//     try {
//       let json = await axios.get("http://localhost:3001/users/" + name)
//       return dispatch({
//         type: 'GET_USER_BY_NAME',
//         payload: json.data
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }
// }


export function addCartToBack(payload) {
  return async function (dispatch) {
    const json = await axios.post('http://localhost:3001/cart/add/', payload);
    // console.log('json action addCartToBack',json.data);
    return dispatch({
      type: "ADD_CART_TO_BACK"
    })
  }
}
export function addProdToCart(product, isLogin) {
  return ({
    type: 'ADD_PROD_TO_CART',
    payload: product,
    login: isLogin,
  })
}

export function removeProdFromCart(product) {
  return ({
    type: 'REMOVE_PROD_FROM_CART',
    payload: product,
  })
}
export function removeAllOneProdToCart(product) {
  //console.log('PROD ACTIONS--> REMOVE',product)
  return ({
    type: 'REMOVE_ALL_PRODUCTS_BYID',
    payload: product,
  })
}

export function clearCart() {
  return ({
    type: 'CLEAR_CART',
  })
}
export function clearCartUserPRUEBA() {
  return ({
    type: 'CLEAR_CART_USER',
  })
}

///////////////////////////////////////////////////ORDER/////////////////////////////////////////////

export function orderProducts(orderSelected) {
  return {
    type: 'ORDER_PRODUCTS',
    payload: orderSelected,
  }
}

