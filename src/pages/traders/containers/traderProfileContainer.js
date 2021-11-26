import React, {useState} from 'react';
//import {Form, InputGroup, Col, Row, Button} from 'react-bootstrap';
// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Form,
    Navbar,
    Nav,
    Container,
    Row,
    Col,
    InputGroup,
    Tabs,
    Tab,
    Table
  } from "react-bootstrap";
import { Formik } from 'formik';
import * as yup from 'yup';
import vegetable1 from '../../../assets/img/face-3.jpg';
import vegetable2 from '../../../assets/img/photo.jpg';
import { states } from '../../../utils/constants';
import ImageGallery from '../components/imageGallery';
import StarRatingComponent from 'react-star-rating-component';




const schema = yup.object().shape({
  firstName: yup.string().required('required'),
  lastName: yup.string().required(),
  username: yup.string().required(),
  city: yup.string().required(),
  state: yup.string().required(),
  zip: yup.string().required(),
  file: yup.mixed().required(),
  terms: yup.bool().required().oneOf([true], 'terms must be accepted'),
});

const reviewData = [
  {id : 1, review : "review from customer", stars : 2},
  {id : 2, review : "review from customer", stars : 3},
  {id : 3, review : "review from customer", stars : 4},
  {id : 4, review : "review from customer", stars : 5},
  {id : 5, review : "review from customer", stars : 1}

]

const TraderProfileContainer = (props) => {
  const [districts, setDistricts] = useState([]);
  const [ratings, setRatings] = useState(0);
  return (
    <div className="maincontainer">
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: 'Mark',
        lastName: 'Otto',
        username: '',
        city: '',
        state: '',
        zip: '',
        file: null,
        terms: false,
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
        <Form noValidate onSubmit={handleSubmit}>
          <Container fluid>
      <Row>
        <Col md="8">
          <Card className="mt-3">
            <Card.Header>
              <Card.Title as="h4">Update Trader Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <Form>
                <Row>
                  <Col className="pr-1" md="5">
                    <Form.Group>
                      <label>First Name</label>
                      <Form.Control
                        defaultValue=""
                        placeholder="First Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="3">
                    <Form.Group>
                      <label>Last Name</label>
                      <Form.Control
                        defaultValue=""
                        placeholder="Last Name"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="4">
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">
                        Email address
                      </label>
                      <Form.Control
                        placeholder="Email"
                        type="email"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="5">
                    <Form.Group>
                      <label>Aadhar Number</label>
                      <Form.Control
                        defaultValue=""
                        placeholder="Enter Aadhar Number"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="3">
                    <Form.Group>
                      <label>Mobile NUmber</label>
                      <Form.Control
                        defaultValue=""
                        placeholder="Enter Mobile Number"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Address</label>
                      <Form.Control
                        placeholder="Enter Address"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col className="pr-1" md="3">
                    <Form.Group>
                        <label>State</label>
                        <Form.Select aria-label="Default select example" className="form-control" onChange={(state) => {setDistricts(states[state.target.value] || [])}}>
                        <option>Select State</option>
                        {Object.keys(states).map(item => (<option value={item}>{item}</option>))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col className="px-1" md="3">
                  <Form.Group>
                        <label>District</label>
                        <Form.Select aria-label="Default select example" className="form-control">
                        <option>Select District</option>
                        {districts.map(item => (<option value={item}>{item}</option>))}
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="3">
                    <Form.Group>
                      <label>City</label>
                      <Form.Control
                        placeholder="Enter City"
                        type="text"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col className="pl-1" md="3">
                    <Form.Group>
                      <label>Pin Code</label>
                      <Form.Control
                        placeholder="Enter Pin Code"
                        type="number"
                      ></Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="12">
                    <Form.Group>
                      <label>Describe About your services</label>
                      <Form.Control
                        cols="80"
                        defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                        that two seat Lambo."
                        placeholder="Here can be your description"
                        rows="4"
                        as="textarea"
                      ></Form.Control>
                    </Form.Group>
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
                  <h5 className="title">Mike Andrew</h5>
                </a>
                <p className="description">michael24</p>
              </div>
              <p className="description text-center">
                "Lamborghini Mercy <br></br>
                Your chick she so thirsty <br></br>
                I'm in that two seat Lambo"
              </p>
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
        </Form>
      )}
    </Formik>
    <Card className="card-user mt-3">
      <Card.Body>
      <Tabs defaultActiveKey="images" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="images" title="Images">
        <Row>
          <Form.Group className="position-relative ml-3 mb-3">
              <Form.Label>Upload Image</Form.Label>
              <Form.Control
                type="file"
                required
                name="image"
                multiple 
                accept="image/*"
                //onChange={handleChange}
              />
            </Form.Group>
        </Row>
        <ImageGallery />
        </Tab>
        <Tab eventKey="videos" title="Videos">
        <Row>
          <Form.Group className="position-relative ml-3 mb-3">
              <Form.Label>Upload Video</Form.Label>
              <Form.Control
                type="file"
                required
                name="image"
                multiple 
                accept="image/*"
                //onChange={handleChange}
              />
            </Form.Group>
        </Row>
        <ImageGallery />
        </Tab>
        <Tab eventKey="reviews" title="My Reviews">
        <Row>
            <Col md="12">
              <Form.Group>
                <label>
                  Describe Your Rating  
                    
                </label>
                <Row>
                  <Col md={7}>
                      <Form.Control
                        cols="80"
                        defaultValue="Add your review here"
                        placeholder="Here can be your description"
                        rows="6"
                        as="textarea"
                      ></Form.Control>
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
              </Form.Group>
            </Col>
        </Row>
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
                            {reviewData.map(item => {
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
                                            value={item.stars}
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