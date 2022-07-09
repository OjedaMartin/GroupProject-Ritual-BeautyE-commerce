import React, { useEffect, useState } from "react";
import { getAllProducts, getAllCategories, Log, getUserByName } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Carousel1 from "./Carousel";
import WhatsNew from "./whatsnew";
import Carousel from "./CardsFront";
import { useAuth0 } from "@auth0/auth0-react";
import { CircularProgress } from "@mui/material";
import s from "./Landing.module.css";
export default function Landing() {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loginWithRedirect } = useAuth0();
  const perfil= useSelector((state) => state.cu) 
  console.log(user)
  console.log(perfil)
  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
    dispatch(getUserByName(perfil?.name))
    console.log(perfil?.name)
  }, [dispatch,perfil?.name]);
  (() => {
    if (isAuthenticated) {
      dispatch(Log(perfil?.email))
    console.log(perfil?.name)

    }})()
    const [load, setLoad] = useState(true)

  setTimeout(function () {
    setLoad(false)
  }, 500)
  return (
    <>
   
      <Carousel1 />
      <Carousel />
      <WhatsNew />
      {
      load ?
          <CircularProgress color="inherit" style={{ position: 'absolute', top: '50%', left: '50%' }} />
      :
<div>
{isAuthenticated ? (
        <div class={s.body}>
          <nav class={s.side}>
            <ul>
              <li>
                <a href="/profile">
                  {perfil[0]}
                 
                  <span>
                    <i class="fa fa-map-marker"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  Buy
                  <span>
                    <i class="fa fa-compass"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div class={s.body}>
          <nav class={s.side}>
            <ul>
              <li>
                <a href="/login">
                  {" "}
                  Login
                  <span>
                    <i class="fa fa-map-marker"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="/cart">
                  Buy
                  <span>
                    <i class="fa fa-compass"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
</div>
}
    </>
  );
}
