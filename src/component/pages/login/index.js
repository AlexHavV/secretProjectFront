import React, { useRef } from 'react'
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import userService from '../../../service/userService';
import { authUser } from '../../../action/auth';
import TextInput from '../../common/input';

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const formikRef = useRef();
    return (
        <>
            <Formik
                innerRef={formikRef}
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={Yup.object({
                    password: Yup.string()
                        .required('Password is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Email is required') 
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        let formData = new FormData();

                        formData.append("email", values.email);
                        formData.append("password", values.password);

                        //console.log("Form Data",formData);
                        const res = await userService.login(formData);

                        const { token } = res.data;
                        localStorage.authToken = token;
                        authUser(token, dispatch);
                        history.push("/");
                    } catch (e) {
                        console.log(e);
                    }
                    setSubmitting(false);
                }}
            >
                <div>
                    <div className="display-4 text-center">
                      <p className="m-1">Login Page</p>
                    </div>
                    <Form>
                        <TextInput
                            label="Email Address"
                            name="email"
                            type="email"
                            placeholder="Benis@petro.vich"
                        />
    
                        <TextInput
                            label="Password"
                            name="password"
                            type="password"
                            placeholder="●●●●●●●●"
                        />
    
                        <div className="center">
                            <button type="submit" className="display-4 btn-submit btn-medium-size round m-3">E-Login</button>                            
                            <Link type="submit" className="display-6 washed-up-blue btn-submit btn-small-size round center" to="/register">E-Register</Link>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    );
};

export default LoginPage;