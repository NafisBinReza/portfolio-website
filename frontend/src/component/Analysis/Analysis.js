import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "../../asset/css/bootstrap.min.css"
import "./Analysis.css";
import {Bar, ResponsiveContainer, BarChart, XAxis, Tooltip} from "recharts";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from 'react-html-parser';
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Analysis extends Component {

    constructor() {
        super();
        this.state={
            data:[],
            desc:"",
            loading: true,
            wrong: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ChartData).then(result=>{

            if(result == null){
                this.setState({wrong: true, loading: false})
            }

            else{
                this.setState({data:result, loading: false})
            }

        })

        RestClient.GetRequest(AppUrl.TechDesc).then(result=>{
            this.setState({desc:result[0]['tech_description']})
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
        var blue = "rgba(0, 115, 230, 0.8)"
        return (
            <Fragment>
                <Container className="text-center">
                    <h1 className="sectionTitle">Technologies Used</h1>
                    <Row>
                        <Col style={{width:'100%', height:'300px'}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart width={100} height={300} data={this.state.data}>
                                    <XAxis dataKey={'x_data'}></XAxis>
                                    <Tooltip></Tooltip>
                                    <Bar dataKey="y_data" fill={blue}>
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify des"> { ReactHtmlParser(this.state.desc) }</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
        }
    }
}

export default Analysis;