import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import "./ContactSection.css";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class ContactSection extends Component {


    constructor() {
        super();
        this.state={
            address: "",
            email: "",
            phone: ""
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.Footer).then(result=>{
                this.setState({
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone']
                })


        }).catch(error=>{
            return <WentWrong/>
        })
    }

    sendContact(){
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let msg = document.getElementById("msg").value;

        let jsonObject = {name:name, email:email, msg:msg};

        RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(jsonObject)).then(result=>{
            alert(result)
        }).catch(error=>{
            alert(error)
        })
    }

    render() {


        return (
            <Fragment>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName mb-4">Quick Connect</h2>
                            <Form>
                                <Form.Group >
                                    <Form.Label className="formDes">Name</Form.Label>
                                    <Form.Control type="text" id="name" placeholder="Enter your name" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className="formDes">Email</Form.Label>
                                    <Form.Control type="email" id="email" placeholder="Enter your email" />
                                </Form.Group>
                                <Form.Group >
                                    <Form.Label className="formDes">Message</Form.Label>
                                    <Form.Control as="textarea"  rows="3" id="msg" placeholder="Type here!!!" />
                                </Form.Group>


                                <Button variant="primary" onClick={this.sendContact}>
                                    Submit
                                </Button>
                            </Form>
                        </Col>

                        <Col lg={6} md={6} sm={12}>
                            <h2 className="serviceName mb-4">Discuss Now</h2>
                            <p className="footerLink"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p> <br/>
                            <p className="footerLink"><FontAwesomeIcon icon={faAddressBook} /> {this.state.address}</p> <br/>
                            <p className="footerLink"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</p>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default ContactSection;