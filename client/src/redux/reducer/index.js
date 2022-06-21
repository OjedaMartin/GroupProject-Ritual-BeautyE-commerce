const initialState = {
    products : []
}


function rootReducer (state= initialState, action){
    switch(action.type){
        case 'GET_PRODUCT_NAME':
            return{
                ...state,
                products: action.payload,
                
            } 

        default: 
            return state;
    }
}
export default rootReducer;