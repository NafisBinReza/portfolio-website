import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import TopBanner from "../component/TopBanner/TopBanner";
import Services from "../component/Services/Services";
import Analysis from "../component/Analysis/Analysis";
import Summary from "../component/Summary/Summary";
import Projects from "../component/Projects/Projects";
import Courses from "../component/Courses/Courses";
import Video from "../component/Video/Video";
import Review from "../component/Review/Review";
import Footer from "../component/Footer/Footer";

class HomePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Home Page"></TopNavigation>
                <TopBanner></TopBanner>
                <Services></Services>
                <Analysis></Analysis>
                <Summary></Summary>
                <Projects></Projects>
                <Courses></Courses>
                <Video></Video>
                <Review></Review>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default HomePage;