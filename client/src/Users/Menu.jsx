import React from "react";
import { Link} from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <ul className="menuLink">
        <li>
          <Link exact to="/user/settings" >Profile</Link>
        </li>
        <li>
          <Link exact to="/user/myorders">My Orders</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;