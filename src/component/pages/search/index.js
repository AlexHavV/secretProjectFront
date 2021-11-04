import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { addToCart, searchProducts } from '../../../action/search';
import { useHistory } from "react-router-dom";
import store from '../../../store';
import ProductBlock from './template';
import'../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../App.css';

class SearchPage extends Component {
    onCartButtonPressed(id) {
        if(!this.props.isAuth) {
            return;
        }
        console.log(this.props.userData.id, id);
        addToCart(this.props.userData.id, id);
    }

    onNextPageButtonPressed() {
        console.log("Next!");
        var page = this.props.pageNumber + 1;
        searchProducts(page, this.props.searchParam, store.dispatch);
    }

    onPrevPageButtonPressed() {
        console.log("Prev!");
        var page = this.props.pageNumber > 0 ? this.props.pageNumber - 1: this.props.pageNumber;
        searchProducts(page, this.props.searchParam, store.dispatch);
    }
    
    componentDidMount(page = 0) {
        searchProducts(page, this.props.searchParam, store.dispatch);
    }

    render() {
        const {pageNumber, searchParam, productList, cartItems, userData}=this.props;
        //console.log("Products render", this.props);
        //console.log("list", typeof(productList), productList, productList.length, Object.keys(productList).length);
        //console.log("list elem 0", typeof(productList[0]), productList[0], productList.length, Object.keys(productList).length);

        let res = productList.map((x) => ProductBlock(x, this.onCartButtonPressed.bind(this)));
        //console.log(res);

        return (<>
            <nav style={{marginTop: 20 + 'px', marginLeft: 10 + 'px'}}>
              <ul className="pagination">
                <li className="page-item">
                  <a className="btn btn-outline-secondary" style={{width: 45 + 'px', height: 35 + 'px'}} aria-label="Previous" onClick={this.onPrevPageButtonPressed.bind(this)}>
                    <span aria-hidden="true" >&laquo;</span>
                  </a>
                </li>
                <li className="page-item" style={{marginLeft: 5 + 'px'}}>
                  <a className="btn btn-outline-secondary" style={{width: 45 + 'px', height: 35 + 'px'}} aria-label="Next" onClick={this.onNextPageButtonPressed.bind(this)}>
                    <span aria-hidden="true" >&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
            <div id="productLineupDiv" className="row m-4">
                    { 
                        res
                    }
            </div>

            
            </>
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
        userData: stateRedux.userReducer ? stateRedux.userReducer.userData : null,
    }
}

export default connect(mapState)(SearchPage);