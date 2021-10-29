import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import store from '../../../store';
import ProductCartBlock from './template';
import'../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import {сartGetProduct, сartRemoveProduct} from '../../../action/cart';

class CartPage extends Component {
    getProducts() {
        //return {
        //    "a": 1,
        //    "b": 2
        //}
        return сartGetProduct(this.props.userData.id);
    }

    onConfirmPurchaseButtonPressed() {
        console.log("AAAAAAAA", this.props.userData.id);
    }

    onRemoveCartItemButtonPressed(id) {
        сartRemoveProduct(this.props.userData.id, id);
        this.a = this.getProducts();
    }

    componentDidMount() {
        console.log("Mount");
    }

    render() {
        this.a = this.getProducts();
        console.log("Cart render", this.a);
        //console.log("list", typeof(productList), productList, productList.length, Object.keys(productList).length);
        //console.log("list elem 0", typeof(productList[0]), productList[0], productList.length, Object.keys(productList).length);
        
        //let res = cartItems.map((x) => ProductCartBlock(x, cartItems.filter(y => y.id == x.id)[0]));
        //console.log(res);

        return (
            <div id="productLineupDiv" className="row m-4">
                    {/* { 
                        res
                    } */}
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
        cartItems: stateRedux.productReducer.cartItems,
        userData: stateRedux.userReducer.userData
    }
}

export default connect(mapState)(CartPage);