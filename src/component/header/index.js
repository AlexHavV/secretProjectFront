import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap'
import Logo from '../../images/Italien.png'
import Cart from '../../images/Cart.png'
import Door from '../../images/Door.png'
import '../../App.css';
import setAuthToken from '../../utils/auth-token'
import { searchProducts } from '../../action/search'
import store from '../../store'

class Header extends Component {
    logout() {
        setAuthToken();
        this.props.dispatch({ type:"LOGOUT"});
    }

    onInputChange() {
        if(document.getElementById("flexSwitch").checked) this.onSearchTriggered();
    }

    onSearchTriggered() {
        var input = document.getElementById("searchInput");
        searchProducts(0, input.value , store.dispatch );
    }

    render() {
        const {isAuth, userData, searchParam}=this.props;
        const pagename = "Pizza Alienizza";
        console.log("Header loaded",this.props);
        return (
            <nav className="navbar navbar-expand-lg main-color" style={{height:175+"px"}}>
                <div className="container">
                    <div style={{display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column'}}>
                        <img src={Logo} style={{width:125+"px"}}/>
                        <Link className="navbar-brand green-text" style={{margin:'auto'}} to="/">
                            {pagename}
                        </Link>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {/* <span className="nav-link active green-text" aria-current="page">Current Page Name</span> */}
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="input-group">
                                <div className="input-group" style={{paddingLeft: 30 + 'px'}}>
                                <div className="form-check form-switch">
                                    <input className="form-check-input" type="checkbox" id="flexSwitch"/>
                                    <label className="form-check-label green-text" for="flexSwitch" >Search on Change</label>
                                </div>
                                </div>
                                <div className="form-check"> 
                                    <input id="searchInput" type="text" className="form-control" placeholder="Search for Pizza" onChange={this.onInputChange.bind(this)}/>
                                </div>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-secondary green-text" type="button" onClick={this.onSearchTriggered.bind(this)} >Search</button>
                                </div>
                            </div>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {!isAuth ?
                            <>
                            <div className="nav-item">
                                <Link className="btn-main btn-cart round padding-top-5" type="button" to="/login">
                                    <img src={Cart} style={{width:35+"px"}}/>
                                </Link>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="btn-nav-link green-text" to="/login">Profile</Link>
                                </li>
                            </ul>
                            </>
                            :
                            <>
                            <div className="nav-item">
                                <Link className="btn-main btn-cart round padding-top-5" type="button" to="/cart">
                                    <img src={Cart} style={{width:35+"px"}}/>
                                </Link>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link green-text" to="/profile">{userData.userName}'s Profile</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="btn-main btn-cart round padding-top-5" to="/login" onClick={this.logout.bind(this)}>
                                   <img src={Door} style={{width:35+"px"}}/>
                                </Link>
                                </li>
                            </ul>
                            </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

function mapState(stateRedux) {
    //console.log("stateRedux", stateRedux);
    return {
        isAuth: stateRedux.userReducer ? stateRedux.userReducer.isAuth : null,
        userData: stateRedux.userReducer ? stateRedux.userReducer.userData : null,
        searchParam: stateRedux.productReducer.searchParam
    }
}

export default connect(mapState)(Header);
