import React from 'react';
import {Navbar, Container, Nav, Dropdown} from 'react-bootstrap';
import logo1 from '../../assets/img/logo1.png';
import { useSelectors } from './hooks';



const HeaderMainContainer = (props) => {
    const { loginData = {}, userRole = 1 } = useSelectors();
    return (
        <>
         <Navbar className="headerConatiner navbar-inverse navbar-fixed-top" expand="lg">
          <Container fluid>
            <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
              <Navbar.Brand
                href="#/home"
                className="mr-3"
              >
                <img classs="img-responsive" width="129px" height="" src={logo1} alt="branchImg"></img>
                <span className="ml-2 brandName">TrueTraders24</span>
              </Navbar.Brand>
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
              <span className="navbar-toggler-bar burger-lines"></span>
              <span className="navbar-toggler-bar burger-lines"></span>
              <span className="navbar-toggler-bar burger-lines"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="nav mr-auto" navbar>
                <Nav.Item>
                  <Nav.Link
                    data-toggle="dropdown"
                    href="#/home"
                    className="m-0"
                  >
                    <span className="no-icon">Home</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    className="m-0"
                    href="#/traders"
                  >
                    <span className="d-lg-block">Traders List</span>
                  </Nav.Link>
                </Nav.Item>
                {userRole == 2 ? <Nav.Item>
                  <Nav.Link
                    className="m-0"
                    href="#/profile"
                  >
                    <span className="d-lg-block">Update Profile</span>
                  </Nav.Link>
                </Nav.Item> : null}
                {userRole == 3 ? <Nav.Item>
                  <Nav.Link
                    className="m-0"
                    href="#/reviewrating"
                  >
                    <span className="d-lg-block">Verify Reviews</span>
                  </Nav.Link>
                </Nav.Item> : null}
                {userRole == 3 ? <Nav.Item>
                  <Nav.Link
                    className="m-0"
                    href="#/reviewTraders"
                  >
                    <span className="d-lg-block">Verify Traders</span>
                  </Nav.Link>
                </Nav.Item> : null}
                {userRole == 3 ? <Nav.Item>
                  <Nav.Link
                    className="m-0"
                    href="#/customers"
                  >
                    <span className="d-lg-block">Customers List</span>
                  </Nav.Link>
                </Nav.Item> : null}
              </Nav>
              <Nav className="ml-auto ms-auto" navbar>
                <>
                  {!loginData.OTP ?
                    <>
                      <Dropdown as={Nav.Item}>
                        <Dropdown.Toggle
                          aria-expanded={false}
                          aria-haspopup={true}
                          as={Nav.Link}
                          data-toggle="dropdown"
                          id="navbarDropdownMenuLink"
                          variant="default"
                          className="m-0"
                          drop='start'
                        >
                          <span className="no-icon">Register</span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                          <Dropdown.Item
                            href="#/signup?type=2"
                          >
                            Traders Registration
                          </Dropdown.Item>
                          <div className="divider"></div>
                          <Dropdown.Item
                            href="#/signup?type=1"
                          >
                            Customer Registration
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                      <Nav.Item>
                        <Nav.Link
                          className="m-0"
                          href="#/login"
                        >
                          <span className="no-icon">Login</span>
                        </Nav.Link>
                      </Nav.Item>
                    </> 
                    : 
                    <Nav.Item>
                      <Nav.Link
                        className="m-0"
                        href="#/login?logout=true"
                      >
                        <span className="no-icon">Logout</span>
                      </Nav.Link>
                    </Nav.Item>
                    }
                 
                </>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}

export default HeaderMainContainer;