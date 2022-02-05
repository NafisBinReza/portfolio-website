import React, {Component, Fragment} from 'react';
import "./Footer.css";
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Footer extends Component {

    constructor() {
        super();
        this.state={
            address: "",
            email: "",
            phone: "",
            facebook: "",
            youtube: "",
            github: "",
            footer_credit: "",
            loading: true,
            wrong: false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.Footer).then(result=>{

            if(result == null){
                this.setState({wrong: true, loading: false})
            }

            else{
                this.setState({
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    facebook:result[0]['facebook'],
                    youtube:result[0]['youtube'],
                    github:result[0]['github'],
                    footer_credit:result[0]['footer_credit'],
                    loading: false
                })            }

        }).catch(error=>{
            this.setState({wrong: true, loading: false})
        })
    }

    render() {

        if(this.state.loading == true && this.state.wrong == false){
            return <Loading/>
        }

        else if(this.state.loading == false && this.state.wrong == true){
            return <WentWrong/>
        }
        else{

        return (
            <Fragment>
                <Container fluid={true} className="footerSec text-center">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h2 className="serviceName">Follow Me</h2>
                            <a target="_blank" href={"//"+this.state.facebook} className="socialLink"><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                            <a target="_blank" href={"//"+this.state.youtube} className="socialLink"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a><br/>
                            <a target="_blank" href={"//"+this.state.github} className="socialLink"><FontAwesomeIcon icon={faGithub} /> Github</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h2 className="serviceName">Contact</h2>
                            <a className="footerLink"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</a> <br/>
                            <a className="footerLink"><FontAwesomeIcon icon={faAddressBook} /> {this.state.address}</a> <br/>
                            <a className="footerLink"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</a>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h2 className="serviceName">Information</h2>
                            <Link to="/about" className="footerLink">About Me</Link><br/>
                            <Link to="/resume" className="footerLink">My Resume</Link><br/>
                            <Link to="/contact" className="footerLink">Contact Me</Link>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="text-justify p-5">
                            <h2 className="serviceName">Legal</h2>
                            <Link to="/refund" className="footerLink">Refund Policy</Link><br/>
                            <Link to="/privacy" className="footerLink">Privacy Policy</Link><br/>
                            <Link to="/terms" className="footerLink">Terms and Conditions</Link>
                        </Col>
                    </Row>
                </Container>

                <Container fluid={true} className="text-center copyrightSec">

                    <a href="#" className="copyrightLink">nafisbinreza.com &copy; 2021</a>

                </Container>

            </Fragment>
        );
    }
    }
}

export default Footer;