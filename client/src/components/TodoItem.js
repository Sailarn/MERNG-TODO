import React, {useContext} from 'react';
import moment from 'moment';

import {AuthContext} from "../context/auth";
import OwnerOptions from "./OwnerOptions";

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';


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
        // privateTodo,
        // id
    } = todo;
    return (
        <Container maxWidth="md">
            <Card style={{maxWidth: 700}}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom color="textSecondary" component="p">
                            {moment(createdAt).fromNow()}
                        </Typography>
                        {modifiedAt !== createdAt ? <p>Modified at: {moment(modifiedAt).fromNow()}</p> : false}
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {description ? description : 'No description'}
                        </Typography>
                        <p>Status: {completed ? <span style={{color: 'green'}}>Completed</span> :
                            <span style={{color: 'red'}}>Incompleted</span>}</p>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {user && user.username === username ? (<OwnerOptions options={todo}/>) : false}
                </CardActions>
            </Card>
        </Container>
    );

}

{/*<MDBRow>*/
}
{/*    <MDBCol lg="12" xl="12">*/
}
{/*        <MDBRow>*/
}
{/*            <MDBCol lg="4" xl="4">*/
}
{/*                <MDBView hover className="rounded z-depth-1-half mb-lg-0 mb-4">*/
}
{/*                    <img*/
}
{/*                        className="img-fluid"*/
}
{/*                        src="https://mdbootstrap.com/img/Photos/Others/images/49.jpg"*/
}
{/*                        alt=""*/
}
{/*                    />*/
}
{/*                    <a>*/
}
{/*                        <MDBMask overlay="white-slight"/>*/
}
{/*                    </a>*/
}
{/*                </MDBView>*/
}
{/*            </MDBCol>*/
}
{/*            <MDBCol lg="6" xl="6">*/
}
{/*                <h3 className="font-weight-bold mb-3 p-0">*/
}
{/*                    <strong>{title}</strong>*/
}
{/*                </h3>*/
}
{/*                <p className="dark-grey-text">*/
}
{/*                    {description}*/
}
{/*                </p>*/
}
{/*                <p>*/
}
{/*                    by <span style={{color: 'blue'}}*/
}
{/*                             className="font-weight-bold">{username}</span>, {moment(createdAt).fromNow()}*/
}
{/*                </p>*/
}
{/*                <p>Status: {completed ? <span style={{color: 'green'}}>Completed</span> :*/
}
{/*                    <span style={{color: 'red'}}>Incompleted</span>}</p>*/
}
{/*                {modifiedAt !== createdAt ? <p>Modified at: {moment(modifiedAt).fromNow()}</p> : false}*/
}
{/*                <p>Priority: <span style={{*/
}
{/*                    color: priority === 'Low' ? 'green' :*/
}
{/*                        priority === 'Medium' ? 'orange' : 'red'*/
}
{/*                }}>{priority}</span></p>*/
}
{/*            </MDBCol>*/
}
{/*            {user && user.username === username ? (<OwnerOptions options={todo}/>) : false}*/
}
{/*        </MDBRow>*/
}
{/*    </MDBCol>*/
}
{/*</MDBRow>*/
}

export default TodoItem;
