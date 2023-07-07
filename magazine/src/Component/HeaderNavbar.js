import { Nav, Container, Image, Row, Col, Form, NavDropdown, Navbar, Button, NavLink, Card } from "react-bootstrap";
import logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const HeaderApp = () => {
    return (
        <Row className="header-app">
            <Container fluid >
                <Row style={{ justifyContent: 'space-between'}}>
                    <NavLink  className="special" to='/'><Image className="logo_size" src={logo}></Image></NavLink>
                    <div style={{ display: 'flex'}}>
                        <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>News</Nav.Link>
                        <NavDropdown title={<span>Category</span>}>
                            <NavDropdown.Item>
                                <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>PC</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Mobile</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>console</Nav.Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>All</Nav.Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Community</Nav.Link>
                        <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>About us</Nav.Link>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center',marginRight:'40px'}}>
                        <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_size" />
                        </Nav.Link>
                        <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faCircleUser} className="icon_size" />
                        </Nav.Link>
                        <Nav.Link to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faBars} className="icon_size" />
                        </Nav.Link>
                    </div>
                </Row>
            </Container>
        </Row>
    );
};
export default HeaderApp;