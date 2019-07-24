import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import LinearProgress from '@material-ui/core/LinearProgress';

import {FETCH_TODOS_QUERY} from "../util/graphql";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";
import Card from "@material-ui/core/Card";

function TodoList() {
    const {loading, data: {getTodos: todos}, refetch} = useQuery(FETCH_TODOS_QUERY);

    return (
        <Card style={{width: '100%', maxWidth: 1000, marginTop: 25}}>
            <h2 className="h1-responsive font-weight-bold text-center my-5">
                Recent todos
            </h2>
            <CreateTodo/>
            {loading ? (
                <LinearProgress/>
            ) : (<>
                    {todos && todos.map(todo => (
                        <div key={todo.id}>
                            <TodoItem todo={todo} refetch={refetch}/>
                        </div>
                    ))}
                </>
            )}
            <hr className="my-5"/>
        </Card>
    )
}


export default TodoList;