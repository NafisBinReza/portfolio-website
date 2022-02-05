import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import "./AllCourses.css";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";
import WentWrong from "../WentWrong/WentWrong";

class AllCourses extends Component {

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true,
            wrong: false
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseAll).then(result=>{

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
                return <Col lg={6} md={12} sm={12} className="p-2">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="courseImg" src={myList.small_img}/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h5 className="text-justify courseTitle">{myList.short_title}</h5>
                            <p className="text-justify courseDes">{myList.short_des}</p>
                            <Link className="text-justify courseLink float-left" to={"/courseDetails/"+myList.id}>Details</Link>
                        </Col>
                    </Row>
                </Col>
            })


            return (
                <Fragment>
                    <Container className="text-center mt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }



    }
}

export default AllCourses;