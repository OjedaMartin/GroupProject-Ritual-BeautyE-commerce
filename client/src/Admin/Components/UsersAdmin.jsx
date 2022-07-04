import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import style from "./Styles/UsersAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import {getAllUsers } from "../../redux/actions/index"
import { ImCross } from "react-icons/im"
import { MdPassword } from "react-icons/md"
import { GiUpgrade } from "react-icons/gi"
import SearchBarAdmin from "./SearchBarAdmin"







function UsersAdmin(){

const dispatch = useDispatch()
const users = useSelector((state)=> state.users)
const searchedUsers = useSelector((state)=> state.searchedUsers)
const [estado, setEstado] = useState({  
  category: "",
});

useEffect(() => {
dispatch(getAllUsers());
}, [dispatch]);

//<SearchBarAdmin/>


  return (
          <div className={style.container}>
            

            <div className={style.secondaryBar}>
              
                   

            </div>
            <div className={style.cardinfo}>
                
                <p>Id</p>
                <p>User</p>
                <p>Email</p>
                <p>Membership</p>
                
                
            </div>
            {searchedUsers.length>0? searchedUsers.map((e=> {
                return(
                        <div className={style.card} key={e.id}>
                            <button className={style.DelBtn}><ImCross/></button>
                            <button className={style.ModBtn}><GiUpgrade/></button>
                            <button className={style.stockBtn}><MdPassword/></button>
                            <p className={style.element}>{e.id}</p>
                            <p className={style.element}>{e.name}</p>
                            <p className={style.element}>{e.email}</p>
                            <p className={style.element}>{e.membership}</p>
                                            
                        </div>)})) : <>----</>}



            {users.map(e=> {
                return(
                        <div className={style.card} key={e.id}>
                            <button className={style.DelBtn}><ImCross/></button>
                            <button className={style.ModBtn}><GiUpgrade/></button>
                            <button className={style.stockBtn}><MdPassword/></button>
                            <p className={style.element}>{e.id}</p>
                            <p className={style.element}>{e.name}</p>
                            <p className={style.element}>{e.email}</p>
                            <p className={style.element}>{e.membership}</p>
                                            
                        </div>




                )
            } )
          }

            
          </div>
  );
};

export default UsersAdmin;