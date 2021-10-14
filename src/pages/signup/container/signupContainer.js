import React, { useEffect, useState} from 'react';
import qs from 'qs';
import { Button } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useActions, useSelectors } from '../hooks';
import { useHistory } from "react-router-dom";



const SignupMainConatiner = (props) => {
    const history = useHistory();
    const phoneRegExp = /^\d{10}$/;
    const otpRegExp = /^\d{4}$/;
    const { loginData = {} } = useSelectors();
    const {usersData = {}} = loginData;
    const {userData = {}} = usersData;
    const [showOtp, setShowOtp] = useState(false);
    const {register, verifyOtp} = useActions();
    let typeOfRegister = 0;
    const schema = yup.object().shape({
        fname: yup.string().required('Enter First Name'),
        lname: yup.string().required('Enter Last Name'),
        phone: yup.string().required('Enter Mobile Number').matches(phoneRegExp, 'Enter valid mobile number'),
        otp: showOtp ? yup.string().required('Enter OTP').matches(otpRegExp, 'Enter valid OTP') : '',
    });
    const { type = 1 } = qs.parse(props.location.search.split('?')[1]);
    typeOfRegister = type;
    
    const registerUser = (data) => {
        data.userrole = typeOfRegister;
        if(showOtp) {
            const param = {
                phone: userData.phone,
                otp: data.otp,
            }
            verifyOtp(param, userData.authToken).then(resposne => {
                if(resposne.status === 1) {
                    localStorage.setItem('usersData', JSON.stringify(usersData));
                    history.push("/home");
                } else {
                    alert(resposne.message)
                }
            })
            
        } else {
            register(data).then(response => {
                if(response.status === 1) {
                    setShowOtp(true);
                } else {
                    alert(response.message)
                }
                
            });
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
                                   <h3 className="display-4">{typeOfRegister === '2' ? 'Traders Registration' : 'Customer Registration'}</h3>
                                   {/* <p className="text-muted mb-4">Create a login split page using Reactjs & Bootstrap 5.</p> */}
                                   <Formik
                                    validationSchema={schema}
                                    onSubmit={registerUser}
                                    initialValues={{
                                        fname: '',
                                        lname : '',
                                        email: '',
                                        phone: '',
                                        otp: '',
                                    }}
                                    >
                                    {({
                                        values,
                                        touched,
                                        isValid,
                                        errors,
                                    }) => (
                                        <Form>
                                            {showOtp ?
                                                <>
                                                    <Field name="otp" placeholder="Enter OTP" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                                    {errors.otp && touched.otp ? (<div className="text-danger mt-2">{errors.otp}</div>) : null}
                                                </>
                                                :
                                                <>
                                                    <div className="mb-3">
                                                        <div className="mb-3">
                                                            <Field name="fname" placeholder="First Name" className="form-control rounded-pill border-0 shadow-sm px-4" />
                                                            {errors.fname && touched.fname ? (<div className="text-danger mt-2">{errors.fname}</div>) : null}
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field name="lname" placeholder="Last Name" className="form-control rounded-pill border-0 shadow-sm px-4 mb-3" />
                                                            {errors.lname && touched.lname ? (<div className="text-danger mt-2">{errors.lname}</div>) : null}
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field name="email" placeholder="Email" className="form-control rounded-pill border-0 shadow-sm px-4 mb-3" />
                                                            {errors.email && touched.email ? (<div className="text-danger mt-2">{errors.email}</div>) : null}
                                                        </div>
                                                        <div className="mb-3">
                                                            <Field name="phone" placeholder="Mobile Number" className="form-control rounded-pill border-0 shadow-sm px-4 mb-3" />
                                                            {errors.phone && touched.phone ? (<div className="text-danger mt-2">{errors.phone}</div>) : null}
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            <div className="d-grid gap-2 mt-2">
                                                <Button type="submit" variant="info"  className="btn-fill themeBtn w-100 p-0">{showOtp ? 'Verify OTP' : 'Register'}</Button>
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

export default SignupMainConatiner;