const initialState = {
  products: [],
  allProducts: [],
  details: [],
  category: [],
  profile: [],
  review: [],
  cu: [],
  putUser: [],
  //-----------------VER QUE SON ESTOS ESTADOS!
  currentUser: { carts: [{ productCart: [] }] },
  cart: {},
  productsAux: [],
  //-------------
  users: [],
  prodCart: localStorage.getItem('prodCart') ? JSON.parse(localStorage.getItem('prodCart')) : [],
  allreviews:[],
  allOrders:[],
  searchedUser:[],
  currentOrder:[],
  cartUser: [],
  cartUserPRUEBA: [],
  testStatus: [],
  //-------------
  
  
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
    case "BAN_USER":
      return {
        ...state,
      };
    case "UPGRADE_TO_ADMIN":
      return {
        ...state,
      };
    case "DELETE_STOCK":
      return {
        ...state,
      };
    case "DISCOUNT_PRODUCT":
      return {
        ...state,
      };
    case "PUT_CATEGORY":
      return {
        ...state,
      };
    case "DISCOUNT_OFFER":
      return {
        ...state,
      };
    case "GET_USER_BY_EMAIL":
      return {
        ...state,
        searchedUser: action.payload,
      };
    case "PUT":
      return {
        ...state,
      };
    case "LOG":
      return {
        ...state,
        profile: action.payload.data
      };
    case "HIDE_CATEGORY":
      return {
        ...state,
      };      
    case "UPDATE_ORDER_STATE":
      return {
        ...state,
      };      
    case "DELETE_REVIEW":
      return {
        ...state,
      };
    case "GET_CAT":
      return {
        ...state,
        category: action.payload,
      }
    case "GET_ALL_REVIEWS":
      return {
        ...state,
        allreviews: action.payload,
      }
    case "GET_ORDER_BY_ID":
      return {
        ...state,
        currentOrder: action.payload,
      }
    case "GET_ALL_ORDERS":
      return {
        ...state,
        allOrders: action.payload,
      }
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
      };
    case "REGISTER":
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
    case "GET_CART":
      return {
        ...state,
        cartUser: action.payload,
      };
    // case "DELETE_PRODUCT_CART":
    //   return {
    //     ...state,
    //   };
    case 'ADD_PROD_TO_CART':
      const newProd = action.payload;
      const isLogin = action.login;
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      console.log('newProd----> ESTE ES EL PRODUCTO A AGREGAR', newProd)
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////  

      //---------------------------------------SI EL USUARIO TRAE CART, LO TENGO QUE COMPLETAR CON EL ID
      const itemsUserCart = [];

      if (state.cartUserPRUEBA.length > 0 && state.prodCart.length === 0) {
        state.cartUserPRUEBA.map((e) => itemsUserCart.push({
          id: e.ProductId.id,
          name: e.ProductId.name,
          image: e.ProductId.image,
          price: e.ProductId.price,
          brand: e.ProductId.brand,
          in_Stock: e.ProductId.in_Stock,
          CategoryId: e.ProductId.CategoryId,
          rating: e.ProductId.rating,
          quantity: e.quantity,
        }))
      }

      //console.log('itemsUserCart ---> ESTO ES LO QUE ME TRAIGO DE DB', itemsUserCart)


      //---------------------------------------ACA YA ME DOY CUENTA SI TENGO UN CARRITO DEL USUARIO O NO (EL UNICO CASO SERIA QUE EL USUARIO NO TENGO UN CARRITO Y QUE EL LOCALSTORAGE A LA HORA DE LOGEARSE ESTE VACIO, ES DECIR QUE EL USUARIO NO HAYA AGREGADO NADA)
      const itemsInCart = itemsUserCart.length > 0
        ? itemsUserCart?.find((e) => e.id === newProd.id)
        : state.prodCart?.find((e) => e.id === newProd.id)

      //console.log('ESTO DEVUELVE SI ENCONTRO EL MISMO ID(itemsInCart)', itemsInCart)


      if (newProd.quantity < newProd.in_Stock) {
        const cartItems = itemsUserCart.length > 0
          ? itemsInCart//<---- SI EL USUARIO TIENE ALGO EN SU CARRITO  
            ? itemsUserCart.map((it) => it.id === newProd.id
              ? { ...it, quantity: it.quantity + 1 } : it)
            : [...itemsUserCart, { ...newProd, quantity: 1 }]

          : itemsInCart //<---- SI EL USUARIO NO TIENE NADA EN SU CARRITO      
            ? state.prodCart.map((it) => it.id === newProd.id
              ? { ...it, quantity: it.quantity + 1 } : it)
            : [...state.prodCart, { ...newProd, quantity: 1 }];

        //console.log('ASI QUEDA EL VALOR SI SE ENCONTRO', cartItems)


        if (!isLogin) {//SI ESTA LOGEADO QUE NO CARGUE EL LOCALSTORAGE SOLO VA A USAR EL ESTADO
          localStorage.setItem('prodCart', JSON.stringify(cartItems));//lo borro dentro del handle
        }

        return {
          ...state,
          prodCart: cartItems,
        };

      } else {
        return {
          ...state,
        };
      }
    case 'REMOVE_PROD_FROM_CART':
      const prodToRemove = state.prodCart?.find((e) => e.id === action.payload.id);
      const cartUpgrade = prodToRemove?.quantity > 1
        ? state.prodCart.map((it) => it.id === prodToRemove.id
          ? { ...it, quantity: it.quantity - 1 }
          : it)
        : state.prodCart.filter((upgrade) => upgrade.id !== action.payload.id);

      let confirmDelete = action.payload.quantity === 1 ? window.confirm("Do you are sure, to delet all cart?") : true

      if (confirmDelete) {
        cartUpgrade.length > 0
          ? localStorage.setItem('prodCart', JSON.stringify(cartUpgrade))
          : localStorage.setItem('prodCart', JSON.stringify([]))

        return {
          ...state,
          prodCart: cartUpgrade,
        };
      } else {
        return {
          ...state,
        };
      }
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
        cu: action.payload,
      };
    case 'GET_CART_USER':
      const cartUserAux = action.payload;
      if (cartUserAux.length > 0) {
        const itemsUserCart = [];
        cartUserAux.map((e) => itemsUserCart.push({
          id: e.ProductId.id,
          name: e.ProductId.name,
          image: e.ProductId.image,
          price: e.ProductId.price,
          brand: e.ProductId.brand,
          in_Stock: e.ProductId.in_Stock,
          CategoryId: e.ProductId.CategoryId,
          rating: e.ProductId.rating,
          quantity: e.quantity,
        }))
        console.log('SE LEVANTA EL CARRITO DEL USER Y SE DEBE DE ACTUALIZAR PRODCART')
        localStorage.removeItem('prodCart')
        return {
          ...state,
          cartUserPRUEBA: cartUserAux,
          prodCart: itemsUserCart,
        }
      } else {
        return {
          ...state,
          cartUserPRUEBA: action.payload,
        };

      }

    case 'CLEAR_CART_USER':
      return {
        ...state,
        cartUserPRUEBA: [],
      };
    case 'POST_REVIEW':
      return {
        ...state,
      };
    case 'GET_REVIEW':
      return {
        ...state,
        review: action.payload
      };
    // case "GET_CART_USER":
    //   return {
    //     ...state,
    //     pruebaUsers: action.payload,
    //   };
    default:
      return state;
  }
}
export default rootReducer;