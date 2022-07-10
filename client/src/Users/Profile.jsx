import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByName, Log } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Settings } from "./Settings";
import s from"./profile.module.css"
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  const name = useSelector((state) => state.cu)
  console.log(name)
  const data= name.filter(e=> e.email===user?.email)
  console.log(data)
  const dispatch = useDispatch();
  // const auth0Email = perfil?.email
  // const userLogged = perfil?.length > 0 ? perfil?.find(e => (e.email === auth0Email)) : false;
  useEffect(() => {
    dispatch(getUserByName(user?.name));
  }, [dispatch]);
  
  return (
      <div>
      {name && name.length ? (
        <div>
          <img src={name.image} alt={name.name} />
          <br />
          <label>Name:</label>
          <h2>{data[0]?.name}</h2>
          <label>Email:</label>
          <h2>{data[0]?.email}</h2>
          <label>Membership:</label>
          <h2>{data[0]?.membership}</h2>
          <h2>{name?.membership}</h2>

          <div>
            <Link exact to="/user/settings">
              <Button>Settings</Button>
            </Link>

            <Link exact to="/user/myorders">
              <Button>My Orders</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={s.loading}>
          <div className={s.item}></div>
          <div className={s.item}></div>
          <div className={s.item}></div>
          <div className={s.item}></div>
        </div>
      )}
    </div>
  );
};

export default Profile;