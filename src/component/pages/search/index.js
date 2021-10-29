import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { addToCart, searchProducts } from '../../../action/search';
import { useHistory } from "react-router-dom";
import store from '../../../store';
import ProductBlock from './template';
import'../../../../node_modules/bootstrap/dist/css/bootstrap.css'

class SearchPage extends Component {
    onCartButtonPressed(id) {
        
        if(!this.props.isAuth) {
            //history.push("/login");
            return;
        }
        console.log(this.props.userData.id, id);
        addToCart(this.props.userData.id, id);
        
    }

    componentDidMount(page = 0) {
        searchProducts(page, "", store.dispatch);
    }

    render() {
        const {pageNumber, searchParam, productList, cartItems, userData}=this.props;
        //console.log("Products render", this.props);
        //console.log("list", typeof(productList), productList, productList.length, Object.keys(productList).length);
        //console.log("list elem 0", typeof(productList[0]), productList[0], productList.length, Object.keys(productList).length);

        let res = productList.map((x) => ProductBlock(x, this.onCartButtonPressed.bind(this)));
        //console.log(res);

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
        cartItems: stateRedux.productReducer.cartItems,
        isAuth: stateRedux.userReducer ? stateRedux.userReducer.isAuth : null,
        userData: stateRedux.userReducer ? stateRedux.userReducer.userData : null
    }
}

export default connect(mapState)(SearchPage);