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
import logo from "../../assets/logo.jpeg";
import { useAuthState, useAuthDispatch } from "../../context/auth";
import authActionTypes from "../../context/authActionTypes";
import { auth } from "../../api/firebase.config";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser } = useAuthState();
  const dispatch = useAuthDispatch();

  console.log(currentUser);

  const logoutUser = () => {
    auth
      .signOut()
      .then(() => {
        dispatch({ type: authActionTypes.SIGN_OUT });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar color="dark" dark expand="md">
      <Link to="/" className="mr-4">
        <img src={logo} className="image-fluid" style={{ width: "50px" }} />
      </Link>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>
          <NavbarText className="mr-4">
            <Link to="/about">About</Link>
          </NavbarText>
          <NavbarText className="mr-4">
            <Link to="/ambassador">Ambassador</Link>
          </NavbarText>
          <NavbarText className="mr-4">
            <Link to="/events">Events</Link>
          </NavbarText>
          <NavbarText className="mr-4">
            <Link to="/blog">Blog</Link>
          </NavbarText>
          <NavbarText className="mr-4">
            <Link to="/gallery">Gallery</Link>
          </NavbarText>
          <NavbarText className="mr-4">
            <Link to="/contact">Contact</Link>
          </NavbarText>
        </Nav>
        <NavbarText className="mr-2" style={{ cursor: "pointer" }}>
          <Input placeholder="search" />
        </NavbarText>
        {currentUser ? (
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              {currentUser.displayName}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Link to="/dashboard">Dashboard</Link>
              </DropdownItem>
              {/* <DropdownItem>Option 2</DropdownItem> */}
              <DropdownItem divider />
              <DropdownItem className="text-danger" onClick={logoutUser}>
                <Link to="/">Logout</Link>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        ) : (
          <>
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
          </>
        )}
      </Collapse>
    </Navbar>
  );
};

export default Header;
