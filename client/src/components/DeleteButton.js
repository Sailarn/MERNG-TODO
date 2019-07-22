import React from 'react';
import {MDBBtn} from 'mdbreact';
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";
import {FETCH_TODOS_QUERY} from "../util/graphql";

function DeleteButton({id, callback}) {
    const [deleteTodo] = useMutation(DELETE_TODO_MUTATION, {
        update(proxy) {
            const data = proxy.readQuery({
                query: FETCH_TODOS_QUERY
            });
            data.getTodos = data.getTodos.filter(t => t.id !== id);
            proxy.writeQuery({query: FETCH_TODOS_QUERY, data});
            if (callback) callback();
        },
        variables: {todoId: id}
    });
    return (
        <MDBBtn size="sm" color="danger" onClick={deleteTodo}>Delete</MDBBtn>
    )
}

const DELETE_TODO_MUTATION = gql`
    mutation deleteTodo($todoId: ID!){
        deleteTodo(todoId: $todoId)
    }
`;

export default DeleteButton;