import React, { Component} from 'react';
import { Navbar, Nav, NavbarText, NavbarBrand, NavItem, NavbarToggler, Collapse, Button, FormFeedback } from 'reactstrap';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBInput } from 'mdbreact';
import { Control, Form, Errors } from 'react-redux-form';
import { Redirect, NavLink } from 'react-router-dom';

// Validations
const required = (val) => val && val.length;
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            loginModal: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            loginModal: !this.state.loginModal
        })
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleSubmit(values) {

        // console.log("Current State is: ", JSON.stringify(values));
        // alert("Thank you for your feedback\n" + JSON.stringify(values).toString());
        this.props.loginUser(values.email, values.password);
        this.props.resetLoginForm();
        this.toggleModal();
    }

    renderFeedback() {
        if (this.props.loggedUser.errMess) {
            return (
                <p className="ml-1 text-danger">{this.props.loggedUser.errMess}</p>   
            );
        }
    }



    renderLoginButton() {
        if (this.props.loggedUser.isLoggedIn) {
            return (
                <>
                <NavItem>
                    <NavLink className="nav-link" to="/dashboard">
                        <span className="fa fa-user fa-lg"></span> {this.props.loggedUser.loggedUser.name} 
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="" onClick={this.props.logoutUser}>
                        <span className="fa fa-arrow-left fa-lg"></span> Logout
                    </NavLink>
                </NavItem>
                
                </>
            );
        }
        else {
            return (
                <NavItem>
                    <NavLink className="nav-link" to="" onClick={this.toggleModal}>
                        <span className="fa fa-arrow-right fa-lg"></span> Login
                    </NavLink>
                </NavItem>
            );
        }
        
    }
    
    redirectToDashoboard() {

        if (this.props.loggedUser.isLoggedIn) {
            return (
                <Redirect to="/dashboard"></Redirect>
            );
        }
    }

    render() {
        
        return (
        
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand className="mr-auto" href="/">
                        <img src="assets/images/codeshot-logo-w.png" height="50" width="81" alt="CodeShot" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink className="nav-link" to="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/library" >
                                <span className="fa fa-codepen fa-lg" style={{color: "blueviolet"}}></span> Library
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to="/about">
                                <span className="fa fa-id-badge fa-lg"></span> About
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="navbar-right" navbar>
                        {this.renderLoginButton()}
                    </Nav>
                    
                    
                    
                    </Collapse>
                </Navbar>

                <MDBModal isOpen={this.state.loginModal} toggle={this.toggleModal} fullHeight position="right">
                    <MDBModalHeader toggle={this.toggleModal}>Sign In</MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12">
                                <Form model="login" onSubmit={(values) => this.handleSubmit(values)}>
                                    <div className="grey-text">
                                        <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail : validEmail
                                        }} />
                                        <Errors className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid Email Address'
                                        }} />
                                        {/* <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                            success="right" /> */}

                                        <Control.text type="password" model=".password" id="password" name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                            required
                                        }} />
                                        <Errors className="text-danger"
                                        model=".password"
                                        show="touched"
                                        messages={{
                                            required: 'Required'
                                        }} />
                                        {/* <MDBInput label="Type your password" icon="lock" group type="password" validate /> */}
                                    </div>
                                    {
                                        this.renderFeedback()
                                    }
                                    <div className="text-center">
                                    <Button type="submit" color="btn btn-primary">Login</Button>
                                    </div>
                                </Form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggleModal}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>

                {this.redirectToDashoboard()}

            </div>

        );
    }
}

export default Header;