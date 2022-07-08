const initialState = {
  products: [],
  allProducts: [],
  details: [],
  category: [],
  profile: [],
  review:[],
  //-----------------VER QUE SON ESTOS ESTADOS!
  currentUser: { carts: [{ productCart: [] }] },
  cart: {},
  productsAux: [],
  //-------------
  users: [],
  prodCart: localStorage.getItem('prodCart') ? JSON.parse(localStorage.getItem('prodCart')) : [],
  searchedUsers: [],
};

const orderProducts = (orderSelected, stateProducts) => {
  switch (orderSelected) {
    case "High to Low Price":
      return stateProducts.sort((a, b) => {
        return b.price - a.price;
      });
    case "Low to High Price":
      return stateProducts.sort((a, b) => {
        return a.price - b.price;
      });
    case "Sort by rated":
      return stateProducts.sort((a, b) => {
        return b.rating - a.rating;
      });
    default:
      return stateProducts;
  }
};
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
      };
    case "CREATE_CATEGORY":
      return {
        ...state,
      };
    case "DELETE_STOCK":
      return {
        ...state,
      };
    case "GET_CAT":
      return {
        ...state,
        category: action.payload,
      }
    case "GET_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "CREATE_USER":
      return {
        ...state,
      };
    case "GET_DETAIL":
      return {
        ...state,
        details: action.payload,
      };
    case "GET_PROFILE":
      return {
        ...state,
        profile: action.payload,
      };
    case " GET_ALL_USER":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_ALL":
      return {
        ...state,
        products: action.payload,
        allProducts: action.payload,
        productsAux: action.payload,
      };

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
    case "ADD_CART_TO_BACK":
      return {
        ...state,
      };
    // case "GET_CART":
    //   return {
    //     ...state,
    //     prodCart: action.payload,
    //   };
    // case "DELETE_PRODUCT_CART":
    //   return {
    //     ...state,
    //   };
    case 'ADD_PROD_TO_CART':
      const newProd = action.payload;
      const itemsInCart = state.prodCart?.find((e) => e.id === newProd.id);

      if (newProd.quantity < newProd.in_Stock) {
        const cartItems = itemsInCart
          ? state.prodCart.map((it) => it.id === newProd.id
            ? { ...it, quantity: it.quantity + 1 }
            : it)
          : [...state.prodCart, { ...newProd, quantity: 1 }];
        localStorage.setItem('prodCart', JSON.stringify(cartItems));
        return {
          ...state,
          prodCart: cartItems,
        };
      } else {
        return {
          ...state,
        };
      }


    // const newProd = action.payload;
    // const itemsInCart = state.prodCart?.find((e) => e.id === newProd.id);
    // const cartItems = itemsInCart
    //   ?.quantity < newProd.in_Stock
    //   ? state.prodCart.map((it) => it.id === newProd.id
    //     ? { ...it, quantity: it.quantity + 1 }
    //     : it)
    //   : [...state.prodCart, { ...newProd, quantity: 1 }];
    // localStorage.setItem('prodCart', JSON.stringify(cartItems));

    // return {
    //   ...state,
    //   prodCart: cartItems,
    // };
    case 'REMOVE_PROD_FROM_CART':
      const prodToRemove = state.prodCart?.find((e) => e.id === action.payload.id);
      const cartUpgrade = prodToRemove?.quantity > 1
        ? state.prodCart.map((it) => it.id === prodToRemove.id
          ? { ...it, quantity: it.quantity - 1 }
          : it)
        : state.prodCart.filter((upgrade) => upgrade.id !== action.payload.id);
      cartUpgrade.length > 0
        ? localStorage.setItem('prodCart', JSON.stringify(cartUpgrade))
        : localStorage.setItem('prodCart', JSON.stringify([]))
      console.log('cartUpgrade', cartUpgrade)


      return {
        ...state,
        prodCart: cartUpgrade,
      };
    case 'REMOVE_ALL_PRODUCTS_BYID':
      const prodToRemoveAll = state.prodCart?.filter((e) => e.id !== action.payload.id);
      prodToRemoveAll.length > 0
        ? localStorage.setItem('prodCart', JSON.stringify(prodToRemoveAll))
        : localStorage.setItem('prodCart', JSON.stringify([]))
      return {
        ...state,
        prodCart: prodToRemoveAll,
      };
    case 'CLEAR_CART':
      localStorage.removeItem('prodCart')
      return {
        ...state,
        prodCart: [],
      };
    case 'GET_USER_BY_NAME':
      return {
        ...state,
        searchedUsers: action.payload,
      };
    case 'POST_REVIEW':
      return {
        ...state,
      };
    case 'GET_REVIEW':
            return{
                ...state,
                review: action.payload
            };
    default:
      return state;
  }
}
export default rootReducer;