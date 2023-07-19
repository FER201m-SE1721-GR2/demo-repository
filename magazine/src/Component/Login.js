import { useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassWord] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        sessionStorage.clear();
    }, []);


    useEffect(() => {

        fetch(" http://localhost:9999/users").then((res) => res.json())
            .then((data) => {
                setUsers(data)
            }).catch(err => {
                console.log(err.message)
            })
    }, [])

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {

            let temp = [...users];
            let currentUser = temp.filter(user => user.username === username)

            if (currentUser.length == 0 || currentUser === undefined) {
                toast.error('Username does not exist! ')
                setPassWord('')
            } else {
                fetch("http://localhost:9999/users/" + currentUser[0].id).then((res) => {

                    return res.json();
                }).then((resp) => {

                    if (Object.keys(resp).length === 0) {
                        toast.error('Please Enter username');
                    } else {
                        if (resp.password === password) {
                            toast.success('Success');
                            sessionStorage.setItem('uid', resp.id);
                            sessionStorage.setItem('userrole', resp.rId);
                            sessionStorage.setItem('uName', resp.username)
                            navigate('/')
                            window.location.reload();
                        } else {
                            setPassWord('')
                            toast.error('Please Enter valid credentials');
                        }
                    }
                }).catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
            }
        }

    }


    const validate = () => {
        let result = true;
        if (username === '' || username === null) {
            result = false;
            toast.warning('Please Enter username');
        }
        if (password === '' || password === null) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    }




    return (
        <div className="background_login d-flex justify-content-center align-items-center " >
            <ToastContainer />


            <form style={{ backgroundColor: 'white', marginTop: '100px', padding: '80px', borderRadius: '20px' }} onSubmit={ProceedLogin}>
                <h1 style={{ textAlign: 'center', paddingBottom: '30px', textTransform: 'uppercase' }}>
                    Login
</h1>
                <div className="form-outline mb-4">
                    <label className="form-label" for="form2Example1">Username</label>
                    <input type="text" id="form2Example1" class="form-control"
                        value={username} onChange={e => setUsername(e.target.value)} />

                </div>


                <div className="form-outline mb-4">
                    <label class="form-label" for="form2Example2" >Password</label>
                    <input type="password" id="form2Example2" class="form-control"
                        value={password} onChange={e => setPassWord(e.target.value)} />

                </div>

                <button type="submit" className="btn btn-primary btn-block mb-4" >Sign in</button>


                <div className="text-center">
                    <p>Not a member? <a href="/register">Register</a></p>

                </div>
            </form>

        </div>
    );
}

export default Login;