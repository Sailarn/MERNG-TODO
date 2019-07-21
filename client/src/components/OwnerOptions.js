import React from 'react';
import {MDBCol} from "mdbreact";

import DeleteButton from './DeleteButton';
import ToggleCompleteBtn from './ToggleCompleteBtn';
import EditButton from './EditButton';

function OwnerOptions({options: {completed, id}}) {
    const toggleOptions = {
      completed,
      id
    };
    return (
        <MDBCol lg="2" xl="2">
            <DeleteButton/>
            <EditButton/>
            <ToggleCompleteBtn options={toggleOptions}/>
        </MDBCol>
    )
}

export default OwnerOptions;