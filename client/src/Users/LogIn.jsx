import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Style from "./logIn.module.css"

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className={Style.LogIn} onClick={() => loginWithRedirect()}>Login</button>;
};
