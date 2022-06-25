import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from "react-router-dom";
import {
    getProductName,
    orderProducts,
    getCategory,
    getFilterProducts,
    getfilterCategories
} from '../redux/actions';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import loaderEyes from '../images/loaderEyes.gif';
import Header from './Header';
import Footer from './footer';
import './SearchDetail.css'



export default function SearchDetail() {
    const [,setReloadState] = useState(false);
    const {name} = useParams();   
    const {category} = useParams();
    const dispatch = useDispatch();
    let location = useLocation();
    //const { brand } = useParams();
    console.log(location)
    console.log(name)
    console.log(category)
    
    
    
    
    const productsResults = useSelector((state) => state.products);
    const allCategories = useSelector((state) => state.categories);//Agregar llamado a Actions y el estado a redux
    
    const [currentPage, setCurrentPage] = useState(1);//pag selected
    const [productsPerPage] = useState(10);//cards x page
    const indexOfLastCard = currentPage * productsPerPage;
    const indexOfFirstCard = indexOfLastCard - productsPerPage;
    const currentProducts = productsResults?.slice(indexOfFirstCard, indexOfLastCard);

    useEffect(() => {
        if(location.pathname === `/SearchDetail/search/${name}`){
        dispatch(getProductName(name));//levantar la action que me modifica el estado segun name, pero ver si esto pisa el searchbar
        } else if (location.pathname === `/SearchDetail/collection/${category}`){
        dispatch(getfilterCategories(category));
        }
        dispatch(getCategory());
    }, [dispatch, name, category]);

//brand

    const setOrder = (e) => {
        dispatch(orderProducts(e.target.value));//LEVANTAR LA RUTA DE ORDENAMIENTO EN ACTIONS Y HACER REDUCER!
        setReloadState((state)=>!state);
        setCurrentPage(1);
    };
    const handleFilterByProducts = (e) => {//FILTRAR POR: CATEGORIA O SUBCATEGORIA, PRODUCTO NUEVO, VER OTRAS OPCIONES. VER DESDE EL BACK!
        dispatch(getFilterProducts(e.target.value));
        setReloadState((state)=>!state);//depende de como venga en el back
        setCurrentPage(1);
    };

    const handleFilterByCategory = (e) => {
       // dispatch(filterByCategories(e.target.value));
        setReloadState((state)=>!state);
        setCurrentPage(1);
    }


    const paginated = (pageNum) => {
        setCurrentPage(pageNum)
    };


    if (currentProducts.length > 0) {
        return (
            <Fragment>
                <Header/>
                <main className="division">
                     {/*  <div> </div>LEVANTAR LA CATEGORIA SI ES QUE VIENE DESDE AHI, O LEVANTAR LO QUE SE HAYA BUSCADO*/}
                    <div className="selectors">
                        <select onChange={setOrder} name='Type'>
                            <option value='Sort by name'>Sort by price</option>
                            <option value='High to Low Price'>High to Low</option>
                            <option value='Low to High Price'>Low to High</option>
                        </select>
                        <select onChange={setOrder} name='Type'>
                            <option value='Sort by rated'>Sort by Top Rated</option>
                        </select>
                        <select onChange={handleFilterByProducts} name='Type'>
                            <option value='Filter by brand'>Filter by brand</option>
    
                            {/* ACA LEVANTARIA EL FILTRADO DE CATEGORIA O BRAND, O PODRIAMOS HACER UN RANGO DE PRECIO PERO NO ES OBLIGATORIO */}
    
                        </select>
                        <select onChange={ handleFilterByCategory} name='Type'>
                            <option value='Filter by Category'>
                                Category
                            </option>
                            {allCategories?.map((categories) => (
                                <option
                                    key={categories.name}
                                    value={categories.name}>
                                    {categories.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <section>
                        {currentProducts.map((e) => {
                            return (
                                <Fragment key={e.name}>
                                    <div>
                                        <ProductCard
                                            key={e.idcategory}
                                            name={e.name}
                                            brand={e.brand}
                                            image={e.image}
                                            price={e.price}
                                        />
                                    </div>
                                </Fragment>
                            )
                        })}
                     <div>
                        <Pagination
                            productsPerPage={productsPerPage}
                            amountProducts={productsResults.length}
                            paginated={paginated}
                        />
                    </div>        
                                     
                    </section>
                   
                </main>
                <Footer/>
            </Fragment>
    
        )        
    } else {
        return (
            <div> <img alt="loading" src={loaderEyes}/></div>
        )
    }
    

}