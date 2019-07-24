import React from 'react';
import TodoList from "../components/TodoList";
import Grid from '@material-ui/core/Grid';

function Home() {
    return (
        <Grid container item justify="center" alignItems="center" xs={12}>
            <TodoList/>
        </Grid>
    )
}

export default Home;