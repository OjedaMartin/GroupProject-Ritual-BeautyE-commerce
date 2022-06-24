
const initialState = {
  products: [],
  allProducts:[],
  details:[],
  categories: [],
};

const orderProducts = (orderSelected, stateProducts) => {
  switch (orderSelected) {
    case 'High to Low Price':
      return stateProducts.sort((a, b) => {
        return b.price - a.price;
      });
    case 'Low to High Price':
      return stateProducts.sort((a, b) => {
        return a.price - b.price;
      })
    case 'Sort by rated':
      return stateProducts.sort((a, b) => {
        return b.rating - a.rating;
      });
  }
}

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
    case "GET_CAT":
          return {
            ...state,
            categories: action.payload,
          }
    case "CREATE_ACT":
          return {
            ...state,
            activity: action.payload,
          } 
    case "GET_PRODUCT_BY_FILTER":
      return {
        ...state,
        products: action.payload,
      };
    case "ORDER_PRODUCTS":
      return {
        ...state,
        products: orderProducts(action.payload, state.products),
      };
    default:
      return state;
  }
}
export default rootReducer;
