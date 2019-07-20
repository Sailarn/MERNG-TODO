import React, {useContext, useState} from "react";
import {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import {
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBModalFooter,
    MDBInput,
    MDBBtn
} from "mdbreact";

import {AuthContext} from "../context/auth";
import {useForm} from "../util/hooks";
import {Link} from "react-router-dom";

function Register(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    const {onChange, onSubmit, values} = useForm(registerUser, {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [addUser, {loading}] = useMutation(REGISTER_USER, {
        update(_, {data: {register: userData}}) {
            context.login(userData);
            props.history.push('/');
        },
        onError(err) {
            setErrors(err.graphQLErrors[0].extensions.exception.errors);
            console.log(err.graphQLErrors[0].extensions.exception.errors)
        },
        variables: values
    });

    function registerUser() {
        addUser();
    }

    return (
        <form onSubmit={onSubmit} noValidate style={{marginTop: 25}}>
            <MDBRow>
                <MDBCol md="12">
                    <MDBCard>
                        <MDBCardBody className="mx-4">
                            <div className="text-center">
                                <h3 className="dark-grey-text mb-5">
                                    <strong>Register</strong>
                                </h3>
                            </div>
                            <MDBInput
                                label="Username"
                                placeholder="Username..."
                                name="username"
                                value={values.username}
                                group
                                type="text"
                                onChange={onChange}
                                required
                            >
                                <div
                                    className={errors.username || errors.general ? 'invalid-feedback' : 'valid-feedback'}>
                                    {errors.username || errors.general ? errors.username || errors.general : 'Looks good!'}</div>
                            </MDBInput>
                            <MDBInput
                                label="Email"
                                placeholder="Email..."
                                name="email"
                                value={values.email}
                                group
                                type="email"
                                onChange={onChange}
                                required
                            >
                                <div
                                    className={errors.email || errors.general ? 'invalid-feedback' : 'valid-feedback'}>
                                    {errors.email || errors.general ? errors.email : 'Looks good!'}</div>
                            </MDBInput>
                            <MDBInput
                                label="Password"
                                placeholder="Password..."
                                name="password"
                                value={values.password}
                                group
                                type="password"
                                onChange={onChange}
                                required
                            >
                                <div
                                    className={errors.password || errors.general ? 'invalid-feedback' : 'valid-feedback'}>
                                    {errors.password ? errors.password : errors.general ? '' : 'Looks good!'}</div>
                            </MDBInput>
                            <MDBInput
                                label="Confirm Password"
                                placeholder="Confirm password..."
                                name="confirmPassword"
                                value={values.confirmPassword}
                                group
                                type="password"
                                onChange={onChange}
                                required
                            >
                                <div
                                    className={errors.confirmPassword || errors.general ? 'invalid-feedback' : 'valid-feedback'}>
                                    {errors.confirmPassword || errors.general ? errors.confirmPassword : 'Looks good!'}</div>
                            </MDBInput>
                            <div className="text-center mb-3 d-flex justify-content-center">
                                <MDBBtn
                                    type="submit"
                                    gradient="blue"
                                    rounded
                                    className="btn-block z-depth-1a"
                                    style={{width: 200}}
                                >
                                    Sign in
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                        <MDBModalFooter className="mx-5 pt-3 mb-1">
                            <p className="font-small grey-text d-flex justify-content-end">
                                Member?
                                <Link to="/login" className="blue-text ml-1">
                                    Login
                                </Link>
                            </p>
                        </MDBModalFooter>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </form>
    )
}

const REGISTER_USER = gql`
    mutation register(
        $username: String!
        $email: String!
        $password: String!
        $confirmPassword: String!
    ){
        register(
            registerInput: {
                username: $username,
                email: $email,
                password: $password,
                confirmPassword: $confirmPassword
            }
        ){
            id email username createdAt token
        }
    }`;

export default Register;