import axios from 'axios';

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
    export function getOrderProducts(orderSelected) {
        return {
            type: 'ORDER_PRODUCTS',
            payload: orderSelected,
        }
    }