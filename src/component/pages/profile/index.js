import React, { Component, useState, useEffect } from 'react'
import { useDispatch, useSelector, connect } from 'react-redux'
import { searchProducts } from '../../../action/search';
import productService from '../../../service/productService';
import store from '../../../store';
import httpConfig from '../../../utils/http-config';
import { getServerImagesDirUrl } from '../../../utils/server-addr';
import ProductBlock from '../search/template';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import '../../../App.css';
import userService from '../../../service/userService';
import { authUser } from '../../../action/auth';

class ProfilePage extends Component {
    async updateData() {
        //console.log(this.props.userData);
        let newName = document.getElementById("inputName").value;
        let newEmail = document.getElementById("inputEmail").value;
        let newPhone = document.getElementById("inputPhone").value;
        let newPass = document.getElementById("inputPass").value;
        let newImage = document.getElementById("inputPic").files[0];
        //let newUserData = {
        //    "id": this.props.userData.id,
        //    "userName": newName,
        //    "email": newEmail,
        //    "phoneNumber": newPhone,
        //    "password": newPass,
        //    "image": newImage
        //}
        //console.log(newUserData);
        //userService.edit(newUserData);

        try {
            let formData = new FormData();

            formData.append("id", this.props.userData.id);
            formData.append("userName", newName);
            formData.append("email", newEmail);
            formData.append("phoneNumber", newPhone);
            formData.append("password", newPass);
            formData.append("image", newImage);

            //console.log("Form Data",formData);
            const res = await userService.edit(formData);

            const { token } = res.data;
            localStorage.authToken = token;
            authUser(token, this.props.dispatch);
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        let {userData}=this.props;
        return (
            <>
                <div className="flex-center-column p-4">
                    <img id="accountPic" src={getServerImagesDirUrl() + (userData.image ? userData.image : "placeholder.png")} width="200" className="mb-4" />
                    <div className="row g-3 align-items-center margin-bottom-5">
                            <div className="col-auto">
                                <label htmlFor="inputPic" accept="image/*" className="font-30 font-bold col-form-label">Picture</label>
                            </div>
                            <div className="col-auto">
                                <input type="file" id="inputPic" className="form-control" />
                            </div>
                    </div>
                    <div className="flex-end-column">
                        <div className="row g-3 align-items-center margin-bottom-5">
                            <div className="col-auto">
                                <label htmlFor="inputName" className="font-30 font-bold col-form-label ">Name</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="inputName" className="form-control input-profile" defaultValue={userData.userName}/>
                            </div>
                        </div>
                        <div className="row g-3 align-items-center margin-bottom-5">
                            <div className="col-auto">
                                <label htmlFor="inputEmail" className="font-30 font-bold col-form-label ">E-mail</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="inputEmail" className="form-control input-profile" defaultValue={userData.email}/>
                            </div>
                        </div>
                        <div className="row g-3 align-items-center margin-bottom-5">
                            <div className="col-auto">
                                <label htmlFor="inputPhone" className="font-30 font-bold col-form-label ">Phone number</label>
                            </div>
                            <div className="col-auto">
                                <input type="text" id="inputPhone" className="form-control input-profile" defaultValue={userData.phoneNumber}/>
                            </div>
                        </div>
                        <div className="row g-3 align-items-center margin-bottom-5">
                            <div className="col-auto">
                                <label htmlFor="inputPass" className="font-30 font-bold col-form-label ">New password</label>
                            </div>
                            <div className="col-auto">
                                <input type="password" id="inputPass" className="form-control input-profile" defaultValue={userData.password}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button id="updateData" onClick={this.updateData.bind(this)} className="btn-submit btn-confirm-order">
                            <span id="updateData" className="font-30 font-bold">
                                Update user info
                            </span>
                        </button>
                    </div>
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