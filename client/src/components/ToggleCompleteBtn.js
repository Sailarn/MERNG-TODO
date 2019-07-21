import React, {useState, useEffect} from 'react';
import {useMutation} from "@apollo/react-hooks";
import gql from 'graphql-tag';
import {MDBBtn} from "mdbreact";

function ToggleCompleteBtn({options: {completed, id}}) {
    const [isCompleted, setSwitch] = useState(completed);
    const [switchComplete] = useMutation(SWITCH_COMPLETE_MUTATION, {
        variables: {todoId: id, completed: !isCompleted}
    });
    function setComplete(){
        if (isCompleted === true) {
            setSwitch(false);
        } else {
            setSwitch(true);
        }
        switchComplete();
    }
    return (
        <>
            <MDBBtn color={isCompleted ? 'success' : 'warning'} size="sm" onClick={setComplete}>
                {isCompleted ? 'Completed' : 'Incompleted'}
            </MDBBtn>
        </>
    )
}

const SWITCH_COMPLETE_MUTATION = gql`
    mutation switchCompleteTodo($todoId: ID!, $completed: Boolean!){
        switchCompleteTodo(todoId: $todoId, completed: $completed){
            id,
            completed,
            modifiedAt
        }
    }
`;

export default ToggleCompleteBtn;