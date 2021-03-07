import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import * as api from 'core/api';
import { CommentFormComponent } from './components/comment-form.component';
import { linkRoutes } from 'core/router';
import { createEmptyComment, Comment } from 'common/models';

export const CommentFormContainer: React.FunctionComponent = () => {
  const history = useHistory();
  const { id, comment_id } = useParams<{ id: string; comment_id: string }>();
  const [newComment, setNewComment] = useState<Comment>(createEmptyComment());
  React.useEffect(() => {
    if (comment_id) {
      const fetchData = async () => await api.getSingleComment(+comment_id);
      fetchData().then((res: Comment) => setNewComment(res));
    }
  }, [comment_id]);

  const onChange = (e) => {
    setNewComment({ ...newComment, comment: e.target.value });
  };

  const onAddComment = async () => {
    await api.addComment(id, newComment);
    history.push(linkRoutes.viewCharacter(id));
  };

  const onEditComment = async () => {
    await api.editComment(newComment);
    history.push(linkRoutes.viewCharacter(id));
  };

  const onDeleteComment = () => {
    if (comment_id) {
      api.deleteComment(+comment_id);
    }
    history.push(linkRoutes.viewCharacter(id));
  };

  return (
    <CommentFormComponent
      comment={newComment}
      onAddComment={onAddComment}
      onEditComment={onEditComment}
      onDeleteComment={onDeleteComment}
      onChange={onChange}
      comment_id={+comment_id}
    />
  );
};
