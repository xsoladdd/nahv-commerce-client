import React, { useState } from "react";
// import "./header.scss";
import { NavLink, useHistory, Link } from "react-router-dom";
import cookies from "js-cookie";
import { headerInterface, navbar } from "./interface";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header: React.FC<headerInterface> = ({ accessToken, logout }) => {
  const history = useHistory();

  const navBar: navbar[] = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "/shop",
      name: "Shop",
    },
    {
      to: "/brand",
      name: "Brands",
      items: [
        {
          name: "Lenovo",
          to: "/lenovo",
        },
        {
          name: "DELL",
          to: "/dell",
        },
        {
          name: "HP",
          to: "/hp",
        },
        {
          name: "MSI",
          to: "/msi",
        },
        {
          name: "Alienware",
          to: "/alienware",
        },
      ],
    },
  ];

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to={"/"}>
        NAHV STORE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {navBar.map(({ name, to, items }, index) => {
            if (typeof items === "undefined") {
              return (
                <Nav.Link
                  key={index}
                  as={NavLink}
                  exact={true}
                  activeClassName="active"
                  to={to}
                  // activeClass={"active"}
                >
                  {name}
                </Nav.Link>
              );
            }
            return (
              <NavDropdown
                title={name}
                id="collasible-nav-dropdown"
                key={index}
              >
                {items.map(({ to: pathLevelTwo, name }, index) => (
                  <NavDropdown.Item
                    as={NavLink}
                    activeClassName="active"
                    exact={true}
                    to={`${to}${pathLevelTwo}`}
                    key={index}
                  >
                    {name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            );
          })}
        </Nav>
        <Nav>
          {accessToken ? (
            <>
              {" "}
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/profile"
                // activeStyle={"active"}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/cart"
                exact={true}
              >
                Cart
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  logout();
                  // setIsAuthenticated(false);
                  history.push("/");
                }}
              >
                Sign Out
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to={"/register"}
                exact={true}
              >
                Register
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                activeClassName="active"
                to="/login"
                exact={true}
              >
                Sign In
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;
