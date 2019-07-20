import React, {useContext} from 'react';
import {MDBBtn, MDBCol, MDBRow, MDBCard, MDBView, MDBMask} from "mdbreact";
import moment from 'moment';
import {AuthContext} from "../context/auth";

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
        privateTodo
    } = todo;
    const todoItem = user ? (
        <MDBRow>
            <MDBCol lg="12" xl="12">
                <MDBRow>
                    <MDBCol lg="5" xl="4">
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
                    <MDBCol lg="7" xl="8">
                        <h3 className="font-weight-bold mb-3 p-0">
                            <strong>{title}</strong>
                        </h3>
                        <p className="dark-grey-text">
                            {description}
                        </p>
                        <p>
                            by <span style={{color: 'blue'}} className="font-weight-bold">{username}</span>, 19/04/2018
                        </p>
                        {user.username === username ? (
                            <MDBBtn color="primary" size="md">Read More</MDBBtn>): false}
                    </MDBCol>
                </MDBRow>
            </MDBCol>
        </MDBRow>
    ) : false;

    return todoItem;

}

export default TodoItem;
//
// <MDBCardBody>
//     <MDBCardHeader>
//         <h3 className="font-weight-bold mb-3 p-0">
//             <strong>{title}</strong>
//         </h3>
//     </MDBCardHeader>
//     <MDBCardText>
//         {description}
//     </MDBCardText>
//     <MDBCardFooter>
//         <p>by <span className="font-weight-bold">{username}</span></p>
//         <p>
//             <strong>Created: {moment(createdAt).fromNow()}</strong> Modified: {moment(modifiedAt).fromNow()}
//         </p>
//         <div style={{color: completed ? 'green' : 'red'}}>
//             {completed ? 'Completed' : 'Incompleted'}
//         </div>
//     </MDBCardFooter>
// </MDBCardBody>