import React from 'react';
import {
  ListItemSecondaryAction,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import { Comment } from 'common/models';

interface Props {
  comments: Comment[];
  handleGoToEditComment: (char_id: string, id: number) => void;
}

const CommentList: React.FC<Props> = ({ comments, handleGoToEditComment }) => {
  return (
    <List dense>
      {comments.map((comment: Comment) => (
        <ListItem key={comment.id}>
          <ListItemText primary={comment.comment} />
          <ListItemSecondaryAction>
            <IconButton
              size="small"
              onClick={() => handleGoToEditComment(comment.char_id, comment.id)}
            >
              <EditIcon style={{ fontSize: '20px' }} />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
};

export default CommentList;
