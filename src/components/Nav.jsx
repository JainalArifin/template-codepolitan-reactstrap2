import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    Button,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Navmenu extends Component{
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render(){
        return (
            <div>
                <Navbar color="light" light expand="md" className="fixed-top">
                <NavbarBrand href="/">
                    <img src="https://www.codepolitan.com/assets/img/codepolitan_logo.png"/>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-left" navbar>
                        <NavItem>
                            <NavLink href="/components/">UPDATE</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">LEARN</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">EVENT</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">TRAINING</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">JOBS</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">
                                <Button outline color="secondary">LOGIN</Button>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                <Button color="info">SIGN UP</Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </div>
        )
    }

}