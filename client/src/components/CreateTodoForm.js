import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/auth";
import {MDBCol, MDBRow} from "mdbreact";
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import gql from "graphql-tag";
import {useForm} from "../util/hooks";
import {useMutation} from "@apollo/react-hooks";
import {FETCH_TODOS_QUERY} from "../util/graphql";

function CreateTodoForm() {
    const {user} = useContext(AuthContext);

    const {values, onChange, onSubmit, onSwitch} = useForm(createTodoCallback, {
        title: '',
        description: '',
        privateTodo: false,
        priority: 'Low'
    });
    useEffect(() => {
        console.log(values)
    }, [values])
    const [createTodo, {error}] = useMutation(CREATE_TODO, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_TODOS_QUERY
            });
            data.getTodos = [result.data.createTodo, ...data.getTodos];
            proxy.writeQuery({
                query: FETCH_TODOS_QUERY,
                data
            });
            values.title = '';
            values.description = '';
        }
    });

    function createTodoCallback() {
        createTodo();
    }

    const createTodoForm = user ? (
        <form onSubmit={onSubmit}>
            <MDBRow center>
                <MDBCol md="6">
                    <h3>Create Todo</h3>
                    <Input
                        name="title"
                        value={values.title}
                        onChange={onChange}
                        required
                    />
                    <TextField
                        label="Dense multiline"
                        multiline
                        rowsMax="4"
                        name="description"
                        value={values.description}
                        onChange={onChange}
                    />
                    <Switch
                        name="privateTodo"
                        onChange={onSwitch}
                        value="values.privateTodo"
                    />
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Priority</FormLabel>
                        <RadioGroup
                            aria-label="Priority"
                            name="priority"
                            value={values.priority}
                            onChange={onChange}
                        >
                            <FormControlLabel value="Low" control={<Radio/>} label="Low"/>
                            <FormControlLabel value="Medium" control={<Radio/>} label="Medium"/>
                            <FormControlLabel value="High" control={<Radio/>} label="High"/>
                        </RadioGroup>
                    </FormControl>
                    <Button variant="contained" type="submit">
                        Default
                    </Button>
                </MDBCol>
            </MDBRow>
        </form>
    ) : false;

    return createTodoForm;
}

const CREATE_TODO = gql`
    mutation CreateTodo(
        $title: String!
        $description: String
        $priority: String
        $privateTodo: Boolean
    ){
        createTodo(
            title: $title
            description: $description
            priority: $priority
            privateTodo: $privateTodo
        ){
            title,
            id,
            description,
            completed,
            createdAt,
            priority
        }
    }`;

export default CreateTodoForm;