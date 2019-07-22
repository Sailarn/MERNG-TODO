import React, {useContext} from 'react';
import {MDBBtn, MDBCol, MDBRow, MDBView, MDBMask} from "mdbreact";
import moment from 'moment';

import {AuthContext} from "../context/auth";
import OwnerOptions from "./OwnerOptions";


function TodoItem({todo}) {
    const {user} = useContext(AuthContext);
    const {
        description,
        title,
        completed,
        createdAt,
        modifiedAt,
        username,
        priority,
        privateTodo,
        id
    } = todo;
    const todoItem = (
        <MDBRow>
            <MDBCol lg="12" xl="12">
                <MDBRow>
                    <MDBCol lg="4" xl="4">
                        <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">
                            <img
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"
                                alt=""
                            />
                            <a href="#!">
                                <MDBMask overlay="white-slight"/>
                            </a>
                        </MDBView>
                    </MDBCol>
                    <MDBCol lg="6" xl="6">
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>{title}</strong>
                        </h3>
                        <p className="dark-grey-text">
                            {description}
                        </p>
                        <p>
                            by <span style={{color: 'blue'}} className="font-weight-bold">{username}</span>, {moment(createdAt).fromNow(true)}
                        </p>
                        <p>Status: {completed ? <span style={{color: 'green'}}>Completed</span> :
                            <span style={{color: 'red'}}>Incompleted</span>}</p>
                    </MDBCol>
                    {user && user.username === username ? (<OwnerOptions options={todo}/>): false}
                </MDBRow>
            </MDBCol>
        </MDBRow>
    );

    return todoItem;

}

export default TodoItem;
