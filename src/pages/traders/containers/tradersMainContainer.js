import React, {useState} from 'react';
import {Card, Button, Image, Row, Col, Container, Form, Table} from 'react-bootstrap';
import { useSelectors, useActions } from '../hooks';
import vegetable1 from '../../../assets/img/vege1.jpg';
import TraderCard from '../components/traderCard';
import { states } from '../../../utils/constants';

const tradersData = [
    {id: 1, name: "Abc", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 2, name: "Abc1", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 3, name: "Abc2", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 4, name: "Abc3", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 5, name: "Abc4", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 6, name: "Abc5", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 7, name: "Abc6", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 8, name: "Abc7", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 9, name: "Abc8", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
    {id: 10, name: "Abc9", image : 'https://source.unsplash.com/PC_lbSSxCZE/800x600', number: '999999999', address: 'Laslgaon, Nashik'},
]


const TradersMainContainer = (props) => {
    const [districts, setDistricts] = useState([]);

    return (
        <>
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
                        <Button variant="info" className="btn-fill pull-right themeBtn">Search Traders</Button>
                    </div>
                </Row>
                <hr/>
                <Row className="mt-3 p-3">
                    <h4>Traders List</h4>
                    <Table bordered hover responsive>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Mobile Number</th>
                            <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tradersData.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.address}</td>
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
            {/* <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789"/>
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789"/>
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" />
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" />
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" />
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" />
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" />
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" />
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" />
            <TraderCard name="Dnynaehwar Wackchaure" phone="9999999999" address="Laslgaon, Nashik" aadharno="123456789789" /> */}


        </>
    )
}

export default TradersMainContainer;