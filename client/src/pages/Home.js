import React from 'react';
import TodoList from "../components/TodoList";
import Container from '@material-ui/core/Container';

function Home() {
    return (
        <Container maxWidth="lg">
            <TodoList/>
        </Container>
    )
}

export default Home;