import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import _ from "lodash";
ReactChartkick.addAdapter(Chart);

class SalesChart extends Component {
    render() {
        const { productData } = this.props;
        const sales = _.map(productData, 'sales');

        const dates = _.map(_.flatten(sales), 'weekEnding');
        const retailSales = _.map(_.flatten(sales), 'retailSales');
        const retailSalesDates = _.zipObject(dates, retailSales);

        const wholesaleSales = _.map(_.flatten(sales), 'wholesaleSales');
        const wholesaleSalesDates = _.zipObject(dates, wholesaleSales);

        const data = [
            {"name":"Retail Sales", "data": retailSalesDates},
            {"name":"Wholesale Sales", "data": wholesaleSalesDates}
        ];

        return (
            <div className="col-md-9" id="sales_chart">
                <LineChart data={data} legend="bottom"/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productData : state.productData
    };
}

export default connect(mapStateToProps)(SalesChart);