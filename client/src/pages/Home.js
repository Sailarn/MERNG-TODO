import React from 'react';
import {MDBContainer, MDBRow, MDBCol} from "mdbreact";
import TodoList from "../components/TodoList";

function Home() {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol>
                    <TodoList/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default Home;