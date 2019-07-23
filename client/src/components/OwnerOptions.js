import React from 'react';
import Grid from '@material-ui/core/Grid';

import DeleteButton from './DeleteButton';
import ToggleCompleteBtn from './ToggleCompleteBtn';
import EditButton from './EditButton';

function OwnerOptions({options: {completed, id}}) {
    const toggleOptions = {
      completed,
      id
    };
    return (
        <Grid item xs={4}>
            <DeleteButton id={id}/>
            <EditButton/>
            <ToggleCompleteBtn options={toggleOptions}/>
        </Grid>
    )
}

export default OwnerOptions;