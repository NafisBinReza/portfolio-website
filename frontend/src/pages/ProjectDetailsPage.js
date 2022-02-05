import React, {Component, Fragment} from 'react';
import TopNavigation from "../component/TopNavigation/TopNavigation";
import ProjectDetails from "../component/ProjectDetails/ProjectDetails";
import Footer from "../component/Footer/Footer";
import PageTop from "../component/PageTop/PageTop";

class ProjectDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            projectPassedID: match.params.projectID,
            projectPassedName: match.params.projectName
        }
    }


    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>

                <TopNavigation title="Project Details"/>
                <PageTop  pageTitle={this.state.projectPassedName}/>
                <ProjectDetails id={this.state.projectPassedID}/>
                <Footer/>

            </Fragment>
        );
    }
}

export default ProjectDetailsPage;