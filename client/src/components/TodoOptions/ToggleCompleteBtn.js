import React, {useState} from 'react';
import {useMutation} from "@apollo/react-hooks";
import gql from 'graphql-tag';
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

function ToggleCompleteBtn({options: {completed, id}, refetch}) {
    const [isCompleted, setSwitch] = useState(completed);

    function setComplete() {
        isCompleted ? setSwitch(false) : setSwitch(true);
        return switchComplete();
    }

    const [switchComplete] = useMutation(SWITCH_COMPLETE_MUTATION, {
        variables: {todoId: id, completed: !isCompleted},
        update() {
            refetch();
        }
    });

    return (
        <FormControlLabel control={<Switch
            checked={isCompleted}
            name="privateTodo"
            onChange={setComplete}
            value={isCompleted}
        />} label={isCompleted ? 'Completed' : "Incompleted"}/>
    );
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