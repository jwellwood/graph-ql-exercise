import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import * as api from 'core/api';
import CommentList from './components/comment-list';
import { linkRoutes } from 'core/router';
import { Comment } from 'common/models';

const CommentListContainer: React.FC = () => {
  const history = useHistory();
  const [comments, setComments] = React.useState<Comment[]>([]);
  const { id } = useParams<{ id: string }>();

  const handleLoadComments = async () => {
    const apiComments = await api.getComments(id);
    setComments(apiComments);
  };

  React.useEffect(() => {
    if (id) {
      handleLoadComments();
    }
  }, []);

  const handleGoToEditComment = (id: string, comment_id: number) => {
    history.push(linkRoutes.editComment(id, comment_id));
  };

  return (
    <CommentList
      comments={comments}
      handleGoToEditComment={handleGoToEditComment}
    />
  );
};

export default CommentListContainer;
