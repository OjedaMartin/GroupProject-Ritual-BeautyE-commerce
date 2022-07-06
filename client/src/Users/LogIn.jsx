// import { useState } from "react";
// import {useNavigate} from "react-router-dom"
// import {useDispatch} from "react-redux"
// import { Log } from "../redux/actions";
// export function Login() {
//   const navigate= useNavigate();
//   const dispatch= useDispatch();
//   const [datos, setDatos] = useState({
//     email: "",
//     password: "",
//   });
//   const handleInputChange = (e) => {
//     let { name, value } = e.target;
//     let newData = { ...datos, [name]: value };
//     setDatos(newData);
//   };
//   function handleSubmit(e){
//     e.preventDefault();
//     if (!e.target.checkValidity()) {
//       console.log("not send");
//     } else {
//       console.log(datos);
//       dispatch(Log(datos))
//       navigate("/")
//     }
//   };
//---------------------------------

  import React from "react";
  import { useAuth0 } from "@auth0/auth0-react";
  import Style from "./logIn.module.css"
  import {useDispatch} from "react-redux"
  import { createUser } from "../redux/actions";
  
  
  export default function LoginButton () {
    const dispatch = useDispatch()
    const { loginWithRedirect } = useAuth0();
    const { user, isAuthenticated, isLoading } = useAuth0();
    console.log('user---->',user)
    console.log('isAuthenticated---->',isAuthenticated)
    console.log('isLoading---->',isLoading)
    if (isAuthenticated) {
  
      dispatch(createUser(user)) 
  
    }
    return <button className={Style.LogIn} onClick={() => loginWithRedirect()}>Login</button>;
  };
//-----------------------------------
//   return (
//     <section className="h-100">
//       <div className="container h-100">
//         <div className="row justify-content-sm-center h-100">
//           <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
//             <div className="card shadow-lg">
//               <div className="card-body p-5">
//                 <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
//                 <form
//                   onSubmit={e=>handleSubmit(e)}
//                   className="needs-validation"
//                   noValidate={true}
//                   autoComplete="off"
//                 >
//                   <div className="mb-3">
//                     <label className="mb-2 text-muted" htmlFor="email">
//                       email
//                     </label>
//                     <input
//                       id="email"
//                       type="text"
//                       className="form-control"
//                       name="email"
//                       onChange={handleInputChange}
//                       value={datos.email}
//                       required
//                       autoFocus
//                     />
//                     <div className="invalid-feedback">Usuario inválido</div>
//                   </div>
//                   <div className="mb-3">
//                     <div className="mb-2 w-100">
//                       <label className="text-muted" htmlFor="password">
//                         Contraseña
//                       </label>
//                       <a href="/" className="float-end">
//                         ¿Olvidaste tu contraseña?
//                       </a>
//                     </div>
//                     <input
//                       onChange={handleInputChange}
//                       value={datos.password}
//                       id="password"
//                       type="password"
//                       className="form-control"
//                       name="password"
//                       required
//                     />
//                     <div className="invalid-feedback">
//                       Contraseña es requirida
//                     </div>
//                   </div>
//                   <div className="d-flex align-items-center">
//                     <div className="form-check">
//                       <input
//                         type="checkbox"
//                         name="remember"
//                         id="remember"
//                         className="form-check-input"
//                       />
//                       <label htmlFor="remember" className="form-check-label">
//                         Recordarme
//                       </label>
//                     </div>
//                     <button type="submit" className="btn btn-primary ms-auto">
//                       <i className="bi bi-box-arrow-in-right"></i> Ingresar
//                     </button>
//                   </div>
//                 </form>
//               </div>
//               <div className="card-footer py-3 border-0">
//                 <div className="text-center">
//                   Todos los derechos reservados &copy; 2021
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Login;
