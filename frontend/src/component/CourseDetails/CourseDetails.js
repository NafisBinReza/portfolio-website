import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, LoadingSpinner, Player} from "video-react";
import "./CourseDetails.css";
import ReactHtmlParser from "react-html-parser";
import Loading from "../Loading/Loading";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import WentWrong from "../WentWrong/WentWrong";

class CourseDetails extends Component {

    constructor(props) {
        super(props);
        this.state={
            myCourseID: props.id,
            long_title: "",
            long_des: "",
            total_class: "",
            total_grade: "",
            skill_all: "",
            video_url: "",
            course_link: "",
            loading: true,
            wrong: false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.CourseDetails+this.state.myCourseID).then(result=>{

            if(result == null){
                this.setState({wrong: true, loading: false})
            }

            else{
                this.setState({
                    long_title: result[0]['long_title'],
                    long_des: result[0]['long_des'],
                    total_class: result[0]['total_class'],
                    total_grade: result[0]['total_grade'],
                    skill_all: result[0]['skill_all'],
                    video_url: result[0]['video_url'],
                    course_link: result[0]['course_link'],
                    loading: false
                })
            }

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
                <div className="topFixedPage">
                    <div className="topPageOverlay">
                        <Container className="bannerContent">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3 className="courseFullTitle">{this.state.long_title}</h3>
                                    <h5 className="courseSubTitle">{this.state.total_class}</h5>
                                    <h5 className="courseSubTitle">{this.state.total_grade}</h5>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="courseDetails">{this.state.long_des}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>

                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h1 className="serviceName">Course Highlights</h1>
                            {ReactHtmlParser(this.state.skill_all)}
                            <Button target="_blank" href={"//"+this.state.course_link} variant="primary">More Info</Button>{' '}
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <Player src={this.state.video_url}>
                                <BigPlayButton position="center" />
                                <LoadingSpinner />
                            </Player>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
        }
    }
}

export default CourseDetails;