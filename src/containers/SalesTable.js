import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

const WEEK_ENDING = 'WEEK ENDING';
const RETAIL_SALES = 'RETAIL SALES';
const WHOLESALE_SALES = 'WHOLESALE SALES';
const UNITS_SOLD = 'UNITS SOLD';
const RETAILER_MARGIN = 'RETAILER MARGIN';

class SalesTable extends Component {
    constructor(props) {
        super(props);

        const { productData } = props;
        const sales = _.map(productData, 'sales');

        const weekAscSales = _.sortByOrder(_.flatten(sales), 'weekEnding', 'asc');
        const weekDescSales = _.sortByOrder(_.flatten(sales), 'weekEnding', 'desc');

        const retailSalesAsc = _.sortByOrder(_.flatten(sales), 'retailSales', 'asc');
        const retailSalesDesc = _.sortByOrder(_.flatten(sales), 'retailSales', 'desc');

        const wholesaleSalesAsc = _.sortByOrder(_.flatten(sales), 'wholesaleSales', 'asc');
        const wholesaleSalesDesc = _.sortByOrder(_.flatten(sales), 'wholesaleSales', 'desc');

        const unitsSoldAsc = _.sortByOrder(_.flatten(sales), 'unitsSold', 'asc');
        const unitsSoldDesc = _.sortByOrder(_.flatten(sales), 'unitsSold', 'desc');

        const retailerMarginAsc = _.sortByOrder(_.flatten(sales), 'retailerMargin', 'asc');
        const retailerMarginDesc = _.sortByOrder(_.flatten(sales), 'retailerMargin', 'desc');

        this.state = {
            sortedData: weekAscSales,// Chosen randomly

            weekAscSales: weekAscSales,
            weekDescSales: weekDescSales,

            retailSalesAsc: retailSalesAsc,
            retailSalesDesc: retailSalesDesc,

            wholesaleSalesAsc: wholesaleSalesAsc,
            wholesaleSalesDesc: wholesaleSalesDesc,

            unitsSoldAsc: unitsSoldAsc,
            unitsSoldDesc: unitsSoldDesc,

            retailerMarginAsc: retailerMarginAsc,
            retailerMarginDesc: retailerMarginDesc
        };

        this.renderTable = this.renderTable.bind(this);
        this.sortAscending = this.sortAscending.bind(this);
        this.sortDescending = this.sortDescending.bind(this);
    }

    sortAscending(e) {
        const sortingOrder = e.target.id;

        switch (sortingOrder) {
            case 'weekAsc':
                this.setState({ sortedData: this.state.weekAscSales });
                break;
            case 'retailSalesAsc':
                this.setState({ sortedData: this.state.retailSalesAsc });
                break;
            case 'wholesaleSalesAsc':
                this.setState({ sortedData: this.state.wholesaleSalesAsc });
                break;
            case 'unitsSoldAsc':
                this.setState({ sortedData: this.state.unitsSoldAsc });
                break;
            case 'retailerMarginAsc':
                this.setState({ sortedData: this.state.retailerMarginAsc });
                break;
        }
    }
    
    sortDescending(e) {
        const sortingOrder = e.target.id;

        switch (sortingOrder) {
            case 'weekDesc':
                this.setState({ sortedData: this.state.weekDescSales });
                break;
            case 'retailSalesDesc':
                this.setState({ sortedData: this.state.retailSalesDesc });
                break;
            case 'wholesaleSalesDesc':
                this.setState({ sortedData: this.state.wholesaleSalesDesc });
                break;
            case 'unitsSoldDesc':
                this.setState({ sortedData: this.state.unitsSoldDesc });
                break;
            case 'retailerMarginDesc':
                this.setState({ sortedData: this.state.retailerMarginDesc });
                break;
        }
    }

    renderTable(sales) {
        return _.map(sales, sale => {
            return (
                <tr>
                    <td>{sale.weekEnding}</td>
                    <td>{sale.retailSales}</td>
                    <td>{sale.wholesaleSales}</td>
                    <td>{sale.unitsSold}</td>
                    <td>{sale.retailerMargin}</td>
                </tr>
            )}
        );
    }

    render() {
        return (
            <div className="col-md-9" id="sales_table">
                <table className="table table-bordered table-striped">
                    <thead>
                    <tr>
                        <th scope="col">{WEEK_ENDING}
                            <a onClick={this.sortAscending} id="weekAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="weekDesc" id="weekDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{RETAIL_SALES}
                            <a onClick={this.sortAscending} id="retailSalesAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="retailSalesDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{WHOLESALE_SALES}
                            <a onClick={this.sortAscending} id="wholesaleSalesAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="wholesaleSalesDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{UNITS_SOLD}
                            <a onClick={this.sortAscending} id="unitsSoldAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="unitsSoldDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                        <th scope="col">{RETAILER_MARGIN}
                            <a onClick={this.sortAscending} id="retailerMarginAsc" className="glyphicon glyphicon-triangle-top"></a>
                            <a onClick={this.sortDescending} id="retailerMarginDesc" className="glyphicon glyphicon-triangle-bottom"></a>
                        </th>
                    </tr>
                    </thead>
                    <tbody>{this.renderTable(this.state.sortedData)}</tbody>
                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        productData : state.productData
    };
}

export default connect(mapStateToProps)(SalesTable);