import React, { Component } from 'react';

import SalesChart from '../containers/SalesChart';
import SalesTable from '../containers/SalesTable';

const RetailSales = () => {
    return (
        <div className="col-md-9" id="retail_sales">
            <div className="container">
                <div className="row">
                    <SalesChart />
                    <SalesTable />
                </div>
            </div>
        </div>
    )
};

export default RetailSales;