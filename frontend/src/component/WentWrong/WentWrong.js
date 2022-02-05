import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import warning from "../../asset/image/warning.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>

                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="loaderImg" src={warning}/>
                        </Col>
                    </Row>
                </Container>

            </Fragment>
        );
    }
}

export default WentWrong;