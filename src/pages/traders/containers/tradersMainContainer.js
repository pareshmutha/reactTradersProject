import React, { useState, useEffect } from 'react';
import {Card, Button, Row, Col, Container, Form, Table} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useSelectors, useActions } from '../hooks';
import { useActions as useLoginActions } from '../../login/hooks';

import { states } from '../../../utils/constants';



const TradersMainContainer = (props) => {
    const [districts, setDistricts] = useState([]);
    const history = useHistory();
    const { continueUserSession } = useLoginActions();
    const { getAllTraders } = useActions();
    const { allTraders = [] } =  useSelectors();
    useEffect(()=>{
      if(localStorage.getItem('usersData')) {
          continueUserSession(JSON.parse(localStorage.getItem('usersData')));
      }
      getAllTraders().then(response => {
        if(response.status != 1) {
          alert(response.message)
        }
      });
  },[continueUserSession, history, getAllTraders]);
  const searchTraders = ()=> {
    getAllTraders();
  }
    return (
      <div className="maincontainer">
        <Container fluid className="p-3">
          <Row>
          <Card className="mt-3 w-100">
            <Card.Header>
              <Card.Title as="h4">Search Traders</Card.Title>
            </Card.Header>
            <Card.Body>
            <Row className="mb-3">
                <Col md={12}>
                    <Form.Group>
                        <Form.Control
                        defaultValue=""
                        placeholder="Enter Search Query"
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
                    <div className="ml-auto mt-3 mr-2">
                        <Button variant="info" className="btn-fill pull-right themeBtn" onClick={searchTraders}>Search Traders</Button>
                    </div>
                </Row>
                <hr/>
                <Row className="mt-3 p-3">
                    <h4>Traders List</h4>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            <th>Vegetables</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allTraders.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td><a href={`#/viewProfile?id=${item.traderId}`}>{`${item.fname} ${item.lname}`}</a></td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td>{item.vegetables}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Row>
            </Card.Body>
            </Card>
          </Row>
        </Container>
        </div>
    )
}

export default TradersMainContainer;