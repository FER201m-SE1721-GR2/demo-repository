import { Nav, Container, Image, Row, Col, Form, NavDropdown} from "react-bootstrap";
import { NavLink} from "react-router-dom";
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
                        <NavLink to={'/news'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>News</NavLink>
                        <NavDropdown title={<span>Category</span>}>
                            <NavDropdown.Item>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>PC</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Mobile</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>console</NavLink>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>All</NavLink>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Community</NavLink>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>About us</NavLink>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center',marginRight:'40px'}}>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_size" />
                        </NavLink>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faCircleUser} className="icon_size" />
                        </NavLink>
                        <NavLink to={'/'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faBars} className="icon_size" />
                        </NavLink>
                    </div>
                </Row>
            </Container>
        </Row>
    );
};
export default HeaderApp;