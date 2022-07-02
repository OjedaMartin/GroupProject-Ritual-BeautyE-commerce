import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button, NavLink } from "reactstrap";
import s from "./Menues.module.css"
import { Link } from "react-router-dom";
const Menu = () => {
  const { user } = useAuth0();
console.log("user", user)
  return (
    <div>
      <ul className={s.Menu}>
        <img className={s.pic} src={user.picture} alt={user.name} />
<br/>

{user.name}
<br/>
{user.email}
        <div  >
          <Link exact to="/user/settings">
            <Button >
              Profile
            </Button>
          </Link>

          <Link  exact to="/user/myorders">
          <Button >
              My Orders
              </Button>
            </Link>
        </div>
      </ul>
    </div>
  );
};

export default Menu;
