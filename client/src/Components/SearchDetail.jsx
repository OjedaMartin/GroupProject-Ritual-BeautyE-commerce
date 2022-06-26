import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";//, useLocation 
import {
    orderProducts,
    getAllProducts,
    getProductName,
    getAllCategories,
    getfilterCategories,
    getfilterBrand
} from '../redux/actions';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import loaderEyes from '../images/loaderEyes.gif';
import Header from './Header';
import Footer from './footer';
import './SearchDetail.css'



export default function SearchDetail() {
    const [, setReloadState] = useState(false);
    const { name } = useParams();
    const { category } = useParams();
    const dispatch = useDispatch();

    //let location = useLocation();
    //const { brand } = useParams();
    //console.log(location)

    console.log('NAMEEE', name)
    console.log('CATEGORY', category)

    const productsResults = useSelector((state) => state.products);
    //const allCategories = useSelector((state) => state.categories);//Agregar llamado a Actions y el estado a redux

    const [currentPage, setCurrentPage] = useState(1);//pag selected
    const [productsPerPage] = useState(10);//cards x page
    const indexOfLastCard = currentPage * productsPerPage;
    const indexOfFirstCard = indexOfLastCard - productsPerPage;
    const currentProducts = productsResults?.slice(indexOfFirstCard, indexOfLastCard);

    const productsBrand = [];

    currentProducts.map((e) => productsBrand.push(e.brand));
    console.log('productsBrand',productsBrand);

    const newData = [...new Set(productsBrand)];
    console.log('newData',newData);


   
    
    //console.log('currentProducts',currentProducts);
    useEffect(() => {
        dispatch(getAllCategories());
        if (name) { dispatch(getProductName(name)) }
        else if (category) { dispatch(getfilterCategories(category)) }
    }, [dispatch, name, category]);
    // if(location.pathname === `/SearchDetail/search/${name}`){
    //if (location.pathname === `/SearchDetail/collection/${category}`){

    const objectCat = {
        cat140006: 'Makeup',
        cat150006: 'Skincare',
        cat130042: 'Tools & Brushes',
        cat130038: 'Hair',
    }
    //console.log('acaaa--->', objectCat[category])
    const setOrder = (e) => {
        dispatch(orderProducts(e.target.value));
        setReloadState((state) => !state);
        setCurrentPage(1);
    };

    const handleFilterByCategory = (e) => {
        dispatch(getfilterCategories(e.target.value));
        setReloadState((state) => !state);
        setCurrentPage(1);
    }

    const handleFilterByBrand = (e) => {
        dispatch(getfilterBrand(e.target.value));
        setCurrentPage(1);
        setReloadState((state) => !state);
    }

    const paginated = (pageNum) => {
        setCurrentPage(pageNum)
    };
    //currentProducts.length > 0
    if (currentProducts.length > 0 || name || category) {
        if (currentProducts.length === 0) {
            getAllProducts()
        }
        return (
            <Fragment>
                <Header />
                <main className="division">
                    <div className="params">
                        {name ? <h1>{name}</h1> : <h1>{objectCat[category]}</h1>}
                    </div>
                    <div className="selectors">
                        <select onChange={setOrder} name='Type'>
                            <option value='Sort'>Sort</option>
                            <option value='High to Low Price'>High to Low</option>
                            <option value='Low to High Price'>Low to High</option>
                            <option value='Sort by rated'>Top Rated</option>
                        </select>
                        <select onChange={handleFilterByCategory} name='Type'>
                            <option>Category</option>
                            <option value='cat140006'>Makeup</option>
                            <option value='cat150006'>Skincare</option>
                            <option value='cat130042'>Tools & Brushes</option>
                            <option value='cat130038'>Hair</option>
                        </select>
                        <select onChange={handleFilterByBrand}>
                            <option value='brand'>Brand</option>
                            {newData?.map((e) => (
                                <option key={e} value={e}>{e}</option>
                            ))}
                        </select>
                    </div>
                    <section>
                        {currentProducts.map((e) => {
                            return (
                                <Fragment key={e.name}>
                                    <div>
                                        <ProductCard
                                            key={e.parameteregory}
                                            name={e.name}
                                            brand={e.brand}
                                            image={e.image}
                                            price={e.price}
                                            id={e.id}
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
                <Footer />
            </Fragment>

        )
    } else {
        return (
            <div> <img alt="loading" src={loaderEyes} /></div>
        )
    }


}