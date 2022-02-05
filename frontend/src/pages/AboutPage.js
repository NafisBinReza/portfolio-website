import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AboutDescription from "../component/aboutDescription/AboutDescription";
import Footer from "../component/Footer/Footer";

class AboutPage extends Component {

    componentDidMount() {
        window.scroll(0,0)
    }

    render() {
        return (
            <Fragment>
                <TopNavigation title="About"></TopNavigation>
                <PageTop pageTitle="About Me"></PageTop>
                <AboutDescription></AboutDescription>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default AboutPage;