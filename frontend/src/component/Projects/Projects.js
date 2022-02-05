import React, {Component, Fragment} from 'react';
import './Projects.css';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class Projects extends Component {


    constructor() {
        super();
        this.state={
            myData:[],
            loading: true,
            wrong: false
        }
    }


    componentDidMount() {
        RestClient.GetRequest(AppUrl.Project3).then(result=>{

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

        else{

        const myList = this.state.myData;
        const myView = myList.map(myList=>{
            return <Col lg={4} md={4} sm={12} className="p-2">
                <Card className="cardBody" style={{ width: '18rem' }}>
                    <Card.Img variant="top" className="cardImg" src={myList.img_one} />
                    <Card.Body>
                        <Card.Title className="cardTitle">{myList.project_name}</Card.Title>
                        <Card.Text className="cardContent">{myList.project_description}
                        </Card.Text>
                        <Button variant="primary"><Link className="linkStyle" to={"/ProjectDetails/"+myList.id+"/"+myList.project_name}>Details</Link></Button>
                    </Card.Body>
                </Card>
            </Col>
        })


        return (
            <Fragment>

                <Container className="text-center">
                    <h1 className="sectionTitle">Recent Projects</h1>
                    <Row>

                        {myView}

                    </Row>
                </Container>

            </Fragment>
        );
        }
    }
}

export default Projects;