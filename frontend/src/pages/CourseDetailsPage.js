import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import CourseDetails from "../component/CourseDetails/CourseDetails";
import Footer from "../component/Footer/Footer";
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";

class CourseDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            myCourseID:match.params.courseID,
        }
    }

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>

                <TopNavigation title="Course Details"/>
                <CourseDetails id={this.state.myCourseID}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;