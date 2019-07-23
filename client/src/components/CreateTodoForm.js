import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from "../context/auth";
import Switch from '@material-ui/core/Switch';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import gql from "graphql-tag";
import {useForm} from "../util/hooks";
import {useMutation} from "@apollo/react-hooks";
import {FETCH_TODOS_QUERY} from "../util/graphql";

/**
 * @return {boolean}
 */
function CreateTodoForm() {
    const {user} = useContext(AuthContext);

    const {values, onChange, onSubmit, onSwitch} = useForm(createTodoCallback, {
        title: '',
        description: '',
        privateTodo: false,
        priority: 'Low'
    });
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
        console.log(values)
        createTodo();
    }

    return user ? (
        <Paper style={{margin: 25, padding: 25}}>
            <form onSubmit={onSubmit} className='create-todo-container'>
                <div className="create-todo-first">
                    <h3>Create Todo</h3>
                    <Input
                        placeholder="Title"
                        name="title"
                        value={values.title}
                        onChange={onChange}
                        required
                    />
                    <TextField
                        label="Description"
                        multiline
                        margin="normal"
                        name="description"
                        value={values.description}
                        onChange={onChange}
                    />
                </div>
                <div className="create-todo-second">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Priority</FormLabel>
                        <RadioGroup
                            className="radio-group"
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
                    <FormControlLabel control={<Switch
                        name="privateTodo"
                        onChange={onSwitch}
                        value="values.privateTodo"
                    />} label={values.privateTodo ? 'Private' : "Not private"}/>
                    <Button
                        variant="contained"
                        type="submit"
                        size="small"
                        style={{maxWidth: 150}}
                        disabled={values.title ? false : true}
                    >
                        Create
                    </Button>
                </div>
            </form>
        </Paper>
    ) : false;
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
            priority,
            modifiedAt,
            username,
            privateTodo
        }
    }`;

export default CreateTodoForm;