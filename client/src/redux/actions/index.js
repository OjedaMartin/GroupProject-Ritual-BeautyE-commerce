import axios from 'axios';

export function getProductName(name){
    return async function (dispatch){
        try{
            let json = await axios.get ("http://localhost:3001/product?name=" + name)
            return dispatch({
                type: 'GET_PRODUCT_NAME',
                payload: json.data 
            })
        }catch (error){
             console.log(error)}
    }
}
export function postUser (payload){
    return async function (dispatch){
        let json = await axios.post("http://localhost:3001/create",payload);
        return json;
    }
}