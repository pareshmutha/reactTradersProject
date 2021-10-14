import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Container, Row, Col, Tabs, Tab, Table, Form as bootForm } from "react-bootstrap";
import { Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";

import { useActions as useLoginActions } from '../../login/hooks';
import { useActions, useSelectors } from '../hooks';

import vegetable1 from '../../../assets/img/face-3.jpg';
import vegetable2 from '../../../assets/img/photo.jpg';
import { states } from '../../../utils/constants';
import ImageGallery from '../components/imageGallery';
import StarRatingComponent from 'react-star-rating-component';



const aadharRegex =  /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;

const schema = yup.object().shape({
  fname: yup.string().required('Enter First Name'),
  lname: yup.string().required('Enter Last Name'),
  aadharNo: yup.string().required('Enter Aadhar Number'),//.matches(aadharRegex, 'Enter Valid Aadhar Number'),
  address: yup.string().required('Enter Address'),
  state: yup.string().required('Select State'),
  district: yup.string().required('Enter District'),
  city: yup.string().required('Enter City'),
  pincode: yup.string().required('Enter Pincode'),
});


const TraderProfileContainer = (props) => {
  const [districts, setDistricts] = useState([]);
  const [trader, setTrader] = useState({});
  const [reviews, setreviews] = useState([]);
  const [tImages, setTimages] = useState([]);
  const [imageData, setImageData] = useState('');
  const [formkey, setFormKey] = useState(0);
  
  const history = useHistory();
    const { continueUserSession } = useLoginActions();
    const { updateTrader, getTraderById, imageUpload } = useActions();
    const { usersData = {} } = useSelectors();
     
  const getTraderInfo = useCallback((id) => {
    const idFromSession = JSON.parse(localStorage.getItem('usersData')).userData.id;
    const params = {traderId: usersData.id || idFromSession};
      getTraderById(params).then(response => {
        if(response.status === 1) {
          const {traderdetails = {}, reviews = [], images = []} = response;
          setTimages(images);
          setreviews(reviews);
          setTrader({
            "fname": traderdetails.fname,
            "lname": traderdetails.lname,
            "email": traderdetails.email,
            "phone": traderdetails.phone,
            "address": traderdetails.address,
            "userrole": traderdetails.userrole,
            "isActive": traderdetails.isActive,
            "id": traderdetails.id,
            "traderId": traderdetails.traderId,
            "info": traderdetails.info,
            "state": traderdetails.state,
            "district": traderdetails.district,
            "city": traderdetails.city,
            "vegetables": traderdetails.vegetables,
            "aadharNo": traderdetails.aadharNo,
            "company": traderdetails.company,
          })
          setFormKey(formkey + 1)
        } else {
          alert(response.message)
        }
      });
  },[getTraderById, formkey, usersData])

    useEffect(() => {
      getTraderInfo();
      if(localStorage.getItem('usersData')) {
          continueUserSession(JSON.parse(localStorage.getItem('usersData')));
      }
  },[continueUserSession, history]);

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageData(URL.createObjectURL(img));
    }
  };

  const uploadPhoto = () => {
    const param = {"traderId": usersData.id, image: imageData}
    imageUpload(param).then(response => {
      if(response.status === 1){
        getTraderInfo();
      } else {
        alert(response.message)
      }
    })
  }
  const updateUser = (values) => {
    values.traderId = usersData.id;
    values.company = "Shivshankar";
    values.userId = usersData.id;
    updateTrader(values).then(response => {
      if(response.status === 1) {
        getTraderInfo();
      } else {
        alert(response.message)
      }
    })
  }
  return (
    <div className="maincontainer">
    <Formik
      key={formkey}
      validationSchema={schema}
      onSubmit={updateUser}
      initialValues={{
        "fname": trader.fname,
        "lname": trader.lname,
        "email": trader.email,
        "phone": trader.phone,
        "address": trader.address,
        "info": trader.info,
        "state": trader.state,
        "district": trader.district,
        "city": trader.city,
        "vegetables": trader.vegetables,
        "aadharNo": trader.aadharNo,
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <>
          <Container fluid>
      <Row>
        <Col md="8">
          <Card className="mt-3 editForm">
            <Card.Header>
              <Card.Title as="h4">Update Trader Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="5">
                    <bootForm.Group>
                      <label>First Name</label>
                      <Field defaultValue="" placeholder="First Name" type="text" name="fname" className="form-control" />
                      {errors.fname && touched.fname ? (<div className="text-danger mt-2">{errors.fname}</div>) : null}
                    </bootForm.Group>
                  </Col>
                  <Col className="px-1" md="3">
                    <bootForm.Group>
                      <label>Last Name</label>
                      <Field defaultValue="" placeholder="Last Name" type="text" name="lname" className="form-control" />
                      {errors.lname && touched.lname ? (<div className="text-danger mt-2">{errors.lname}</div>) : null}
                    </bootForm.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <bootForm.Group>
                      <label htmlFor="exampleInputEmail1">
                        Email address
                      </label>
                      <Field defaultValue="" placeholder="EMail" type="text" name="email" className="form-control" />
                    </bootForm.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="5">
                    <bootForm.Group>
                      <label>Aadhar Number</label>
                      <Field defaultValue="" placeholder="Aadhar Number" type="text" name="aadharNo" className="form-control" />
                      {errors.aadharNo && touched.aadharNo ? (<div className="text-danger mt-2">{errors.aadharNo}</div>) : null}
                    </bootForm.Group>
                  </Col>
                  <Col className="px-1" md="3">
                    <bootForm.Group>
                      <label>Mobile Number</label>
                      <Field defaultValue="" placeholder="Mobile Number" disbaled={true} type="text" name="phone" className="form-control disbaleInput" />
                    </bootForm.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <bootForm.Group>
                      <label>Address</label>
                      <Field defaultValue="" placeholder="Address" type="text" name="address" className="form-control" />
                      {errors.address && touched.address ? (<div className="text-danger mt-2">{errors.address}</div>) : null}
                    </bootForm.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="3">
                    <bootForm.Group>
                        <label>State</label>
                        <Field name="state" as="select" className="form-control" onChange={(state) => {setDistricts(states[state.target.value] || []); handleChange(state);}}>
                          <option value="">Select State</option>
                          {Object.keys(states).map(item => (<option checked={values.state === item ? true : false} value={item}>{item}</option>))}
                        </Field>
                        {errors.state && touched.state ? (<div className="text-danger mt-2">{errors.state}</div>) : null}
                    </bootForm.Group>
                  </Col>
                  <Col className="px-1" md="3">
                  <bootForm.Group>
                        <label>District</label>
                      <Field name="district" as="select" className="form-control" onChange={handleChange}>
                          <option value="">Select District</option>
                          {districts.map(item => (<option checked={values.district === item ? true : false} value={item}>{item}</option>))}
                        </Field>
                        {errors.district && touched.district ? (<div className="text-danger mt-2">{errors.district}</div>) : null}
                    </bootForm.Group>
                  </Col>
                  <Col className="pl-1" md="3">
                    <bootForm.Group>
                      <label>City</label>
                      <Field defaultValue="" placeholder="City" type="text" name="city" className="form-control" />
                      {errors.city && touched.city ? (<div className="text-danger mt-2">{errors.city}</div>) : null}
                    </bootForm.Group>
                  </Col>
                  <Col className="pl-1" md="3">
                    <bootForm.Group>
                      <label>Pin Code</label>
                      <Field defaultValue="" placeholder="Pincode" type="text" name="pincode" className="form-control" />
                      {errors.pincode && touched.pincode ? (<div className="text-danger mt-2">{errors.pincode}</div>) : null}
                    </bootForm.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <bootForm.Group>
                      <Field
                        cols="80"
                        defaultValue=""
                        placeholder="Here can be your description"
                        rows="4"
                        name="info"
                        as="textarea"/>
                    </bootForm.Group>
                  </Col>
                </Row>
                <Button
                  className="btn-fill pull-right themeBtn"
                  type="submit"
                  variant="info"
                >
                  Save
                </Button>
                <div className="clearfix"></div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md="4">
          <Card className="card-user mt-3">
            <div className="card-image">
              <img
                alt="..."
                src={vegetable2}
              ></img>
            </div>
            <Card.Body>
              <div className="author">
                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                  <img
                    alt="..."
                    className="avatar border-gray"
                    src={vegetable1}
                  ></img>
                  <h5 className="title">{`${trader.fname} ${trader.lname}`}</h5>
                </a>
                <p className="description">{trader.info || ''}</p>
              </div>
            </Card.Body>
            <hr></hr>
            <div className="button-container mr-auto ml-auto">
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-twitter"></i>
              </Button>
              <Button
                className="btn-simple btn-icon"
                href="#pablo"
                onClick={(e) => e.preventDefault()}
                variant="link"
              >
                <i className="fab fa-google-plus-square"></i>
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
        </>
      )}
    </Formik>
    <Card className="card-user mt-3">
      <Card.Body>
      <Tabs defaultActiveKey="images" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="images" title="Images">
        <Row>
        <Col md="8">
            <bootForm.Group className="position-relative ml-3 mb-3">
                <bootForm.Label>Upload Image</bootForm.Label>
                <bootForm.Control
                  type="file"
                  required
                  name="image"
                  multiple 
                  accept="image/*"
                  onChange={onImageChange}
                />
              </bootForm.Group>
            </Col>
            <Col md="4">
              <Button type="button" onClick={uploadPhoto} variant="info"  className="btn-fill themeBtn mt-4">Upload Photo</Button>
            </Col>
        </Row>
        <ImageGallery imagesData={tImages} />
        </Tab>
       {/*  <Tab eventKey="videos" title="Videos">
        <Row>
          <bootForm.Group className="position-relative ml-3 mb-3">
              <bootForm.Label>Upload Video</bootForm.Label>
              <bootForm.Control
                type="file"
                required
                name="image"
                multiple 
                accept="image/*"
                //onChange={handleChange}
              />
            </bootForm.Group>
        </Row> 
        <ImageGallery />
        </Tab>*/}
        <Tab eventKey="reviews" title="My Reviews">
        {/* <Row>
            <Col md="12">
              <bootForm.Group>
                <label>
                  Describe Your Rating  
                    
                </label>
                <Row>
                  <Col md={7}>
                      <bootForm.Control
                        cols="80"
                        defaultValue="Add your review here"
                        placeholder="Here can be your description"
                        rows="6"
                        as="textarea"
                      ></bootForm.Control>
                  </Col>
                  <Col md={3}>
                    <StarRatingComponent 
                        name="rate1" 
                        starCount={5}
                        value={ratings}
                        onStarClick={(val)=>{setRatings(val)}}
                        className="mt-2 ratingStar"
                      />
                  </Col>
                </Row>
              </bootForm.Group>
            </Col>
        </Row> */}
        <Row className="mt-3">
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                              <th>#</th>
                              <th>Review</th>
                              <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {reviews.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.review}</td>
                                        <td>
                                          <StarRatingComponent 
                                            name="rate2" 
                                            editing={false}
                                            //renderStarIcon={() => <span></span>}
                                            starCount={5}
                                            value={item.ratings}
                                          />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
        </Tab>
      </Tabs>
      </Card.Body>
    </Card>
    
  </div>
  );
}

export default TraderProfileContainer;