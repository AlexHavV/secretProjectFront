import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import store from '../../../store';
import ProductCartBlock from './template';
import'../../../../node_modules/bootstrap/dist/css/bootstrap.css'
import searchCartProductsData from '../../../action/cart';

class CartPage extends Component {
    onConfirmPurchaseButtonPressed() {
        console.log("AAAAAAAA");
    }

    componentDidMount() {
        this.a = searchCartProductsData(this.props.cartItems);
    }

    render() {
        const {cartItems}=this.props;
        console.log("Cart render", this.props);
        //console.log("list", typeof(productList), productList, productList.length, Object.keys(productList).length);
        //console.log("list elem 0", typeof(productList[0]), productList[0], productList.length, Object.keys(productList).length);
        
        let res = cartItems.map((x) => ProductCartBlock(x, this.a.filter(y => y.id == x.id)[0]));
        console.log(res);

        return (
            <div id="productLineupDiv" className="row m-4">
                    { 
                        res
                    }
            </div>
        )
    }
}

function mapState(stateRedux) {
    //console.log("stateRedux map", stateRedux);
    return {
        pageNumber: stateRedux.productReducer.pageNumber, 
        searchParam: stateRedux.productReducer.searchParam, 
        productList: stateRedux.productReducer.productList, 
        cartItems: stateRedux.productReducer.cartItems
    }
}

export default connect(mapState)(CartPage);