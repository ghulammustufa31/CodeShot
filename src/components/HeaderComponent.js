import React, { Component} from 'react';
import { Navbar, Nav, NavLink, NavbarText, NavbarBrand, NavItem, NavbarToggler, Collapse } from 'reactstrap';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
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
                            <NavLink href="/About">
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
                        <NavLink href="/login">
                            <span className="fa fa-arrow-right fa-lg"></span> Login
                        </NavLink>
                    </NavbarText>
                    
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;