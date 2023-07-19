import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const UserProfile = () => {
    const [id, setId] = useState(0)
    const [username, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rId, setRid] = useState(true)

    useEffect(() => {
        if (JSON.parse(sessionStorage.getItem("uid")) == null) {
            window.location.href = "/login";
        } else {
            fetch(
                "http://localhost:9999/users/" +
                JSON.parse(sessionStorage.getItem("uid"))
            )
                .then((res) => res.json())
                .then((result) => {
                    setId(result.id);
                    setUserName(result.username);
                    setPassword(result.password)
                    setEmail(result.email)
                    setRid(result.rId)
                });
        }
    }, []);

    // const ValidateInput = () => {
    //     let isproceed = true;
    //     let errormessage = "Please fill in the blank input";
    //     if (
    //         username.length < 1 || username === "" ||
    //         email.length < 1 || email === "" ||
    //         password.length < 1 || password === ""
    //     ) {
    //         isproceed = false;
    //     }
    //     if (!isproceed) {
    //         toast.warning(errormessage);
    //     } else {
    //         // if (!/^\+\d{1,3}\s\(\d{3}\)\s\d{3}-\d{4}$/.test(phone)) {
    //         //   toast.warning("invalid phone number!");
    //         //   isproceed = false;
    //         // }
    //         if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
    //             isproceed = false;
    //             toast.error("invalid email!");
    //         }
    //     }
    //     return isproceed;
    // };

    const handleSubmit = (e) => {
        e.preventDefault();
        const userProfile = { id, username, email, password, rId}
        if (username.length < 1 || username === "" || email.length < 1 || email === "" || password.length < 1 || password.length == "") {
            toast.warning("Field must not be empty")
        } else {
            fetch("http://localhost:9999/users/" + JSON.parse(sessionStorage.getItem("uid")), {
                method: "PUT",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(userProfile),
            })
                .then(() => {
                    toast.success("Update success!");
                })
                .catch((err) => {
                    toast.error("Failed: " + err.message);
                });
        }
    }

    const HandleLogOut = (e) => {
        sessionStorage.removeItem("uid");
        window.location.href = "/";
    };

    return (
        <Container class="rounded bg-white mt-5 mb-5">
            <Row class="justify-content-center">
                <Col md={5} class="border-right">
                    <div class="p-3 py-5">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4 class="text-right">Profile Settings</h4>
                        </div>
                        <Form onSubmit={e => handleSubmit(e)}>
                            <Row class="mt-3">
                                <Col md={12}>
                                    <input type="hidden" class="form-control" value={id} disabled />
                                </Col>
                                <Col md={12}>
                                    <label class="labels">Name</label>
                                    <input type="text" class="form-control" value={username} onChange={(e) => setUserName(e.target.value)} />
                                </Col>
                                <Col md={12}>
                                    <label class="labels">Email</label>
                                    <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                </Col>
                                <Col md={12}>
                                    <label class="labels">Password</label>
                                    <input type="password" class="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                                </Col>
                                <Col md={12}>
                                    <input type="hidden" class="form-control" value={rId} disabled />
                                </Col>
                            </Row>
                            <Row>
                                <div class="mt-5 text-center">
                                    <button class="btn btn-primary profile-button" type="submit">Save Profile</button> &nbsp;
                                </div>
                                <div class="mt-5 text-center">
                                    <Button
                                        style={{ margin: "0 auto" }}
                                        className="col-lg-2 btn btn-danger"
                                        onClick={(e) => HandleLogOut(e)}
                                    >
                                        Log out
                                    </Button>
                                </div>
                            </Row>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default UserProfile;