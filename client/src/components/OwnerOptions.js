import React from 'react';
import Grid from '@material-ui/core/Grid';

import DeleteButton from './TodoOptions/DeleteButton';
import ToggleCompleteBtn from './TodoOptions/ToggleCompleteBtn';
import EditTodoDialog from "./TodoOptions/EditTodoDialog";

function OwnerOptions({todo, refetch}) {
    const {completed, id} = todo;
    const toggleOptions = {
      completed,
      id
    };
    return (
        <Grid container item justify="flex-start" alignItems="center" xs={12}>
            <DeleteButton id={id}/>
            <EditTodoDialog id={id} todo={todo} refetch={refetch}/>
            <ToggleCompleteBtn options={toggleOptions} refetch={refetch}/>
        </Grid>
    )
}

export default OwnerOptions;