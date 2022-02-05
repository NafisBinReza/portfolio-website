import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import './Services.css';
import '../../asset/css/bootstrap.min.css';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";


class Services extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading: true,
            wrong: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Services).then(result=>{

            if(result == null){
                this.setState({wrong: true, loading: false})
            }

            else{
                this.setState({myData:result, loading:false})
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
                return <Col lg={4} sm={12}>
                    <div className="serviceCard">
                        <img src={myList.service_img}/>
                        <h2 className="serviceName">{myList.service_name}</h2>
                        <p className="serviceDescription">{myList.service_description}</p>
                    </div>
                </Col>
            })


            return (


                <Fragment>
                    <Container className="text-center">
                        <h1 className="sectionTitle">Services</h1>
                        <Row>

                            {myView}

                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Services;