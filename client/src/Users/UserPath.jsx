import React from "react";
import "./index.css";
//import { useState } from "react";
import { Settings } from "./Settings";
import { Orders } from "./Orders";
import UserMenu from "./UserMenu";
import { useLocation } from "react-router-dom";

export default function UserPath() {
  const location = useLocation();

  return (
    <div id="menu">
      <UserMenu />
      <div>
        {(location.pathname === "/user/settings" && <Settings />) ||
          (location.pathname === "/user/myorders" && <Orders />)}
      </div>
    </div>
  );
}