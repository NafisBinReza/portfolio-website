import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class RefundDescription extends Component {

    constructor() {
        super();
        this.state={
            desc:"",
            loading: true,
            wrong: false
        }
    }

    componentDidMount() {

        RestClient.GetRequest(AppUrl.Information).then(result=>{

            if(result == null){
                this.setState({wrong: true, loading: false})
            }

            else{
                this.setState({desc:result[0]['refund'], loading: false})            }

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
            <Container className="mt-5">
                <Row>
                    <Col lg={12} md={12} sm={12}>

                        { ReactHtmlParser(this.state.desc) }

                    </Col>
                </Row>
            </Container>
    </Fragment>
        );
        }
    }
}

export default RefundDescription;