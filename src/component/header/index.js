import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap'
import Logo from '../../images/Italien.png'
import '../../App.css';

class Header extends Component {
    render() {
        const {isAuth, userData}=this.props;
        const pagename = "Pizza Zalupizza";
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
                                <span className="nav-link active green-text" aria-current="page">Current Page Name</span>
                            </li>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="input-group">
                              <input type="text" className="form-control" placeholder="Search for Pizza" aria-label="Recipient's username" />
                              <div className="input-group-append">
                                <Link className="btn btn-outline-secondary green-text" type="button" to="/search">Search</Link>
                              </div>
                            </div>
                        </ul>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {!isAuth ?
                            <>
                            <div className="nav-item">
                                <Link className="btn-main btn-cart round" type="button" to="/login"></Link>
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
                                <Link className="btn-main btn-cart round" type="button" to="/cart"></Link>
                            </div>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link green-text" to="/profile">{userData.userName}'s Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link green-text" to="/logout">Logout</Link>
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
        userData: stateRedux.userReducer ? stateRedux.userReducer.userData : null
    }
}

export default connect(mapState)(Header);