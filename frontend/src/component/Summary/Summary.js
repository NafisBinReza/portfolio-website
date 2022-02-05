import React, {Component, Fragment, useState} from 'react';
import "./Summary.css"
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from "react-countup";
// import VisibilitySensor from "react-visibility-sensor/visibility-sensor";

class Summary extends Component {

    render() {
        return (
            <Fragment>
                <div className="summaryBack mt-5">
                    <div className="summaryOverlay">
                        <Container className="text-center">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h1 className="countNumber">


                                                    <CountUp start={0} end={100}>
                                                        {({ countUpRef, start }) => (
                                                            // <VisibilitySensor onChange={start} delayedCall>
                                                            <div>
                                                                <span ref={countUpRef} />
                                                            </div>
                                                            // </VisibilitySensor>
                                                        )}
                                                    </CountUp>



                                            </h1>
                                            <h4 className="countTitle">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h1 className="countNumber">

                                                <CountUp start={0} end={100} delay={5}></CountUp>

                                            </h1>
                                            <h4 className="countTitle">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card style={{ width: '18rem', marginTop:'18%', borderRadius:'7px' }}>
                                        <Card.Body>
                                            <Card.Title className="cardTitle">How I Work</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Analysis and Planning</p>
                                                <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding and Testing</p>
                                                <p className="cardSubtitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Deploy and Maintanance</p>
                                            </Card.Text>
                                            <Button variant="primary">Learn More</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Summary;