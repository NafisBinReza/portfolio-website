import React, {Component, Fragment} from 'react';
import "./Review.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Row} from "react-bootstrap";
import Slider from "react-slick";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import {Link} from "react-router-dom";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Review extends Component {


    constructor() {
        super();
        this.state={
            myData:[],
            loading: true,
            wrong: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ClientReview).then(result=>{

            if(result == null){
                this.setState({wrong: true, loading: false})
            }

            else{
                this.setState({myData:result, loading: false})
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

        else {
            const myList = this.state.myData;
            const myView = myList.map(myList => {
                return <div>
                    <Row className="text-center justify-content-center">
                        <Col lg={6} md={6} sm={12}>
                            <img className="circleImg" src={myList.client_img}/>
                            <h3>{myList.client_title}</h3>
                            <p>{myList.client_description}</p>
                        </Col>
                    </Row>

                </div>
            })


            var settings = {
                dots: true,
                infinite: true,
                autoplay: true,
                speed: 2000,
                autoplaySpeed: 3000,
                slidesToShow: 3,
                slidesToScroll: 3,
                initialSlide: 0,
                responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            initialSlide: 0
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }
                ]
            };
            return (
                <Fragment>

                    <Container className="text-center">
                        <h1 className="sectionTitle">Review</h1>

                        <Slider {...settings}>

                            {myView}


                        </Slider>

                    </Container>

                </Fragment>
            );
        }
    }
}

export default Review;