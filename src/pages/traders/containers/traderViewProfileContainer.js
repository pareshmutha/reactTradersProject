import React, { useState, useEffect, useCallback } from 'react';
import { Button, Card, Container, Row, Col, Tabs, Tab, Table, Form as bootForm } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import qs from 'qs';
import { useActions as useLoginActions } from '../../login/hooks';
import { useActions, useSelectors } from '../hooks';
import vegetable1 from '../../../assets/img/face-3.jpg';
import vegetable2 from '../../../assets/img/photo.jpg';
import ImageGallery from '../components/imageGallery';
import StarRatingComponent from 'react-star-rating-component';

const TraderViewProfileContainer = (props) => {
  const [ratings, setRatings] = useState(0);
  const [trader, setTrader] = useState({});
  const [reviews, setreviews] = useState([]);
  const [userReview, setUserReview] = useState('')
  const [tImages, setTimages] = useState([]);
  const [imageData, setImageData] = useState('');

  const history = useHistory();
  const { continueUserSession } = useLoginActions();
  const { getTraderById, submitReview, imageUpload } = useActions();
  const { usersData } = useSelectors();
  const [traderId, setTraderId] = useState(0);
  
  const getTraderInfo = useCallback((id) => {
    const idFromSession = JSON.parse(localStorage.getItem('usersData')).userData.id;
    const params = {traderId: id, loginUserId: usersData.id || idFromSession}
      setTraderId(id);
      getTraderById(params).then(response => {
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
      });
  },[getTraderById, usersData])
  console.log()
  useEffect(()=>{
      const { id = 0 } = qs.parse(props.location.search.split('?')[1]);
      getTraderInfo(id).then(response => {
        if(response.status != 1) {
          alert(response.message)
        }
      });
      if(localStorage.getItem('usersData')) {
          continueUserSession(JSON.parse(localStorage.getItem('usersData')));
      }
  },[continueUserSession, props.location.search]);

  const submitUserReview = (data) => {
    const params = {
      "review": userReview,
      "userId": usersData.id,
      "traderId": traderId,
      "ratings": ratings
    }
    submitReview(params).then(response => {
      if(response.status != 1) {
        alert(response.message)
      }
      getTraderInfo(traderId);
    });
  }

  const onImageChange = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImageData(URL.createObjectURL(img));
    }
  };

  const uploadPhoto = () => {
    const param = {"traderId": traderId, image: imageData}
    imageUpload(param).then(response => {
      getTraderInfo(traderId);
    })
  }
  return (
    <div className="maincontainer">
      <Container fluid>
      <Row>
        <Col md="8">
          <Card className="mt-3">
            <Card.Header>
              <Card.Title as="h4">Trader Details</Card.Title>
            </Card.Header>
            <Card.Body>
              <>
                <Row className="mb-5 mt-3">
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> Name: </span><span className="profile-value">{`${trader.fname} ${trader.lname}`}</span>
                  </Col>
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> Mobile Number: </span><span className="profile-value">{trader.phone}</span>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> Vegetables: </span><span className="profile-value">{trader.vegetables}</span>
                  </Col>
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> Aadhar Number: </span><span className="profile-value">{trader.aadharNo}</span>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> Address: </span><span className="profile-value">{trader.address}</span>
                  </Col>
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> City: </span><span className="profile-value">{trader.city}</span>
                  </Col>
                </Row>
                <Row className="mb-5">
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> State: </span><span className="profile-value">{trader.state}</span>
                  </Col>
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> District: </span><span className="profile-value">{trader.district}</span>
                  </Col>
                </Row>
                <Row className="mb-3">
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> Email: </span><span className="profile-value">{trader.email}</span>
                  </Col>
                  <Col className="pr-1" md="6">
                    <span className="mr-2"> Info: </span><span className="profile-value">{trader.info}</span>
                  </Col>
                </Row>
                <div className="clearfix"></div>
              </>
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
                <p className="description">{trader.info}</p>
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

    <Card className="card-user mt-3">
      <Card.Body>
      <Tabs defaultActiveKey="images" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="images" title="Images">
        <ImageGallery imagesData={tImages} />
        </Tab>
        {/* <Tab eventKey="videos" title="Videos">
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
        </Tab> */}
        <Tab eventKey="reviews" title="My Reviews">
        {traderId != usersData.id ? <Row>
            <Col md="12">
              <bootForm.Group>
                <label>
                  Describe Your Rating  
                </label>
                <Row>
                  <Col md={6}>
                      <bootForm.Control
                        cols="80"
                        placeholder="Here can be your description"
                        rows="6"
                        as="textarea"
                        onChange={(e)=>{setUserReview(e.target.value)}}
                      ></bootForm.Control>
                  </Col>
                  <Col md={3}>
                    <StarRatingComponent 
                        name="rate2" 
                        starCount={5}
                        value={ratings}
                        onStarClick={(val)=>{setRatings(val)}}
                        className="ratingStar"
                      />
                  </Col>
                  <Col md={3}>
                    <Button type="button" onClick={submitUserReview} variant="info"  className="btn-fill themeBtn">Submit Review</Button>
                  </Col>
                </Row>
              </bootForm.Group>
            </Col>
        </Row>: null}
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
                                            starCount={item.ratings}
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

export default TraderViewProfileContainer;