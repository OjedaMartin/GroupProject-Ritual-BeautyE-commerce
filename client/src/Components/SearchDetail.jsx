import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {
    getProductName,
    orderProducts,
    getFilterProducts
} from '../redux/actions';
import ProductCard from './ProductCard'
import Pagination from './Pagination';



export default function SearchDetail() {
    const dispatch = useDispatch();
    const { brand } = useParams()
    const { name } = useParams()
    const productsResults = useSelector((state) => state.products);
    const allCategories = useSelector((state) => state.categories);//Agregar llamado a Actions y el estado a redux
    const [currentPage, setCurrentPage] = useState(1);//pag selected

    useEffect(() => {
        dispatch(getProductName(name));//levantar la action que me modifica el estado segun name, pero ver si esto pisa el searchbar
    }, [dispatch, name, brand]);
    

    const setOrder = (e) => {
        dispatch(orderProducts(e.target.value));//LEVANTAR LA RUTA DE ORDENAMIENTO EN ACTIONS Y HACER REDUCER!
        setCurrentPage(1);
    };
    const handleFilterByProducts = (e) => {//FILTRAR POR: CATEGORIA O SUBCATEGORIA, PRODUCTO NUEVO, VER OTRAS OPCIONES. VER DESDE EL BACK!
        dispatch(getFilterProducts(e.target.value));
        setCurrentPage(1);
    };


    const paginated = (pageNum) => {
        setCurrentPage(pageNum)
    };


    //AGREGAR LOADING HASTA QUE SE CARGUE TODO EL ESTADO -->products
    return (
        <Fragment>
            <main>
                <div>  {/* LEVANTAR LA CATEGORIA SI ES QUE VIENE DESDE AHI, O LEVANTAR LO QUE SE HAYA BUSCADO*/}
                </div>
                <div>
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
                        {}

                    </select>
                </div>

                <section>
                    {productsResults.map((e) => {
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
                </section>

                <div>
                    <Pagination
                        productsPerPage//CUANTOS PRODUCTOS POR PAGINA? SERIA EL .LENGTH DE CADA ARREGLO DE LA API? VER!
                        amountProducts={productsResults.length} //VER SI EL PAGINADO ES .NEXT O COMO LO TRAERIA
                        paginated={paginated}
                    />
                </div>
            </main>
        </Fragment>

    )

}