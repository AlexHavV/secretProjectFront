import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import bootstrap from 'bootstrap'

class Header extends Component {
    render() {
        const {isAuth, username}=this.props;
        const pagename = "Pizza Zalupizza";

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        {pagename}
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/users">Users</Link>
                            </li>
                        </ul>
                        {!isAuth ?
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/register">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">Login</Link>
                                </li>
                            </ul>
                            :
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/profile">{username}</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/logout">Exit</Link>
                                </li>
                            </ul>
                        }

                    </div>
                </div>
            </nav>
        )
    }
}

function mapState(stateRedux) {
    return {
        isAuth: stateRedux.auth ? stateRedux.auth.isAuth : null,
        userData: stateRedux.auth ? stateRedux.auth.userData : null
    }
}

export default connect(mapState)(Header);
