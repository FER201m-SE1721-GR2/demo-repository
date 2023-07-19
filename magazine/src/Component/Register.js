import { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();

    const [id, setId] = useState(0);
    const [username, setUsername] = useState("");
    const [uNameError, setUNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassWord] = useState("");
    const [passWordError, setPassWordError] = useState("");
    const [rId, setRId] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [isAddAble, setIsAddAble] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        if (
            uNameError !== "" ||
            emailError !== "" ||
            passWordError !== "" ||
            confirmPasswordError !== ""
        ) {
            setIsAddAble(false);
        } else {
            setIsAddAble(true);
        }
    }, [uNameError, emailError, passWordError, confirmPasswordError]);

    useEffect(() => {
        username.length === 0
            ? setUNameError("Username is invalid")
            : setUNameError("");
    }, [username]);

    useEffect(() => {
        email.length === 0 ? setEmailError("Email is invalid") : setEmailError("");
    }, [email]);

    useEffect(() => {
        password.length < 8
            ? setPassWordError("Password is invalid")
            : setPassWordError("");
    }, [password]);

    useEffect(() => {
        password !== confirmPassword
            ? setConfirmPasswordError("Password confirmation is invalid")
            : setConfirmPasswordError("");
    }, [password, confirmPassword]);

    const handleRegister = async (e) => {
        e.preventDefault();
        const newUser = {
            id,
            username,
            email,
            password,
            rId,
        };

        console.log(newUser);

        if (username.length === 0 || password.length === 0) {
            alert("Please fill all fields.");
        } else {
            const registerPermissions = ["admin", "user"];
            const userRole = "admin";

            if (registerPermissions.includes(userRole)) {
                try {
                    const response = await fetch("http://localhost:9999/users", {
                        method: "POST",
                        headers: { "Content-Type": "application/json", Charset: "UTF8" },
                        body: JSON.stringify(newUser),
                    });

                    if (response.ok) {
                        setId(id + 1); // Increment the ID for the next user
                        alert("Registration successful");
                        navigate("/login");
                    } else {
                        throw new Error('Registration failed');
                    }
                } catch (error) {
                    console.log(error.message);
                    setErrorMessage("Registration failed. Please try again.");
                }
            } else {
                alert("You do not have permission to register.");
            }
        }
    };

    return (
        <div className="background_login mb-5 " style={{ margin: "200px 0 200px 0" }}>
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form onSubmit={handleRegister}>
                                        <div className="from-btn-outline mb-4">
                                            <Form.Group className="d-none">
                                                <label>Id</label>
                                                <Form.Control value={id} disabled />
                                            </Form.Group>
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example1cg">
                                                Your Name
                                            </label>
                                            <input
                                                type="text"
                                                id="form3Example1cg"
                                                className="form-control form-control-lg"
                                                value={username}
                                                onChange={(e) => setUsername(e.target.value)}
                                            />
                                            <label style={{ color: "red" }}>{uNameError}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example3cg">
                                                Your Email
                                            </label>
                                            <input
                                                type="email"
                                                id="form3Example3cg"
                                                className="form-control form-control-lg"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <label style={{ color: "red" }}>{emailError}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form3Example4cg">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                id="form3Example4cg"
                                                className="form-control form-control-lg"
                                                value={password}
                                                onChange={(e) => setPassWord(e.target.value)}
                                            />
                                            <label style={{ color: "red" }}>{passWordError}</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label
                                                className="form-label"
                                                id="confirmPassword"
                                                htmlFor="form3Example4cdg"
                                            >
                                                Repeat your password
                                            </label>
                                            <input
                                                type="password"
                                                id="form3Example4cg"
                                                className="form-control form-control-lg"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <label style={{ color: "red" }}>{confirmPasswordError}</label>
                                        </div>
                                        {errorMessage && (
                                            <div className="text-danger mb-3">{errorMessage}</div>
                                        )}
                                        <div className="d-flex justify-content-center">
                                            {!isAddAble ? (
                                                <Button type="submit" className="btn btn-success" disabled>
                                                    Register
                                                </Button>
                                            ) : (
                                                <Button type="submit" className="btn btn-success">
                                                    Register
                                                </Button>
                                            )}
                                        </div>
                                        <p className="text-center text-muted mt-5 mb-0">
                                            Have already an account?{" "}
                                            <a href="./Login" className="fw-bold text-body">
                                                <u>Login here</u>
                                            </a>
                                        </p>
                                        <div className="from-btn-outline mb-4">
                                            <Form.Group className="d-none">
                                                <label>rId</label>
                                                <Form.Control value={rId} disabled />
                                            </Form.Group>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;