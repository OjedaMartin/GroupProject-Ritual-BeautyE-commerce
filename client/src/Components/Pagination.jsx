import React, { Fragment } from 'react';


export default function Pagination({ productsPerPage, amountProducts, paginated }) {
    const pagesNumbers = [];

    for (let i = 1; i <= Math.ceil(amountProducts / productsPerPage); i++) {
        pagesNumbers.push(i);//DEFINO LA CANTIDAD DE PAGINAS (NUMEROS) QUE VOY A TENER, DEPENDE DE COMO LO TRAIGO DEL BACK ES COMO VOY A OBTENER ESTA INFO
    };//OPCION NUMERICA / OPCION SIGUIENTE O FLECHA--> CREO QUE ES LA MAS INDICADA, YA QUE EL USUARIO NO DEBERIA DE ENCONTRAR SU PRODUCTO EN LA ULTIMA PAGINA, EN TEORIA

    return (
        <Fragment>
            <nav>
                <ul>
                    {pagesNumbers.map((page) => {
                        return (
                            <button key={page} onClick={() => paginated(page)}>{page}</button>//POR CADA NUMERO DEL ARREGLO pagesNumbers VOY A GREAR UN BOTON CON EL VALOR NUMERICO Y SETEAR EL PAGINADO EN ESE VALOR, PARA QUE ME RENDERICE DESDE ESA PAGINA
                        )
                    })}
                </ul>
            </nav>
        </Fragment>
    )
}