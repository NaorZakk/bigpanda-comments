import React from 'react';
import md5 from "md5";

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';


function CommentList(props) {
    const { comments, selectUser } = props;
    return (<List component="nav" aria-label="main mailbox folders">

        {comments.length === 0 ? <p>No comments</p> : comments.map(comment =>
            <ListItem key={comment._id}>
                <ListItemIcon>
                    <Avatar variant="square" src={`https://www.gravatar.com/avatar/${md5(comment.user.email)}`} onClick={() => selectUser(comment.user._id)} />
                </ListItemIcon>
                <ListItemText primary={comment.user.email} secondary={comment.message} />
            </ListItem>
        )}
    </List>)
}

export default CommentList;