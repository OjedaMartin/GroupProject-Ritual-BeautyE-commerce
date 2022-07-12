import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {
    orderProducts,
    getProductName,
    getAllCategories,
    getfilterCategories,
    getfilterBrand,
    getAllProducts
} from '../redux/actions';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import loaderEyes2prueba from '../images/loaderEyes2prueba.gif';
import ClassesSearchDetail from './SearchDetail.module.css'


export default function SearchDetail() {
    const [, setReloadState] = useState(false);
    const { name } = useParams();
    const { category } = useParams();
    const { allProducts } = useParams();

    const dispatch = useDispatch();

    const productsResults = useSelector((state) => state.products);
    const productsAuxResults = useSelector((state) => state.productsAux);
    const allCategories = useSelector((state) => state.category);

    const [currentPage, setCurrentPage] = useState(1);//pag selected
    const [productsPerPage] = useState(9);//cards x page
    const indexOfLastCard = currentPage * productsPerPage;
    const indexOfFirstCard = indexOfLastCard - productsPerPage;
    const currentProducts = productsResults?.slice(indexOfFirstCard, indexOfLastCard);
    //-----------------------------ME GUARDO TODAS LAS BRANDS Y ELIMINO LAS REPETIDAS--------
    const productsBrand = [];
    productsAuxResults?.map((e) => productsBrand.push(e.brand));
    const newData = [...new Set(productsBrand)];

    //---------------------------------------------------------------------------------------
    const catNameAux = category ? allCategories.filter((e) => e.id === category) : false;
    //---------------------------------------------------------------------------------------    
    // const prodCart = useSelector((state) => state.prodCart);
    //------------------------------------------------------------------------------------------
    const productNotFound = productsAuxResults?.slice(0, 4);


    //----------------------------------------------------------------------------------------------
    useEffect(() => {
        dispatch(getAllCategories());
        if (name) { dispatch(getProductName(name)) }
        else if (category) {
            dispatch(getfilterCategories(category));
        }
        else if (allProducts) { dispatch(getAllProducts()) }

    }, [name, category, allProducts]);

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
        setReloadState((state) => !state);
        setCurrentPage(1);
    }

    const paginated = (pageNum) => {
        setCurrentPage(pageNum)
    };

    if (currentProducts.length > 0) {
        return (
            <Fragment>
                <div className={ClassesSearchDetail.paginate}>
                    <Pagination
                        productsPerPage={productsPerPage}
                        amountProducts={productsResults.length}
                        paginated={paginated}
                    />
                </div>
                <main className={ClassesSearchDetail.division}>

                    <div className={ClassesSearchDetail.todo}>
                        <div className={ClassesSearchDetail.params}>
                            <h1>{catNameAux ? catNameAux[0].name.slice(0,30)+"..." : name ? name.slice(0,30)+"..." : 'Products'}</h1>
                        </div>
                        <div className={ClassesSearchDetail.selectors}>
                            <select onChange={setOrder} name='Type' className={ClassesSearchDetail.select} >
                                <option value='Sort' className={ClassesSearchDetail.select}>Sort</option>
                                <option value='High to Low Price' className={ClassesSearchDetail.select}>High to Low</option>
                                <option value='Low to High Price' className={ClassesSearchDetail.select}>Low to High</option>
                                <option value='Sort by rated' className={ClassesSearchDetail.select}>Top Rated</option>
                            </select>
                            <select onChange={handleFilterByBrand} name='BrandType' className={ClassesSearchDetail.select}>
                                <option value='brand'>Brand</option>
                                {newData?.map((e) => (
                                    <option key={e} value={e} className={ClassesSearchDetail.select}>{e}</option>

                                ))}
                            </select>
                            <select onChange={handleFilterByCategory} name='CatType' className={ClassesSearchDetail.select}>
                                <option value='category'>Category</option>
                                {allCategories?.map((e) => (<option key={e.name} value={e.id} className={ClassesSearchDetail.select}>{e.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <section className={ClassesSearchDetail.sectionFlex}>
                        {currentProducts.map((e) => {
                            return (
                                <Fragment key={e.id}>
                                    <div>
                                        <ProductCard
                                            key={e.id}
                                            name={e.name}
                                            brand={e.brand}
                                            image={e.image}
                                            price={e.price}
                                            id={e.id}
                                            in_Stock={e.in_Stock}
                                            CategoryId={e.CategoryId}
                                            rating={e.rating}
                                        />
                                    </div>
                                </Fragment>
                            )
                        })}


                    </section>

                </main>

            </Fragment>

        )
    } else if (name) {
        return (
            <div >
                <Fragment>
                    <div className={ClassesSearchDetail.container3}>
                        <h1>
                            {`SORRY, NO RESULTS`}
                        </h1>
                        <h4>
                            {`Your search for "${name}" did not match any results. Please modify your search terms and try again.`}
                        </h4>
                    </div>
                    <section className={ClassesSearchDetail.noFindName}>
                        {productNotFound?.map((e) => {
                            return (
                                <Fragment key={e.id}>
                                    <div>
                                        <ProductCard
                                            key={e.id}
                                            name={e.name}
                                            brand={e.brand}
                                            image={e.image}
                                            price={e.price}
                                            id={e.id}
                                            in_Stock={e.in_Stock}
                                            CategoryId={e.CategoryId}
                                            rating={e.rating}
                                        />
                                    </div>
                                </Fragment>
                            )
                        })}
                    </section>
                </Fragment>
            </div>
        )
    } else {
        <div className={ClassesSearchDetail.loading}>
            <img alt="loading" src={loaderEyes2prueba} />
        </div>
    }
}

