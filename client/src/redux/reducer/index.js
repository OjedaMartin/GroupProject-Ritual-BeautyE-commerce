const initialState = {
  products: [],
  allProducts:[],
  details:[],
  // categories:[],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_NAME":
      return {
        ...state,
        products: action.payload,
      };
      case "CREATE_ACT":
        return {
          ...state,
          activity: action.payload,
        }
        case "GET_CAT":
          return {
            ...state,
            categories: action.payload,
          }
    case "GET_DETAIL":
      return {
        ...state,
        details: action.payload,
      };
      case "GET_ALL":
        return{
          ...state,
          products: action.payload,
          allProducts: action.payload
        }
    default:
      return state;
  }
}
export default rootReducer;
