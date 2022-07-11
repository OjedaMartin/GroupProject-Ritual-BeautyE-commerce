
import React, {useState} from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaShoppingCart } from "react-icons/fa";

import Style from "./Header.module.css";
// import { Login } from '../Users/LogIn';
import { Logout } from "../Users/LogOut";

//--------------CART-USER--------------
import { useDispatch, useSelector } from 'react-redux';
import { addCartToBack } from '../redux/actions'


export default function Header() {
  const { isAuthenticated, user } = useAuth0();
  //console.log("header", isAuthenticated);

  //----------------------------------------MANTIENE ACTUALIZADO EL CART DEL USER EN TEORIA xD----------------------------------------
  const [confirmCondition, setConfirmCondition] = useState(false);
  const dispatch = useDispatch();
  const prodCart = useSelector((state) => state.prodCart);
  const userCart = useSelector((state) => state.cartUserPRUEBA);

  if (isAuthenticated && !confirmCondition && userCart.length === 0) {
        if (prodCart.length > 0) {
        setConfirmCondition(true)
        const porductsOfLocalStorage = [];
        prodCart.map((e) => porductsOfLocalStorage.push({ id: e.id, cant: e.quantity }));
        dispatch(addCartToBack({ productsId: porductsOfLocalStorage, email: user.email }));
        localStorage.removeItem('prodCart')
      }
    }

  //-----------------------------------------------------------------------------------------------------------------------------------


  return (
    <div className={Style.main}>
      <div className={Style.header}>
        {/*<Link to="/create" ><button className={Style.btnH}> New Product </button></Link>*/}
        <SearchBar />
        <h1 className={Style.title}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            RITUAL
          </Link>
        </h1>
        <div className={Style.contIcons}>
          {isAuthenticated ? (
            <>
              <Logout />
            </>
          ) : (
            <>
              <Link to="/cart">
                <button className={Style.iconCart}>
                  <FaShoppingCart />
                </button>
              </Link>

            </>
          )}
        </div>
      </div>
      <nav className={Style.Navbar}>
        <Link to="/SearchDetail/collection/cat140006">
          <button className={Style.subT}>Makeup</button>
        </Link>
        <Link to="/SearchDetail/collection/cat150006">
          <button className={Style.subT}>Skincare</button>
        </Link>
        <Link to="/SearchDetail/collection/cat130042">
          <button className={Style.subT}>Tools & Brushes</button>
        </Link>
        <Link to="/SearchDetail/collection/cat130038">
          <button className={Style.subT}>Hair</button>
        </Link>
        {/* <Link to="/SearchDetail/"><button className='subT'>Sale</button></Link> */}
      </nav>
    </div>
  );
}
