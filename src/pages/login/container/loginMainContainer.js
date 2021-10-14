import React, {useEffect} from 'react'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import qs from 'qs';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useActions, useSelectors } from '../hooks';
const LoginMainConatiner = (props) => {
    const history = useHistory();
    const {login, verifyOtp, userLogout, continueUserSession } = useActions();
    const { loginData = {} } = useSelectors();
    const {usersData = {}} = loginData;
    const phoneRegExp = /^\d{10}$/;
    const otpRegExp = /^\d{4}$/;
    const schema = yup.object().shape({
        phoneNumber: yup.string().matches(phoneRegExp, 'Enter valid mobile number'),
        otp: yup.string().matches(otpRegExp, 'Enter valid OTP'),
    });
    useEffect( () => {
        const { logout } = qs.parse(props.location.search.split('?')[1]);
        if(logout) {
            localStorage.removeItem('usersData');
            userLogout();
        }
        if(localStorage.getItem('usersData')) {
            continueUserSession(JSON.parse(localStorage.getItem('usersData')));
            history.push("/home");
        }
    },[props.location.search, userLogout, continueUserSession, history])
    const loginUser = (values) => {
        if (values.otp) {
            const params = { "phone": values.phoneNumber, "otp": values.otp}
            verifyOtp(params).then(resposne => {
                if(resposne.status === 1) {
                    localStorage.setItem('usersData', JSON.stringify(usersData));
                    history.push("/home");
                }
            })
        } else {
            const params = { "phone": values.phoneNumber}
            login(params).then(resposne => {
                if(resposne.status === 1) {

                } else {
                    alert(resposne.message)
                }
            })
        }
    }
    return (
        
       <div className="maincontainer">
       <div className="container-fluid">
           <div className="row no-gutter">
               <div className="col-md-6 d-none d-md-flex bg-image"></div>
               <div className="col-md-6 bg-light">
                   <div className="login d-flex align-items-center py-5">
                       <div className="container">
                           <div className="row">
                               <div className="col-lg-10 col-xl-7 mx-auto">
                                   <h3 className="display-4 text-center">Login</h3>
                                   <Formik
                                    validationSchema={schema}
                                    onSubmit={loginUser}
                                    initialValues={{
                                        phoneNumber: '',
                                        otp : ''
                                    }}
                                    >
                                    {({
                                        values,
                                        touched,
                                        isValid,
                                        errors,
                                    }) => (
                                            <Form>
                                                <div className="mb-3">
                                                    {!Object.keys(usersData.userData || []).length ?
                                                        <>
                                                            <Field name="phoneNumber" placeholder="Mobile Number" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                                            {errors.phoneNumber && touched.phoneNumber ? (<div className="text-danger mt-2">{errors.phoneNumber}</div>) : null}
                                                        </>
                                                        : null
                                                    }
                                                    {Object.keys(usersData.userData || []).length ?
                                                        <>
                                                            <Field name="otp" placeholder="Enter OTP" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                                            {errors.otp && touched.otp ? (<div className="text-danger mt-2">{errors.otp}</div>) : null}
                                                        </>
                                                        : null
                                                    }
                                                </div>
                                                <div className="d-grid gap-2 mt-4">
                                                        {   Object.keys(usersData.userData || []).length ?
                                                                <Button type="submit" variant="info" disabled={((errors.otp && touched.otp) || values.otp.length === 0)} className="btn-fill themeBtn w-100 p-0">Verify OTP</Button>
                                                                :
                                                                <Button type="submit" variant="info" disabled={((errors.phoneNumber && touched.phoneNumber) || values.phoneNumber.length === 0)} className="btn-fill themeBtn w-100 p-0">Login</Button>
                                                        }
                                                </div>
                                            </Form>
                                        )}
                                    </Formik>
                               </div>
                           </div>
                       </div>

                   </div>
               </div>

           </div>
       </div>
     </div>
     
    )
}

export default LoginMainConatiner;