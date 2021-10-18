import React, { useRef } from 'react'
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import userService from '../../../service/userService';
import { authUser } from '../../../action/auth';
import TextInput from '../../common/input';
import Checkbox from '../../common/checkbox';

const SearchPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const formikRef = useRef();
    return (
        <>
            <div>
                123
            </div>
        </>
    );
};

export default SearchPage;