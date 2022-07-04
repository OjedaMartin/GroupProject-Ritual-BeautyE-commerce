import React, { useState } from 'react';
import { createUser } from '../redux/actions';
import {useDispatch}from "react-redux"
import {useNavigate} from "react-router-dom"

export default function Register() {
const dispatch = useDispatch();
const navigate= useNavigate();
    const [input, setInput] = useState({
        name: '',
        email: '',
        password: '',
        // role: ''
    });

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!e.target.value) {
            console.log("not send");
            alert("Please complete all fields")
          } else {
        dispatch(createUser(input))
        setInput({
            name: '',
            email: '',
            password: '',
            // role: '',
        })
        navigate("/")
    }
    }

    return(
        <div>
            <h1>REGISTER</h1>
            {/* <form onSubmit={(e) => handleSubmit(e)}>
                <label>NAME: </label>
                <input type="text" name="name" value={input.name} onChange={(e) => handleChange(e)} />
                <label>EMAIL: </label>
                <input type="email" name="email" value={input.email} onChange={(e) => handleChange(e)} />
                <label>PASSWORD: </label>
                <input type="password" name="password" value={input.password} onChange={(e) => handleChange(e)} />
                <label>ROLE: </label>
                <input type="text" name="role" value={input.role} onChange={(e) => handleChange(e)} />
                <input type="submit" />
            </form>
             */}
             <section className="h-100">
      <div className="container h-100">
        <div className="row justify-content-sm-center h-100">
          <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
            <div className="card shadow-lg">
              <div className="card-body p-5">
                <h1 className="fs-4 card-title fw-bold mb-4">Register</h1>
                <form
                  onSubmit={e=>handleSubmit(e)}
                  className="needs-validation"
                  noValidate={true}
                  autoComplete="off"
                >
                    <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">
                    Name
                    </label>
                    <input
                     
                      type="text"
                      className="form-control"

                      name="name"
                      onChange={handleChange}
                      value={input.name}
                      required
                      autoFocus
                    />
                    
                  </div>
                  <div className="mb-3">
                    <label className="mb-2 text-muted" htmlFor="email">
                    Email
                    </label>
                    <input
                      id="email"
                      type="text"
                      className="form-control"
                      name="email"
                      onChange={handleChange}
                      value={input.email}
                      required
                      autoFocus
                    />
                    
                  </div>
                  <div className="mb-3">
                    <div className="mb-2 w-100">
                      <label className="text-muted" htmlFor="password">
                        Password
                      </label>
                    
                    </div>
                    <input
                      onChange={handleChange}
                      value={input.password}
                      id="password"
                      type="password"
                      className="form-control"
                      name="password"
                      required
                    />
                    <div className="invalid-feedback">
                      Password is required
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                
                    <button type="submit" className="btn btn-primary ms-auto">
                      <i className="bi bi-box-arrow-in-right"></i> Register
                    </button>
                  </div>
                </form>
              </div>
              <div className="card-footer py-3 border-0">
                <div className="text-center">
                  Todos los derechos reservados &copy; 2021
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    )
}