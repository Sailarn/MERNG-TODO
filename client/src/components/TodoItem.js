import React, {useContext} from 'react';
import moment from 'moment';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Container from '@material-ui/core/Container';

import {AuthContext} from "../context/auth";
import OwnerOptions from "./OwnerOptions";

/**
 * @return {boolean}
 */
function TodoItem({todo, refetch}) {
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
    return (!privateTodo || (user && privateTodo && username === user.username)) ? (
        <Container maxWidth="md">
            <Card style={{margin: '25px 0'}}>
                <CardActionArea>
                    <CardContent>
                        <Typography variant="h4" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="h6" component="h2">
                            Created by: {username}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom color="textSecondary" component="p">
                            {moment(createdAt).fromNow()}
                        </Typography>
                        {modifiedAt !== createdAt ?
                            <Typography variant="subtitle1" gutterBottom color="textSecondary" component="p">
                                Modified at: {moment(modifiedAt).fromNow(true)}
                            </Typography> : false}
                        <Typography variant="subtitle1" color="textSecondary" component="p">
                            {description ? ' Description: ' + description : 'No description'}
                        </Typography>
                        <Typography display="inline">
                            Status: {completed ? <span style={{color: 'green'}}>Completed</span> :
                            <span style={{color: 'red'}}>Incompleted</span>}
                        </Typography>
                        <Typography style={{display: 'flex'}}>
                            Priority: <span style={{
                            marginLeft: '5px',
                            color: priority === 'Low' ? 'green'
                                : priority === 'Medium' ? 'orange' : 'red'
                        }}>{priority}</span>
                        </Typography>
                    </CardContent>
                </CardActionArea>
                {user && user.username === username ? (
                    <CardActions>
                        <OwnerOptions todo={todo} refetch={refetch}/>
                    </CardActions>
                ) : false}
            </Card>
        </Container>) : false;

}

export default TodoItem;
