import React, { useState, useEffect, Fragment, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {
    orderProducts,
    getProductName,
    getAllCategories,
    getfilterCategories,
    getfilterBrand,
    getAllProducts,
    addProdToCart, removeProdFromCart, addCartToBack, clearcartUser
} from '../redux/actions';
import swal from 'sweetalert'
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import loaderEyes2prueba from '../images/loaderEyes2prueba.gif';
import ClassesSearchDetail from './SearchDetail.module.css'
import { useAuth0 } from '@auth0/auth0-react';


export default function SearchDetail() {
    const [, setReloadState] = useState(false);
    const { name } = useParams();
    const { category } = useParams();
    //const { allProducts } = useParams();
    const { isAuthenticated, user } = useAuth0();

    const dispatch = useDispatch();

    const productsResults = useSelector((state) => state.products);
    const productsAuxResults = useSelector((state) => state.productsAux);
    const allCategories = useSelector((state) => state.category);
    const prodCart = useSelector((state) => state.prodCart);
    const userCart = useSelector((state) => state.cartUser);
    const newArrToDb = useSelector((state) => state.arrToSendDB)

    const [currentPage, setCurrentPage] = useState(1);//pag selected
    const [arrItems, setArrItems] = useState([])
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


    //-----------------------------------------------------------------------------------------------

    useEffect(() => {
        const cartArrItems = prodCart.map(product => ({
            id: product.id,
            cant: product.quantity
        }))

        setArrItems([...cartArrItems])

    }, [prodCart])

    useEffect(() => {
        dispatch(getAllCategories());
        if (name) { dispatch(getProductName(name)) }
        else if (category) {
            dispatch(getfilterCategories(category));
        }

    }, [name, category]);

    //else if (allProducts) { dispatch(getAllProducts()) }
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


    const onHandleAddCart = (objeToAdd, inStock, quantityDATA) => {
        if (quantityDATA === 0) swal(`Added to cart`);

        if (quantityDATA < inStock) {
            dispatch(addProdToCart(objeToAdd, isAuthenticated));
        } else {
            swal(`Insufficient stock in: ${name}`);
        }
    }

    const onHandleRemoveCart = (productId, quantityDATA) => {

        if (quantityDATA === 1) {
            swal(`Removed of cart`);
        }
        dispatch(removeProdFromCart({
            id: productId,
            quantity: quantityDATA,
        }));

        if (isAuthenticated) {
            if (quantityDATA === 1) {
                dispatch(clearcartUser())
            }
        }
    }

    const onHandleAddtoDb = ( newORupdateProd ) => {
        if (isAuthenticated) {
            console.log('ESTO ES newORupdateProd-->',newORupdateProd)
            const itemInclud =
                prodCart.length > 0
                    ?
                    prodCart.find((element) => element.id === newORupdateProd.id)
                    :
                    undefined
            if (newORupdateProd.quantity < newORupdateProd.in_Stock) {
                const cartItems = itemInclud !== undefined
                    ?
                    prodCart.map((it) => it.id === newORupdateProd.id
                        ?
                        { ...it, quantity: it.quantity + 1 } : it)
                    :
                    [...prodCart, { ...newORupdateProd, quantity: 1 }]

                //setArrItems(cartItems)
                
                console.log('ESTO ES LO QUE MANDO AL BACK-->',cartItems)
                dispatch(addCartToBack({ productsId: cartItems, email: user.email }))
            }
            //primero tengo que ver si lo tiene que agregar o sumar

        }
    }
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
                            <h1>{catNameAux ? catNameAux[0].name.slice(0, 30) + "..." : name ? name.slice(0, 30) + "..." : 'Products'}</h1>
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
                                {allCategories?.map((e, i) => (<option key={i} value={e.id} className={ClassesSearchDetail.select}>{e.name}</option>))}
                            </select>
                        </div>
                    </div>
                    <section className={ClassesSearchDetail.sectionFlex}>
                        {currentProducts.map((product) => {
                            return (
                                <Fragment key={product.id}>
                                    <div>
                                        <ProductCard
                                            key={product.id}
                                            name={product.name}
                                            brand={product.brand}
                                            image={product.image}
                                            price={product.discount?  Math.ceil(product.price - product.price * (product.discount / 100)) : product.price }
                                            discount={product.discount? product.discount : 0}
                                            id={product.id}
                                            in_Stock={product.in_Stock}
                                            CategoryId={product.CategoryId}
                                            rating={product.rating}
                                            onHandleAdd={onHandleAddCart}
                                            onHandleRemove={onHandleRemoveCart}
                                            onHandleAddtoDb={onHandleAddtoDb}
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

