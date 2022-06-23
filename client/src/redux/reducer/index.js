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
            case 'POST_USER':
                return{
                    ...state,                
                } 
        default: 
            return state;
    }
}
export default rootReducer;