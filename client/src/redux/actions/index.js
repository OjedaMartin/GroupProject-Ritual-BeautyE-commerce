import axios from "axios";

export function getProductName(name) {
  return async function (dispatch) {
    try {
      let json = await axios.get("http://localhost:3001/product?name=" + name);
      return dispatch({
        type: "GET_PRODUCT_NAME",
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDetail(id) {
  return async function (dispatch) {
    try {
      let prod = await axios.get(`http://localhost:3001/products/${id}`);
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
