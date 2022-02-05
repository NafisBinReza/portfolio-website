import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import Services from "../component/Services/Services";
import ContactSection from "../component/ContactSection/ContactSection";
import Footer from "../component/Footer/Footer";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"/>
                <PageTop pageTitle="Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>



            </Fragment>
        );
    }
}

export default ServicePage;