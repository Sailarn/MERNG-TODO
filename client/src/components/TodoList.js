import React from 'react';
import {MDBCard, MDBCardBody} from "mdbreact";
import {useQuery} from "@apollo/react-hooks";

import {FETCH_TODOS_QUERY} from "../util/graphql";
import TodoItem from "./TodoItem";

function TodoList() {
    const {loading, data: {getTodos: todos}} = useQuery(FETCH_TODOS_QUERY);
    console.log(todos)
    return (
        <MDBCard className="my-5 px-5 pb-5">
            <MDBCardBody>
                <h2 className="h1-responsive font-weight-bold text-center my-5">
                    Recent todos
                </h2>
                <p className="text-center w-responsive mx-auto mb-5">
                    Sample text
                </p>
                {loading ? (
                    <h1>Loading todos...</h1>
                ) : (<>
                        {todos && todos.map(todo => (
                            <div key={todo.id}>
                                <TodoItem todo={todo}/>
                                <hr className="my-5"/>
                            </div>
                        ))}
                    </>
                )}
            </MDBCardBody>
        </MDBCard>
    )
}


export default TodoList;