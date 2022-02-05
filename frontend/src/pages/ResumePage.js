import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import RefundDescription from "../component/RefundDescription/RefundDescription";
import Footer from "../component/Footer/Footer";

class ResumePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Resume"></TopNavigation>
                <PageTop pageTitle="My Resume"></PageTop>
                <RefundDescription></RefundDescription>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default ResumePage;