import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AllCourses from "../component/AllCourses/AllCourses";
import Footer from "../component/Footer/Footer";
import Analysis from "../component/Analysis/Analysis";

class CoursePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Courses"></TopNavigation>
                <PageTop pageTitle="All Courses"></PageTop>
                <AllCourses></AllCourses>
                <Footer></Footer>

            </Fragment>
        );
    }
}

export default CoursePage;