import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import store from '../../../store';
import ProductCartBlock from './template';
import'../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import {сartGetProduct, сartRemoveProduct, confirmOrder} from '../../../action/cart';

class CartPage extends Component {
    
    getProducts() {
        сartGetProduct(this.props.userData.id, store.dispatch);
    }

    async onConfirmPurchaseButtonPressed() {
        if(this.props.cartItems.length > 0) {    
            console.log("Confirmed order for client " + this.props.userData.id);
            await confirmOrder(this.props.userData.id);
            сartGetProduct(this.props.userData.id, store.dispatch);
        }  
        
    }

    async onRemoveCartItemButtonPressed(id) {
        await сartRemoveProduct(this.props.userData.id, id);
        сartGetProduct(this.props.userData.id, store.dispatch);
    }

    componentDidMount() {
        console.log("Mount");
        this.getProducts();
    }

    render() {
        const {cartItems}=this.props;
        console.log("Cart render", cartItems);
        //console.log("list", typeof(productList), productList, productList.length, Object.keys(productList).length);
        //console.log("list elem 0", typeof(productList[0]), productList[0], productList.length, Object.keys(productList).length);
        let res = cartItems.length > 0 ? cartItems.map((x) => ProductCartBlock(x, this.onRemoveCartItemButtonPressed.bind(this))) :<div style={{display:'flex', alignItems:'center', justifyContent:'center', fontSize:'45px'}}>No products in cart!</div>;
        return (<>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'20px'}}>
                {cartItems.length > 0 ? <button className="btn-confirm-order mb-2" onClick={this.onConfirmPurchaseButtonPressed.bind(this)}>Confirm order!</button> : <div></div>}
            </div>
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
        cartItems: stateRedux.cartReducer.cartItems,
        userData: stateRedux.userReducer.userData
    }
}

export default connect(mapState)(CartPage);