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
  cartUser: [],
  testStatus: [],
  //-------------
  searchedUsers: [],
  allreviews: [],
  orderByUser: []
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
    case "PUT_CATEGORY":
      return {
        ...state,
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
      case " GET_ORDER_BY_ID":
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
    // case "COMPLETE_CART":
    //   const thisItem = action.payload;
    //   const itemInclud =
    //     state.prodCart.length > 0
    //       ?
    //       state.prodCart.find((element) => element.id === thisItem.id)
    //       :
    //       undefined
    //   if (thisItem.quantity < thisItem.in_Stock){

    //   }

    //     return {
    //       ...state,
    //       //testStatus:
    //     };
    case 'ADD_PROD_TO_CART':
      const newProd = action.payload;
      const isLogin = action.login;
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////  
      console.log('newProd----> ESTE ES EL PRODUCTO A AGREGAR', newProd)
      ////////////////////////////////////////////////////////////////////////////////////////////////////////////  

      //---------------------------------------SI EL USUARIO TRAE CART, LO TENGO QUE COMPLETAR CON EL ID
      const itemsUserCart = [];

      if (state.cartUser.length > 0 && state.prodCart.length === 0) {
        state.cartUser.map((e) => itemsUserCart.push({
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


      //---------------------------------------ACA YA ME DOY CUENTA SI TENGO UN CARRITO DEL USUARIO O NO (EL UNICO CASO SERIA QUE EL USUARIO NO TENGO UN CARRITO Y QUE EL LOCALSTORAGE A LA HORA DE LOGEARSE ESTE VACIO, ES DECIR QUE EL USUARIO NO HAYA AGREGADO NADA)
      const itemsInCart = itemsUserCart.length > 0
        ? itemsUserCart?.find((e) => e.id === newProd.id)
        : state.prodCart?.find((e) => e.id === newProd.id)


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
        cartUser: [],
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

        if (state.prodCart.length > 0) {
          let arrCart = [];
          for (let i = 0; i < cartUserAux.length; i++) {
            for (let j = 0; j < state.prodCart.length; j++) {
              if (cartUserAux[i].id === state.prodCart[j].id) {
                arrCart.push({ ...cartUserAux[i], quantity: cartUserAux[i].quantity + state.prodCart[j].quantity })
              } else {
                arrCart.push(cartUserAux[i]);
                arrCart.push(state.prodCart[j]);
              }
            }
          }
          localStorage.removeItem('prodCart')
          return {//SI EL CARRITO DEL USER ESTA LLENO Y EL LOCALSTORAGE ESTA LLENO
            ...state,
            cartUser: arrCart,
            prodCart: arrCart,
          }
        }

        localStorage.removeItem('prodCart')
        return {//CARRITO LLENO PERO LOCALSTORAGE ESTA VACIO
          ...state,
          cartUser: itemsUserCart,
          prodCart: itemsUserCart,
        }


      } else {
        return {
          ...state,
        };
      }
    case 'CLEAR_CART_USER':
      return {
        ...state,
        cartUser: [],

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
    case 'POST_ORDER':
      return {
        ...state,
      };
    case 'PUT_FOOTER_SUBSCRIPTION':
      return {
        ...state,
      };
    case "GET_ORDER_BY_USER1":
      return {
        ...state,
        orderByUser: action.payload
      };
      case 'GET_ORDER_BY_USER':
        return {
          ...state,
          users: action.payload
        };
        case 'GET_ORDER_BY_ID':
          return {
            ...state,
            users: action.payload
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