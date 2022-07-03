import React, { Fragment } from 'react';

// import s from "./Pagination.module.css"
export default function Pagination({ productsPerPage, amountProducts, paginated }) {
    const pagesNumbers = [];

    for (let i = 1; i <= Math.ceil(amountProducts / productsPerPage); i++) {
        pagesNumbers.push(i);
    };

    return (
        <Fragment>
            <div>
            <nav>
                <ul>
                    {pagesNumbers.map((page) => {
                        return (
                            <button key={page} onClick={() => paginated(page)}>{page}</button>
                        )
                    })}
                </ul>
            </nav>
            </div>
        </Fragment>
    )
}