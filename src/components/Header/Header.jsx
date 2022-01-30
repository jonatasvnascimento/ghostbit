import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/Header.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="md" className="fixed-top NavbarDark ">
        <div className="container">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Link to="/contato" className="LogoGhostBit">
              GhostBit
            </Link>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/contato" className="styleLinks ">
                  Notícias
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contato" className="styleLinks">
                  Projetos
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contato" className="styleLinks">
                  Portifólio
                </Link>
              </NavItem>
              <NavItem>
                <Link to="/contato" className="styleLinks">
                  Contato
                </Link>
              </NavItem>
              {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
