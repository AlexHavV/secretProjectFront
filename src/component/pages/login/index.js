import React, { useRef } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import userService from '../../../service/userService';
import { authUser } from '../../../action/auth';
import TextInput from '../../common/input';
import Checkbox from '../../common/checkbox';

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
                    password: '',
                    acceptedTerms: false
                }}
                validationSchema={Yup.object({
                    password: Yup.string()
                        .required('Password is required'),
                    email: Yup.string()
                        .email('Invalid email address')
                        .required('Email is required'),
                    acceptedTerms: Yup.boolean()
                        .required('')
                        .oneOf([true], 'You must accept our mailing list.')
                })}
                onSubmit={async (values, { setSubmitting }) => {
                    try {
                        let formData = new FormData();

                        formData.append("email", values.email);
                        formData.append("password", values.password);
                        formData.append("acceptedTerms", values.acceptedTerms);

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
                      <p className="m-1">Login Form</p>
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
    
                        <Checkbox id="acceptedTerms" name="acceptedTerms">
                            I accept mailing list of THE FRESHEST PIZZAS of da world
                        </Checkbox>
                        <div className="center">
                            <button type="submit" className="display-4 btn-submit btn-medium-size round">E-Login</button>
                            <button type="submit" className="display-4 btn-submit btn-medium-size round">E-Register</button>
                        </div>
                    </Form>
                </div>
            </Formik>
        </>
    );
};

export default LoginPage;