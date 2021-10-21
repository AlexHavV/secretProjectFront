import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { searchProducts } from '../../../action/search';
import productService from '../../../service/productService';
import store from '../../../store';
import httpConfig from '../../../utils/http-config';
import { getServerImagesDirUrl } from '../../../utils/server-addr';

class ProfilePage extends Component {
    render() {
        const {isAuth, userData}=this.props;
        return (
            <>
                <div className="flex-center-column p-4" style={{width: 50 + "vw"}}>
                    <img id="accountPic" src={userData.image ? userData.image : getServerImagesDirUrl() + "placeholder.png"} width="200" className="mb-4" />
                    <div className="row g-3 align-items-center margin-bottom-025em">
                        <div className="col-auto">
                            <label for="inputText" className="font-30 font-bold col-form-label">URL</label>
                        </div>
                        <div className="col-auto">
                            <input type="text" id="inputText" className="form-control" />
                        </div>
                        <div className="col-auto">
                            <button id="loadPicButton" onclick="" className="thin-small-button background-beige">
                                <span id="loadPicButtonContent" className="font-30 font-bold">
                                    Load
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                <div id="profileDiv">
                    { 
                        userData.userName
                    }
                </div>
            </>
        )
    }
}

function mapState(stateRedux) {
    console.log("stateRedux map", stateRedux);
    return {
        isAuth: stateRedux.userReducer.isAuth,
        userData: stateRedux.userReducer.userData
    }
}

export default connect(mapState)(ProfilePage);