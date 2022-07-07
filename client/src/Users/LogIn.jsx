
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { useDispatch } from "react-redux";
import { Log } from "../redux/actions";

const Login= () => {
  const dispatch = useDispatch();
  const { loginWithRedirect, isAuthenticated, user} = useAuth0();
if (isAuthenticated){dispatch(Log(user),{
  name:user.name,
  image: user.picture,
  email:user.email
})
} return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default Login