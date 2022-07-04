import React, { Fragment } from 'react';
import Classes from './Pagination.module.css'

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
                                <th key={page + 1} className={Classes.sectionFlex}>
                                    <button className={Classes.btn} key={page} onClick={() => paginated(page)}>{page}</button>
                                </th>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </Fragment>
    )
}