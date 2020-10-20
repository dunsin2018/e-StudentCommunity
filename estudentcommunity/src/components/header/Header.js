import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import { FaSistrix } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <Link to="/" className="mr-2">
        LOGO
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavbarText className="mr-2">
            <Link to="/about">About</Link>
          </NavbarText>
          <NavbarText className="mr-2">
            <Link to="/ambassador">Ambassador</Link>
          </NavbarText>
          <NavbarText className="mr-2">
            <Link to="/events">Events</Link>
          </NavbarText>
          <NavbarText className="mr-2">
            <Link to="/blog">Blog</Link>
          </NavbarText>
          <NavbarText className="mr-2">
            <Link to="/gallery">Gallery</Link>
          </NavbarText>
          <NavbarText className="mr-2">
            <Link to="/contact">Contact</Link>
          </NavbarText>
          {/* <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Option 1</DropdownItem>
              <DropdownItem>Option 2</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Reset</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown> */}
        </Nav>
        <NavbarText className="mr-2" style={{ cursor: "pointer" }}>
          <Input placeholder="search" />
        </NavbarText>
        <NavbarText className="mr-2">
          <Link to="/sign-in">
            <Button size="sm" color="primary" className="text-uppercase">
              Sign in
            </Button>
          </Link>
        </NavbarText>
        <NavbarText>
          <Link to="/sign-up">
            <Button size="sm" color="warning" className="text-uppercase">
              Sign up
            </Button>
          </Link>
        </NavbarText>
      </Collapse>
    </Navbar>
  );
};

export default Header;
