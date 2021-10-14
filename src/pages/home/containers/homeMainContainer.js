import React, {useEffect} from 'react';
import {Carousel} from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import { useSelectors, useActions } from '../hooks';
import { useActions as useLoginActions } from '../../login/hooks';
import vegetable1 from '../../../assets/img/vege1.jpg';
import vegetable2 from '../../../assets/img/vege1.jpg';
import vegetable3 from '../../../assets/img/vege1.jpg';



const HomeMainContainer = (props) => {
    const history = useHistory();
    const { continueUserSession } = useLoginActions();
    useEffect(()=>{
        if(localStorage.getItem('usersData')) {
            continueUserSession(JSON.parse(localStorage.getItem('usersData')));
            history.push("/home");
        }
    },[continueUserSession, history]);

    return (
        <div className="maincontainer">
            <div className="d-flex justify-content-center mb-3 mt-5">
                <Carousel>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={vegetable1}
                            alt="First slide"
                            />
                            <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item interval={1000}>
                            <img
                            className="d-block w-100"
                            src={vegetable2}
                            alt="Second slide"
                            />
                            <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src={vegetable3}
                            alt="Third slide"
                            />
                            <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </div>
        </div>
    )
}

export default HomeMainContainer;