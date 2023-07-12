import { Nav, Container, Image, Row, Col, Form, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons';

const HeaderApp = () => {

    return (
        <Row className="header-app">
            <Container fluid >
                <Row style={{ justifyContent: 'space-between' }}>
                    <NavLink className="special" to='/'><Image className="logo_size" src={logo}></Image></NavLink>
                    <div style={{ display: 'flex' }}>
                        <NavLink to={'/news'} className={({ isActive }) => isActive ? 'link-active' : 'link'}><span>News</span></NavLink>

                        <NavLink to={'/category'}>Category</NavLink>
                        <NavLink to={'/community'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Community</NavLink>
                        <NavLink to={'/aboutus'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>About us</NavLink>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
                        <NavLink className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="icon_size" />
                        </NavLink>
                        <NavLink className={({ isActive }) => isActive ? 'link-active' : 'link'} onclick="toggleProfile">
                            <FontAwesomeIcon icon={faCircleUser} className="icon_size" />
                        </NavLink>
                        <div className="profileBox">
                            <ul>
                                <li>Option 1</li>
                                <li>Option 2</li>
                                <li>Option 3</li>
                            </ul>
                        </div>
                        <NavLink className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faBars} className="icon_size" />
                        </NavLink>
                    </div>
                </Row>
            </Container>
        </Row>
    );
    function toggleProfile() {
        var profileBox = document.getElementById("profileBox");
        profileBox.style.display = (profileBox.style.display === "none") ? "block" : "none";
      }
};
export default HeaderApp;