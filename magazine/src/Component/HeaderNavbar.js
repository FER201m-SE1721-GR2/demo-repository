import { Nav, Container, Image, Row, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
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
                        <NavLink to={'/new'} className={({ isActive }) => isActive ? 'link-active' : 'link'}><span>Bài đăng mới</span></NavLink>

                        <NavLink to={'/category'}>Khám phá thể loại</NavLink>
                        <NavLink to={'/post'} className={({ isActive }) => isActive ? 'link-active' : 'link'}>Các bài đăng</NavLink>
                        <a href="https://www.reddit.com/r/gaming/" className={({ isActive }) => isActive ? 'link-active' : 'link'}>Cộng đồng</a>


                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '40px' }}>
                        <NavDropdown title={<FontAwesomeIcon icon={faCircleUser} className="icon_size" />}>
                            <NavDropdown.Item>
                                {
                                    (user != undefined) ?
                                            <Nav> Xin chào {user}
                                                <NavLink to={'/login'}>Đăng xuất</NavLink>
                                                <NavLink to={'/login'}/>
                                                    {
                                                        userrole == true ? <Nav>
                                                            <NavLink to={'/post/management'} style={{ color: 'black' }}>
                                                                Admin
                                                            </NavLink>
                                                        </Nav>
                                                            :
                                                        <></>
                                                    }
                                                
                                            </Nav>
                                        :
                                        <Nav>
                                            <NavLink to={'/login'}>Đăng nhập</NavLink>
                                            <NavLink to={'/register'}>Đăng kí</NavLink>
                                        </Nav>
                                }
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </Row>
            </Container>
        </Row>
    );
};
export default HeaderApp;