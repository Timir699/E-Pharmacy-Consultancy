import React, { useContext, useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Login.css'
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { useHistory, useLocation } from 'react-router';
const Login = () => {

    // FaceBook & resent passwords code commented.Near future will implement those functionality

    // react-router hooks
    const location = useLocation()
    const history = useHistory()

    // hooks
    const { signInWithGoogle, signInWithGithub, signInWithFacebook, createWithEmail, user, registerLogin, setRegisterLogin, error, signInWithEmail, success, setSuccess, resetPass, setIsLoading, setError, setUser } = useAuth()


    // component State
    const [isLogin, setIsLogin] = useState(false)

    // Functions
    const checkLogin = (e) => {
        setIsLogin(e.target.checked);
    }
    const formHandler = (e) => {
        if (registerLogin?.password?.length < 6) {
            setError("pass must be 6 characters")
        }
        if (!isLogin) {
            createWithEmail()
        } else {
            signInWithEmail()
        }
        setRegisterLogin({
            [e.target.name]: ''
        })
        e.preventDefault()
    }
    const handleChange = (e) => {
        setRegisterLogin({
            ...registerLogin,
            [e.target.name]: e.target.value
        })
    }
    const signInWithGoogleHandler = () => {
        signInWithGoogle()
            .then(result => {
                setUser(result.user);
                history.push(location.state?.from || '/')
                setSuccess("Successfully Registered")
                setError('')
            })
            .catch((error) => {
                setSuccess('')
                setError(error.message)
            }).finally(() => setIsLoading(false))
    }

    return (
        <div className="login text-center">

            <h2 className="my-3">{user.email ? "" : "Please log in for cart & shipping"}</h2>

            <h2 className="my-3">{!isLogin ? "Register Your Account" : "Login"}</h2>

            <Container>
                {/* registration & Login form */}
                <Form onSubmit={formHandler}>

                    {!isLogin ? < Form.Group onChange={(e) => handleChange(e)} className="mb-3" controlId="formBasicEmail"
                    >
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Name" value={registerLogin.name} name="name" />
                    </Form.Group> : ""}

                    <Form.Group className="mb-3" onChange={(e) => handleChange(e)} controlId="formBasicEmail" value={registerLogin.email}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="email" required />
                    </Form.Group>

                    <Form.Group required className="mb-3" onChange={(e) => handleChange(e)} value={registerLogin.password} controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" required />
                    </Form.Group>

                    <h3>You Can also login with</h3>

                    <FcGoogle style={{ fontSize: "50px", cursor: "pointer" }} onClick={signInWithGoogleHandler} />

                    <BsGithub style={{ fontSize: "50px", cursor: "pointer", margin: "0px 20px " }} onClick={signInWithGithub} />
                    {/* <BsFacebook onClick={signInWithFacebook} style={{ fontSize: "50px", cursor: "pointer", color: "#0C86EE" }} /> */}

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check onClick={checkLogin} type="checkbox" label="Already registered!! Click Here for log in" />
                    </Form.Group>

                    <h3 className="text-danger">{error}</h3>
                    <h3 className="text-success">{success}</h3>

                    <Button className="my-3" variant="warning" type="submit">
                        {!isLogin ? "Register" : "Login"}
                    </Button>
                    {/* <Button onClick={handleResetPass} className="my-3" variant="warning">
                        Reset Password
                    </Button> */}
                </Form>

            </Container>
        </div >
    );
};

export default Login;