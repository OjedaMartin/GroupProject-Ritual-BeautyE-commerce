import React, { useEffect, useState } from 'react';
import { NavLink, Link } from "react-router-dom";
import style from "./Styles/UsersAdmin.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, banUser, upgradeToAdmin } from "../../redux/actions/index"
import { ImCross } from "react-icons/im"
import { GiUpgrade } from "react-icons/gi"
import SearchBarAdmin from "./SearchBarAdmin"
import swal from 'sweetalert'







function UsersAdmin(){

const dispatch = useDispatch()

const [email, setEmail] = useState({
  email: ""
})

useEffect(() => {
  dispatch(getAllUsers());
}, [dispatch,email]);

const users = useSelector((state)=> state.users)
const searchedUsers = useSelector((state)=> state.searchedUser)
console.log("sds",searchedUsers)


 async function handleBan(e){
 
  const putInfo = {email: e.email}
 swal({
  title: "Are you sure?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willBan) => {
  if (willBan) {
     dispatch(banUser(putInfo))
    swal("the user has been banned!", {
      icon: "success",
    });
    
    
    dispatch(getAllUsers());
    
  } else {
    swal("the user remains safe");
  }
});

}
async function handleAdmin(e){
  const putInfo = {email: e.email}
  
  swal({
    title: "Are you sure?",
    text: "Once upgraded the user will be able to access the administration panel",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willUpgrade) => {
    if (willUpgrade) {
       dispatch(upgradeToAdmin(putInfo))
      swal("the user has been upgraded!", {
        icon: "success",
      });
      
      
      dispatch(getAllUsers());
      
    } else {
      swal("the user remains the same!");
    }
  });
}

  return (
          <div className={style.container}>
            

            <div className={style.secondaryBar}>
             <SearchBarAdmin/>
                   

            </div>
            {searchedUsers? Object.values(searchedUsers).map((e=> {
                return(
                        <div>
                          {e}
                           </div>
                                            
                        )})) : <>----</>}

            <div className={style.cardinfo}>
                
                
                <p>User</p>
                <p>Email</p>
                <p>Membership</p>
                
                
            </div>


            {users.map(e=> {
                return(
                        <div className={style.card} key={e.id}>
                            <button className={style.DelBtn} email={e.email} onClick={() => handleBan(e)}><ImCross/></button>
                            <button className={style.ModBtn} email={e.email} onClick={() => handleAdmin(e)}><GiUpgrade/></button>
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
//
export default UsersAdmin