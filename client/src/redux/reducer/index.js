const initialState = {
  products: [],
  allProducts: [],
  details: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
      };
    case "GET_PRODUCT_NAME":
      return {
        ...state,
        products: action.payload,
      };

    case "GET_DETAIL":
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
}
export default rootReducer;
