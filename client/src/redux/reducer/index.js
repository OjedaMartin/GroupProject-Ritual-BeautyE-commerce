//import { FaAcquisitionsIncorporated } from "react-icons/fa";

const initialState = {
  products: [],
  allProducts: [],
  details: [],
  category: [],
  productsAux: [],
  productsCart: [],
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
    default:
      return stateProducts;
  }
}
function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_PRODUCT_NAME":
      return {
        ...state,
        products: action.payload,
      };
      case "CREATE_PRODUCTS":
        return {
          ...state,
         
        }
        case "CREATE_CATEGORY":
        return {
          ...state,
         
        }
        case "GET_CAT":
          return {
            ...state,
            category: action.payload,
          }
    case "GET_DETAIL":
      return {
        ...state,
        details: action.payload,
      };
    case "GET_ALL":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productsAux: action.payload
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
    case "GET_FILTER_CATEGORIES":
      return {
        ...state,
        products: action.payload,
        productsAux: action.payload,
      };

    case "GET_FILTER_BRAND":
      return {
        ...state,
        products: action.payload,
      };
    case "ADD_TO_CART":
      return{
        ...state,
      };
    case "GET_CART":
      return {
        ...state,
        productsCart: action.payload,
      };
    case "DELETE_PRODUCT_CART":
      return{
        ...state,
      };
    default:
      return state;
  }
}
export default rootReducer;
