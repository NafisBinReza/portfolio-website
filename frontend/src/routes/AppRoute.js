import React, {Component, Fragment} from 'react';
import {Switch,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ServicePage from "../pages/ServicePage";
import CoursePage from "../pages/CoursePage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import RefundPage from "../pages/RefundPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import PrivacyPage from "../pages/PrivacyPage";
import TermsPage from "../pages/TermsPage";
import ResumePage from "../pages/ResumePage";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>

                <Switch>

                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursePage}/>
                    <Route exact path="/project" component={ProjectsPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/projectDetails/:projectID/:projectName" component={ProjectDetailsPage}/>
                    <Route exact path="/privacy" component={PrivacyPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/resume" component={ResumePage}/>
                    <Route exact path="/courseDetails/:courseID" component={CourseDetailsPage}/>

                </Switch>

            </Fragment>
        );
    }
}

export default AppRoute;