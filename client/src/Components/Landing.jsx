import React, { useEffect } from "react";
import { getAllProducts, getAllCategories, Log } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Carousel1 from "./Carousel";
import WhatsNew from "./whatsnew";
import Carousel from "./CardsFront";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Users/Profile";

import styles from "./Landing.module.css";

export default function Landing() {
  // const navigate= useNavigate();
  const dispatch = useDispatch();
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  
  const perfil= useSelector((state) => state.cu)
  const info= perfil.filter(e=> e.email===user?.email)

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());

    if(isAuthenticated) {
      dispatch(Log(user))
    }

  }, [dispatch, isAuthenticated, user])

  return (
    <>
      <Carousel1 />
      <Carousel />
      <WhatsNew />
        <div class={styles.body}>
          <nav class={styles.side}>
            <ul>
              <li>
              {isAuthenticated ? (
                  <a href="/profile">
                  Profile
                    <span>
                      <i class="fa fa-map-marker"></i>
                    </span>
                  </a>
                ) : (
                  <button onClick={() => loginWithRedirect()} className={styles.btn}>
                    LOG IN
                  </button>
                )
              }
              </li>
              <li>
                 {/* <a href="/cart">  */}
                 <Link to={`/cart`}>        
                  Buy
                  </Link> 
                  <span>
                    <i class="fa fa-compass"></i>
                  </span>
                {/* </a> */}
              </li>
            </ul>
          </nav>
        </div>
    </>
  );
}