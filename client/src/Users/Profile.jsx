import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { getUserByName, Log } from "../redux/actions";
import { useDispatch } from "react-redux";
import { Settings } from "./Settings";
import { MyOrders } from "./Orders";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
const Profile = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading } = useAuth0();
  // const[profile,setProfile] = useState("");
  // if (isAuthenticated){ dispatch(getUser(user),{
  //   name:user.name,
  //   email:user.email,
  //   image:user.picture
  // })}

  async function postAndGet(user){
    console.log("user", user)
    await dispatch(Log(user))
    dispatch(getUserByName(user.name))
  }
  
    if (isAuthenticated) { 
      postAndGet(user)   
    
    ;
  }
  
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <br/>
        <label>Name:</label>
        <h2>{user.name}</h2>
        <label>Email:</label>
        <h2>{user.email}</h2>
        <div  >
          <Link exact to="/user/settings">
            <Button >
              Settings
            </Button>
          </Link>

          <Link  exact to="/user/myorders">
          <Button >
              My Orders
              </Button>
            </Link>
        </div>
      </div>
    )
  );
};

export default Profile;