import React, {Component, Fragment} from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import './TopBanner.css';
import '../../asset/css/bootstrap.min.css'
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";
class TopBanner extends Component {

    constructor() {
        super();
        this.state={
            title:"",
            subtitle: "",
            loadingDiv: "text-center",
            contentDiv: "d-none",
            wrongDiv: "d-none"
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            if(result == null){
                this.setState({wrongDiv: "text-center", loadingDiv: "d-none"})
            }

            else{
                this.setState({title:result[0]['home_title'], subtitle:result[0]['home_subtitle'], loadingDiv:"d-none", contentDiv:"text-center"})
            }

        }).catch(error=>{
            this.setState({wrongDiv: "text-center", loadingDiv: "d-none"})
        })
    }


    render() {
        return (
            <Fragment >
                <div className="topFixedBanner">
                    <div className="topBannerOverlay">
                        <Container className="topBannerContent">
                            <Row>
                                <Col className={this.state.wrongDiv}>
                                    <WentWrong/>
                                </Col>
                                <Col className={this.state.loadingDiv}>
                                    <Loading/>
                                </Col>
                                <Col className={this.state.contentDiv}>
                                    <h1 className="titleContent">{this.state.title}</h1>
                                    <h4 className="subtitleContent">{this.state.subtitle}</h4>
                                    <Button variant="primary">More Info</Button>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>


            </Fragment>
        );
    }
}

export default TopBanner;