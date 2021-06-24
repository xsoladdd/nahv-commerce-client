import React from "react";
// import "./header.scss";
import { Link, useHistory } from "react-router-dom";
import cookies from "js-cookie";
import { headerInterface, navbar } from "./interface";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header: React.FC<headerInterface> = ({}) => {
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
                  as={Link}
                  to={to}
                  active={history.location.pathname === to}
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
                    as={Link}
                    to={`${to}${pathLevelTwo}`}
                    key={index}
                    active={history.location.pathname === to}
                  >
                    {name}
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            );
          })}
        </Nav>
        <Nav>
          {cookies.get("access_token") ? (
            <>
              {" "}
              <Nav.Link
                as={Link}
                to="/profile"
                active={history.location.pathname === "/profile"}
              >
                Profile
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/cart"
                active={history.location.pathname === "/cart"}
              >
                Cart
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  cookies.remove("access_token");
                  history.push("/");
                }}
              >
                Sign Out
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link
                as={Link}
                to={"/register"}
                active={history.location.pathname === "/register"}
              >
                Register
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/login"
                active={history.location.pathname === "/login"}
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
