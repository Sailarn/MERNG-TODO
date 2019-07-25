import React, {useContext, useState} from "react";
import {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';

import {AuthContext} from "../context/auth";
import {useForm} from "../util/hooks";

function Login(props) {
    const context = useContext(AuthContext);
    const [errors, setErrors] = useState({});
    const [connectionError, setConnectionError] = useState('');
    const [open, setOpen] = useState(false);
    const {onChange, onSubmit, values} = useForm(loginUserCallback, {
        username: '',
        password: ''
    });

    const [loginUser, {loading}] = useMutation(LOGIN_USER, {
        update(_, {data: {login: userData}}) {
            context.login(userData);
            props.history.push('/');
        },
        onError(err) {
            if (err.graphQLErrors[0]) {
                setErrors(err.graphQLErrors[0].extensions.exception.errors);
            }
            else{
                setConnectionError(err.message);
                setOpen(true);
            }
        },
        variables: values
    });

    function loginUserCallback() {
        return loginUser();
    }
    return (
        <Grid container item justify="center" alignItems="center" xs={12}>
            <Card style={{margin: 25, width: '100%', maxWidth: '500px'}}>
                <CardContent>
                    <Typography variant="h4" component="h2" gutterBottom>
                        Sign in
                    </Typography>
                    <form onSubmit={onSubmit} className="form-layout">
                        <FormControl
                            error={!!(errors.username || errors.general)}
                            style={{width: '100%'}}
                        >
                            <InputLabel htmlFor="component-error">Username</InputLabel>
                            <Input
                                name="username"
                                value={values.username}
                                onChange={onChange}
                                type="text"
                                placeholder="Username..."
                            />
                            <FormHelperText>{errors.username || errors.general}</FormHelperText>
                        </FormControl>
                        <FormControl
                            error={!!(errors.password || errors.general)}
                            style={{width: '100%', margin: '10px 0'}}
                        >
                            <InputLabel htmlFor="component-error">Password</InputLabel>
                            <Input
                                name="password"
                                value={values.password}
                                onChange={onChange}
                                type="password"
                                placeholder="Password..."
                            />
                            <FormHelperText>{errors.password}</FormHelperText>
                        </FormControl>
                        <div style={{position: 'relative'}}>
                            <Button
                                variant="contained"
                                color="primary"
                                style={{margin: 8}}
                                type="submit"
                                disabled={loading}
                            >
                                Log in
                                {loading ?
                                    <CircularProgress size={24}
                                                      style={{
                                                          color: 'green',
                                                          position: 'absolute',
                                                          top: '50%',
                                                          marginTop: -12,
                                                          marginBottom: -12
                                                      }}
                                    /> : false}
                            </Button>
                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                open={open}
                                autoHideDuration={6000}
                                onClose={() => setOpen(false)}
                                message={<span>{connectionError}</span>}
                            />
                        </div>
                    </form>
                </CardContent>
            </Card>
        </Grid>
    )
}

const LOGIN_USER = gql`
    mutation login(
        $username: String!
        $password: String!
    ){
        login(
            username: $username,
            password: $password
        ){
            id email username createdAt token
        }
    }`;

export default Login;