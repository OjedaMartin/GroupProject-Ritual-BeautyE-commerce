import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./profile.module.css"
export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
console.log("profile",user, isAuthenticated, isLoading)
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className={s.div}>
        <img classNmae={s.profile} src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};