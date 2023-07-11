import { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Link, json, useNavigate,useParams } from "react-router-dom";

const Login = () => {

const[id,setid]=useState("");
const [user,setuser] = useState('');
const [password,setpassword] = useState('');
const[validation,valichange]=useState(false);
const { userid } = useParams();
const nagivate=useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();
        const studata = ({id,user,password});
        fetch("http://localhost:9999/new_users",{
        method:"Post",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(studata)
        }).then((res)=>{
           alert("Login successfully!")
           nagivate('/')
        }).catch((err)=>{
           console.log(err.message);
        })
      };

    return (
        <Row>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="offset-lg-3 col-lg-6">
                            <div className="row">
                                <Form className="container" onSubmit={handleSubmit}>
                                    <div className="card" style={{ "textAlign": "left" }}>
                                        <div className="card-title">
                                            <h2>User Login</h2>
                                        </div>
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Username</label>
                                                        <input required value={user} onMouseDown={e=>valichange(true)} onChange={e=>setuser(e.target.value)} className="form-control"></input>
                                                        {user.length==0 && validation && <span className="text-danger">Please enter the username</span>}
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input required value={password} onMouseDown={e=>valichange(true)} onChange={e=>setpassword(e.target.value)} className="form-control"></input>
                                                        {user.length==0 && validation && <span className="text-danger">Please enter the password</span>}
                                                    </div>
                                                </div>

                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <button type="submit" className="btn btn-success">Login</button>
                                                        <span> | </span>
                                                        <Link to="/register" style={{  "text-decoration": "underline" }}>New User</Link>
                                                    </div>
                                                </div>

                                                
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Row>
    );
}

export default Login;
