import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import PageTop from "../component/PageTop/PageTop";
import AllProjects from "../component/AllProjects/AllProjects";
import Footer from "../component/Footer/Footer";

class ProjectsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Projects"></TopNavigation>
                <PageTop pageTitle="All Projects"></PageTop>
                <AllProjects></AllProjects>
                <Footer></Footer>


            </Fragment>
        );
    }
}

export default ProjectsPage;