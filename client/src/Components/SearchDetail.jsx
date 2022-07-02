import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {
    orderProducts,
    getProductName,
    getAllCategories,
    getfilterCategories,
    getfilterBrand    
} from '../redux/actions';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import loaderEyes from '../images/loaderEyes.gif';
import ClassesSearchDetail from './SearchDetail.module.css'



export default function SearchDetail() {
    const [, setReloadState] = useState(false);
    const { name } = useParams();
    const { category } = useParams();
    const dispatch = useDispatch();

    const productsResults = useSelector((state) => state.products);
    const productsAuxResults = useSelector((state) => state.productsAux);
    const allCategories = useSelector((state) => state.categories);//Agregar llamado a Actions y el estado a redux
    console.log('allCategories',allCategories)
    const [currentPage, setCurrentPage] = useState(1);//pag selected
    const [productsPerPage] = useState(9);//cards x page
    const indexOfLastCard = currentPage * productsPerPage;
    const indexOfFirstCard = indexOfLastCard - productsPerPage;
    const currentProducts = productsResults?.slice(indexOfFirstCard, indexOfLastCard);
    //-----------------------------ME GUARDO TODAS LAS BRANDS Y ELIMINO LAS REPETIDAS--------
    const productsBrand = [];
    productsAuxResults?.map((e) => productsBrand.push(e.brand));
    const newData = [...new Set(productsBrand)];
    //console.log('newData',newData)
    
    //---------------------------------------------------------------------------------------
    
    useEffect(() => {

        dispatch(getAllCategories());
        if (name) { dispatch(getProductName(name)) }
        else if (category) { dispatch(getfilterCategories(category)) }

    }, [dispatch, name, category]);

    const objectCat = {
        cat140006: 'Makeup',
        cat150006: 'Skincare',
        cat130042: 'Tools & Brushes',
        cat130038: 'Hair',
    }

    const setOrder = (e) => {
        dispatch(orderProducts(e.target.value));
        setReloadState((state) => !state);
        setCurrentPage(1);
    };

    // const handleFilterByCategory = (e) => {
    //     dispatch(getfilterCategories(e.target.value));
    //     setReloadState((state) => !state);
    //     setCurrentPage(1);
    // }

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
                <main className={ClassesSearchDetail.division}>
                    <div className={ClassesSearchDetail.todo}>
                        <div className={ClassesSearchDetail.params}>
                            {name ? <h1>{name}</h1> : <h1>{objectCat[category]}</h1>}
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
                
            </Fragment>

        )
    } else {
        return (
            <div> <img alt="loading" src={loaderEyes} /></div>
        )
    }


}