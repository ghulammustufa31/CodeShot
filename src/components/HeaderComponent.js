import React, { Component} from 'react';
import { Navbar, Nav, NavLink, NavbarText, NavbarBrand, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter, MDBRow, MDBCol, MDBInput } from 'mdbreact';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            loginModal: false
        }

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
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
                            <NavLink href="/home">
                                <span className="fa fa-home fa-lg"></span> Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/library" >
                                <span className="fa fa-codepen fa-lg" style={{color: "blueviolet"}}></span> Library
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">
                                <span className="fa fa-id-badge fa-lg"></span> About
                            </NavLink>
                        </NavItem>
                    </Nav>
                    {/* <Nav className="">
                        <NavItem>
                            <NavLink href="/login">
                                <span className="fa fa-arrow-right fa-lg"></span> Login
                            </NavLink>
                        </NavItem>
                    </Nav> */}
                    <NavbarText>
                        <NavLink onClick={this.toggleModal}>
                            <span className="fa fa-arrow-right fa-lg"></span> Login
                        </NavLink>
                    </NavbarText>
                    
                    </Collapse>
                </Navbar>

                <MDBModal isOpen={this.state.loginModal} toggle={this.toggleModal} fullHeight position="right">
                    <MDBModalHeader toggle={this.toggleModal}>Sign In</MDBModalHeader>
                    <MDBModalBody>
                        <MDBContainer>
                            <MDBRow>
                                <MDBCol md="12">
                                <form>
                                    <div className="grey-text">
                                    <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                        success="right" />
                                    <MDBInput label="Type your password" icon="lock" group type="password" validate />
                                    </div>
                                    <div className="text-center">
                                    <MDBBtn color="primary">Login</MDBBtn>
                                    </div>
                                </form>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </MDBModalBody>
                    <MDBModalFooter>
                    <MDBBtn color="secondary" onClick={this.toggleModal}>Close</MDBBtn>
                    </MDBModalFooter>
                </MDBModal>

            </div>
        );
    }
}

export default Header;