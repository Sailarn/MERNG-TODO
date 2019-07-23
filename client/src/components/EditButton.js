import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Icon from '@material-ui/core/Icon';

function EditButton(){
    return(
        <IconButton aria-label="Delete" style={{marginRight: 10}}>
            <Icon>edit_icon</Icon>
        </IconButton>
    )
}

export default EditButton;