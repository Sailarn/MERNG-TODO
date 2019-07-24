import React, {useContext} from 'react';
import {AuthContext} from "../context/auth";
import Paper from '@material-ui/core/Paper';
import CreateUpdateForm from "./CreateUpdateForm";

/**
 * @return {boolean}
 */
function CreateTodo() {
    const {user} = useContext(AuthContext);
    const initialState = {
        title: '',
        description: '',
        privateTodo: false,
        priority: 'Low'
    };
    return user ? (
        <Paper style={{margin: 25, padding: 25}}>
            <CreateUpdateForm query='CREATE' name='Create Todo' initialState={initialState}/>
        </Paper>
    ) : false;
}


export default CreateTodo;