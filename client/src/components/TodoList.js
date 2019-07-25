import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import LinearProgress from '@material-ui/core/LinearProgress';
import Card from "@material-ui/core/Card";
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

import {FETCH_TODOS_QUERY} from "../util/graphql";
import TodoItem from "./TodoItem";
import CreateTodo from "./CreateTodo";

function TodoList() {
    const {loading, data, refetch, error} = useQuery(FETCH_TODOS_QUERY);
    let todos;
    if (!error) {
        todos = data.getTodos;
    }
    return (
        <Card style={{width: '100%', maxWidth: 1000, margin: 20}}>
            <CreateTodo/>
            <CardHeader
                title="Recent todos"
                style={{textAlign: 'center'}}
                className="title-todos"
            />
            {loading || error ? (
                <>
                    <LinearProgress/>
                    {error ? <Typography
                        variant="h4"
                        component="h2"
                        style={{textAlign: 'center'}}
                    >
                        {error.message}
                    </Typography> : false}
                </>
            ) : (<>
                    {todos && todos.map(todo => (
                        <div key={todo.id}>
                            <TodoItem todo={todo} refetch={refetch}/>
                        </div>
                    ))}
                </>
            )}
        </Card>
    )
}


export default TodoList;