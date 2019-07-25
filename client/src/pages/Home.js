import React from 'react';
import Grid from '@material-ui/core/Grid';

import TodoList from "../components/TodoList";

function Home() {
    return (
        <Grid container item justify="center" alignItems="center" xs={12}>
            <TodoList/>
        </Grid>
    )
}

export default Home;