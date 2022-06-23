import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getAllProducts } from "../redux/actions";
// import SearchBar from "./SearchBar";
export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);
  return (
    <div>
      {products &&
        products.map((e) => {
          return (
            <NavLink
              styles={{ textDecoration: "none" }}
              key={e.id}
              to={`/details/${e.id}`}
            >
              {e.id}
              <img src={e.image} width="200px" height="200px" />
              {e.name}
              {e.rating}
            </NavLink>
          );
        })}
    </div>
  );
}
