import React from "react";
import { Routes, Route } from "react-router-dom";
import style from "./Admin.module.css";
import HeaderAdmin from "./Components/HeaderAdmin";
import NavBarAdmin from "./Components/NavBarAdmin";
import DashBoardAdmin from "./Components/DashBoardAdmin";
import UsersAdmin from "./Components/UsersAdmin";
import ProductsAdmin from "./Components/ProductsAdmin";
import OrdersAdmin from "./Components/OrdersAdmin";
import ProductCreateAdmin from "./Components/ProductCreateAdmin";
import ProductModifyAdmin from "./Components/ProductModifyAdmin";
import CategoriesAdmin from "./Components/CategoriesAdmin";
import ReviewsAdmin from "./Components/ReviewsAdmin";



function Admin() {
    return (
                <div>
                    <HeaderAdmin/>
                    <NavBarAdmin/>
                    <div className={style.mainContainer}>
                        <Routes>

                            <Route exact path={"/"} element={<DashBoardAdmin/>}/>

                            <Route path={"/users"} element={<UsersAdmin/>}/>

                            <Route path={"/reviews"} element={<ReviewsAdmin/>}/>

                            <Route path={"/products"} element={<ProductsAdmin/>}/>
                            <Route exact path={"/products/create"} element={<ProductCreateAdmin/>}/>
                            <Route exact path={"/products/modify/:id"} element={<ProductModifyAdmin/>}/>

                            <Route exact path={"/categories"} element={<CategoriesAdmin/>}/>

                            <Route path={"/orders"} element={<OrdersAdmin/>}/>                          

                        </Routes>
                    </div>
                </div>
            
        
        
    );   
};



export default Admin;