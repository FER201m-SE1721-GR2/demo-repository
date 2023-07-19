import { Nav, Container, Image, Row, NavDropdown, Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from './img/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";

const HeaderApp = () => {

    const [users, setUsers] = useState([]);
    let user


    if (sessionStorage.getItem('uName') != null) {
        user = JSON.stringify(sessionStorage.getItem('uName'))

    }
    console.log(user);
    let userrole = JSON.parse(sessionStorage.getItem('userrole'))
    console.log(userrole);

    useEffect(() => {
        fetch(" http://localhost:9999/users").then((res) => res.json())
            .then((data) => {
                setUsers(data)

            }).catch(err => {
                console.log(err.message)
            })
    }, [])

    return (
        <Row className="header-app">
            <Container fluid >
                <Row style={{ justifyContent: 'space-between' }}>
                    <NavLink className="special" to='/'><Image className="logo_size" src={logo}></Image></NavLink>
                    <div style={{ display: 'flex' }}>
                        <NavLink to={'/new'} className={({ isActive }) => isActive ? 'link-active' : 'link'}><span>New</span></NavLink>

                        <NavLink to={'/category'}>Category</NavLink>
                        <NavLink to={'/post'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Post</NavLink>
                        <NavLink to={'/community'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Community</NavLink>


                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
                        <Dropdown>
                            <Dropdown.Toggle variant="link" id="user-dropdown">
                                <FontAwesomeIcon icon={faCircleUser} className="icon_size" />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                {user ? (
                                    <Dropdown.Item as={Link} to="/userprofile">Hello, {user}</Dropdown.Item>
                                ) : (
                                    <>
                                        <Dropdown.Item as={Link} to="/login">
                                            Login
                                        </Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/register">
                                            Sign up
                                        </Dropdown.Item>
                                    </>
                                )}
                                {user && (
                                    <>
                                        <Dropdown.Item as={Link} to="/login">
                                            Log out
                                        </Dropdown.Item>
                                        {userrole && (
                                            <Dropdown.Item as={Link} to="/post">
                                                Manage
                                            </Dropdown.Item>
                                        )}
                                    </>
                                )}
                            </Dropdown.Menu>
                        </Dropdown>
                        <NavLink className={({ isActive }) => isActive ? 'link-active' : 'link'}>
                            <FontAwesomeIcon icon={faBars} className="icon_size" />
                        </NavLink>
                    </div>
                </Row>
            </Container>
        </Row>
    );
};
export default HeaderApp;