import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByName } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import s from "./profile.module.css";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const Profile = () => {
  // const {  user } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)
  const perfil = useSelector((state) => state.cu)
  console.log(perfil)
  const dispatch = useDispatch();
  // const auth0Email = perfil?.email
  // const userLogged = perfil?.length > 0 ? perfil?.find(e => (e.email === auth0Email)) : false;
  useEffect(() => {
    dispatch(getUserByName());
  }, [dispatch]);
  // useEffect(() => {
  //   dispatch(getUserByName())
  //   dispatch(authenticate(userLogged))
  //   dispatch(getOrdersByEmail(user?.email));
  // }, [dispatch])
  // const dispatch = useDispatch();

  // const[profile,setProfile] = useState("");
  // if (isAuthenticated){ dispatch(getUser(user),{
  //   name:user.name,
  //   email:user.email,
  //   image:user.picture
  // })}

  // async function postAndGet(user){
  //   console.log("user", user)
  //   await dispatch(Log(user))

  //   dispatch(getUserByName(user.name))
  // }

  //   ;
  // }

  // console.log(,"perfil")

  // const perfil= useSelector((state) => state.profile) }
  // console.log(perfil, "perfil");

  return (
    // <div>
    //   {perfil && perfil.length ? (
    //     <div>
    //       <img src={perfil.image} alt={perfil.name} />
    //       <br />
    //       <label>Name:</label>
    //       <h2>{perfil[0].name}</h2>
    //       <label>Email:</label>
    //       <h2>{perfil[0].email}</h2>
    //       <label>Membership:</label>

    //       <h2>{perfil[0].membership}</h2>

    //       <div>
    //         <Link exact to="/user/settings">
    //           <Button>Settings</Button>
    //         </Link>

    //         <Link exact to="/user/myorders">
    //           <Button>My Orders</Button>
    //         </Link>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className={s.loading}>
    //       <div className={s.item}></div>
    //       <div className={s.item}></div>
    //       <div className={s.item}></div>
    //       <div className={s.item}></div>
    //     </div>
    //   )}
    // </div>
    <div></div>
  );
};

export default Profile;
