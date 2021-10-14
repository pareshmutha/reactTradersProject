import React from 'react';
import {Card, Image, Row, Col} from 'react-bootstrap';
import { Phone, Geo, CreditCard2Front } from 'react-bootstrap-icons';
import vegetable1 from '../../../assets/img/vege1.jpg';


const TraderCard = (props) =>{
    const {name = '', phone = '', address = '', aadharno = ''} = props;
    return (
        <Card style={{ width: '38rem' }} className="mt-3">
                <Card.Body>
                    <Row>
                        <Col xs={6} md={4}>
                            <Image src={vegetable1} width="171px" roundedCircle />
                        </Col>
                        <Col xs={6} md={8}>
                            <h4 className="mb-2">{name}</h4>
                            <div><Phone className="mr-2"/> {phone}</div>
                            <div><Geo className="mr-2"/> {address}</div>
                            <div><CreditCard2Front className="mr-2"/> {aadharno}</div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
    )
}

export default TraderCard;