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
export function UserLogin(payload) {
	return async function (dispatch) {
		try {
			const userLogin = await axios.post("http://localhost:3001/users/login", payload);
			return dispatch({
				type: "GET_USER_DATA",
				payload: userLogin.data,
			});
		} catch (error) {
			console.log("ERROOOOOOOOOORRRRR", error.name);
			return dispatch({
				type: "GET_USER_DATA",
				payload: error,
			});
		}
	};
}
export function loggedOut() {
	return {
		type: "LOGGED_OUT",
	};
}
export function getAllClientsUserEmail() {
	return async function (dispatch) {
		const { data } = await axios.get("/findUserByUsername");
		return dispatch({
			type: "GET_ALL_CLIENTS_USER_EMAIL",
			payload: data,
		});
	};
}
export function createNewUser(payload) {
	return async function (dispatch) {
		const newUser = await axios.post("http://localhost:3001/products/create", payload);
		return newUser;
	};
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
      console.log("getDet", prod)
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
// export function getProfile(params) {
//   return async function (dispatch) {
//     try{
//     const json = await axios.get(``)
//     return dispatch({
//       type: 'GET_PROFILE',
//       payload: json.data
//     })
//   } catch (error) {
//     console.log(error)
//    }
//   }
// }
// export function logIn(params) {
//   return async function (dispatch) {
//     try{
//     const json = await axios.get(`http://localhost:3001/users/login`)
//     return dispatch({
//       type: 'GET_PROFILE',
//       payload: json.data
//     })
//   } catch (error) {
//     console.log(error)
//    }
//   }
// }

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