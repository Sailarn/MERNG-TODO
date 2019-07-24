import React, {useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import CreateUpdateForm from "./CreateUpdateForm";

export default function EditTodoDialog({id, todo: {title, description, privateTodo, priority}, refetch}) {
    const [open, setOpen] = useState(false);
    const initialState = {
        todoId: id,
        title,
        description,
        privateTodo,
        priority
    };
    function handleClickOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <>
            <IconButton aria-label="Delete" style={{marginRight: 10}} onClick={handleClickOpen}>
                <Icon>edit_icon</Icon>
            </IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                maxWidth="sm"
                fullWidth={true}
            >
                <DialogTitle id="form-dialog-title">Update Todo</DialogTitle>
                <DialogContent>
                    <CreateUpdateForm
                        query='UPDATE'
                        name={false}
                        initialState={initialState}
                        close={handleClose}
                        refetch={refetch}
                    />
                </DialogContent>
            </Dialog>
        </>
    );
}
