import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Footer from "../component/Footer/Footer";
import RefundDescription from "../component/RefundDescription/RefundDescription";

class RefundPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Refund"></TopNavigation>
                <PageTop pageTitle="Refund Policy"></PageTop>
                <RefundDescription></RefundDescription>
                <Footer></Footer>
            </Fragment>
        );
    }
}

export default RefundPage;