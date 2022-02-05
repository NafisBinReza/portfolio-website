import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./TopNavigation.css";
import "../../asset/css/responsive.css"
import blueLogo from "../../asset/image/blueLogo.png";
import whiteLogo from "../../asset/image/whiteLogo.svg";
import {NavLink} from "react-router-dom";


class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state={
            navBarTitle: 'navTitle',
            navBarLogo: [blueLogo],
            variant: 'dark',
            navBack: "navBack",
            navItem: "navItem",
            pageTitle: props.title
        }
    }

    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({navBarTitle:'navTitleScroll', variant:'light', navBarLogo:[whiteLogo], navBack:'navBackScroll', navItem: 'navItemScroll'})
        }
        else if (window.scrollY<100){
            this.setState({variant:'dark', navBarTitle:'navTitle', navBarLogo: [blueLogo], navBack: 'navBack', navItem: 'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.onScroll)
    }


    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.variant}>
                    <Navbar.Brand><NavLink className={this.state.navBarTitle} to="/"><img src={this.state.navBarLogo}/> Nafis Bin Reza</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/project">PROJECTS</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#00a8ee'}} className={this.state.navItem} to="/about">ABOUT</NavLink></Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;