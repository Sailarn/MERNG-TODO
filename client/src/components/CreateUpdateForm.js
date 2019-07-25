import React from 'react';
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";
import {useMutation} from "@apollo/react-hooks";
import gql from "graphql-tag";
import Typography from "@material-ui/core/Typography";

import {useForm} from "../util/hooks";
import {FETCH_TODOS_QUERY} from "../util/graphql";

export default function CreateUpdateForm({query, name, initialState, close, refetch}) {
    const {values, onChange, onSubmit, onSwitch} = useForm(queryTodoCallback, initialState);
    const [queryTodo] = useMutation(query === 'CREATE' ? CREATE_TODO : UPDATE_TODO, {
        variables: values,
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_TODOS_QUERY
            });
            if (!name) {
                refetch();
            } else {
                data.getTodos = [result.data.createTodo, ...data.getTodos];
            }
            proxy.writeQuery({
                query: FETCH_TODOS_QUERY,
                data
            });
            values.title = '';
            values.description = '';
        }
    });

    function queryTodoCallback() {
        if (close) {
            close();
        }
        return queryTodo();
    }

    return (
        <form onSubmit={onSubmit} className='create-todo-container'>
            <div className="create-todo-first">
                {name ? <Typography variant="h5" component="h2">
                    Create Todo
                </Typography> : false}
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
                    checked={values.privateTodo}
                    name="privateTodo"
                    onChange={onSwitch}
                    value={values.privateTodo}
                />} label={values.privateTodo ? 'Private' : "Not private"}/>
                <Button
                    variant="contained"
                    type="submit"
                    size="small"
                    style={{maxWidth: 150}}
                    disabled={!values.title}
                >
                    {name ? 'Create' : 'Update'}
                </Button>
            </div>
        </form>
    )
}
const UPDATE_TODO = gql`
    mutation UpdateTodo(
        $todoId: ID!
        $title: String!
        $description: String
        $completed: Boolean
        $priority: String
        $privateTodo: Boolean){
        updateTodo(
            todoId: $todoId
            title: $title
            description: $description
            completed: $completed
            priority: $priority
            privateTodo: $privateTodo
        ){
            id
            title
            description
            completed
            createdAt
            modifiedAt
            username
            priority
            privateTodo
        }
    }
`;

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
