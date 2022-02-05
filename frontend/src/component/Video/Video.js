import React, {Component, Fragment} from 'react';
import "./Video.css";
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import "video-react/dist/video-react.css";
import { Player, BigPlayButton, LoadingSpinner } from 'video-react';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Video extends Component {

    constructor() {
        super();
        this.state={
            show: false,
            video_description:"",
            video_url:"",
            loading: true,
            wrong: false
        }
    };

    componentDidMount() {

        RestClient.GetRequest(AppUrl.VideoHome).then(result=>{

            if(result == null){
                this.setState({wrong: true, loading: false})
            }

            else{
                this.setState({video_description:result[0]['video_description'], video_url:result[0]['video_url'], loading:false})
            }
        }).catch(error=>{
            this.setState({wrong: true, loading: false})
        })
    }

    modalClose = () => this.setState({show:false});
    modalOpen = () => this.setState({show:true});

    render() {
        if(this.state.loading == true && this.state.wrong == false){
            return <Loading/>
        }

        else if(this.state.loading == false && this.state.wrong == true){
            return <WentWrong/>
        }

        else {
            return (
                <Fragment>

                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="videoCard text-center">
                                <h1 className="sectionTitle m-0">How I Work</h1>
                                <p className="mt-3"> {this.state.video_description}</p>
                                <p><FontAwesomeIcon className="playBtn" onClick={this.modalOpen}
                                                    icon={faPlayCircle}></FontAwesomeIcon></p>
                            </Col>
                        </Row>
                    </Container>

                    <Modal size={"lg"} show={this.state.show} onHide={this.modalClose}>

                        <Modal.Body>

                            <Player src={this.state.video_url}>
                                <BigPlayButton position="center"/>
                                <LoadingSpinner/>
                            </Player>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="primary" onClick={this.modalClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        }
    }
}

export default Video;