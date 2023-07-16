import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, json, useNavigate, useParams } from "react-router-dom";

const Login = () => {

    const [id, setid] = useState("");
    const [user, setuser] = useState('');
    const [password, setpassword] = useState('');
    const [validation, valichange] = useState(false);
    const { userid } = useParams();
    const nagivate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const studata = ({ id, user, password });
        fetch("http://localhost:9999/new_users", {
            method: "Post",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(studata)
        }).then((res) => {
            alert("Login successfully!")
            nagivate('/')
        }).catch((err) => {
            console.log(err.message);
        })
    };

    return (
        <Row>
            <Container class="vh-100">
                <Row>
                    <Col xs={12}>
                        <section >
                            <div class="container py-5 h-100" >
                                <div class="row d-flex justify-content-center align-items-center h-100">
                                    <div class="col-12 col-md-8 col-lg-6 col-xl-5" style={{ marginTop: "80px" }} >
                                        <div class="card shadow-2-strong" style={{ borderRadius: "1rem" }}>
                                            <div class="card-body p-5 text-center">
                                                <h3 class="mb-5">Sign in</h3>
                                                <div className="card-body">
                                                    <div className="row">
                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Username</label>
                                                                <input required value={user} onMouseDown={e => valichange(true)} onChange={e => setuser(e.target.value)} className="form-control"></input>
                                                                {user.length == 0 && validation && <span className="text-danger">Please enter the username</span>}
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <label>Password</label>
                                                                <input required value={password} onMouseDown={e => valichange(true)} onChange={e => setpassword(e.target.value)} className="form-control"></input>
                                                                {user.length == 0 && validation && <span className="text-danger">Please enter the password</span>}
                                                            </div>
                                                        </div>

                                                        <div className="col-lg-12">
                                                            <div className="form-group">
                                                                <button type="submit" className="btn btn-success">Login</button>
                                                                <span> | </span>
                                                                <Link to="/register" style={{ "text-decoration": "underline" }}>Register</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}

export default Login;
