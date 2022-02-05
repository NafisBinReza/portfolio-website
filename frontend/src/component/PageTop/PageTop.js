import React, {Component, Fragment} from 'react';
import "./PageTop.css";
import {Button, Col, Container, Row} from "react-bootstrap";
import axios from "axios";

class PageTop extends Component {
    render() {



        return (
            <Fragment>
                <div className="topFixedPage">
                    <div className="topPageOverlay">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="subtitleContent">{this.props.pageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PageTop;