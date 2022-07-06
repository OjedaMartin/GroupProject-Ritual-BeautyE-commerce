import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./profile.module.css"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUser } from "../redux/actions";
export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const actualUser = useSelector((store) => store.actualUser);
  console.log('actualUser----->', actualUser)
  console.log("user---->", user)
  console.log('isAuthenticated---->', isAuthenticated)
  console.log('isLoading---->', isLoading)
  useEffect(() => {
    if (isAuthenticated) {
      const datos={name:"guille1",email:"tomas@gmail.com"}
      dispatch(createUser(datos));
      // noRepeat = true;
      // dispatch(getUser(user.email));
      window.localStorage.setItem("userEmail", user.email);
      if (window.localStorage.url && window.localStorage.url !== window.location.pathname) {
        navigate(window.localStorage.url)
      }
      window.localStorage.removeItem("url")
    }
  }, [navigate, user, isAuthenticated, dispatch]);
  if (isLoading) {
    return <div>Loading...</div>;
  }



  return (
    isAuthenticated && (<Link Link exact to="/user">

      <img className={s.pic} src={user.picture} alt={user.name} />
      {/* <h2>{user.name}</h2>
    <p>{user.email}</p> */}
    </Link>

    )
  );
};