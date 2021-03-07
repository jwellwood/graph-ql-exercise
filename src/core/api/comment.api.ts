import Axios from 'axios';
import { Comment } from 'common/models';

const url = 'http://localhost:3000/comments';

export const getComments = async (id: string): Promise<Comment[]> => {
  const commentsUrl = `${url}/?char_id=${id}`;
  const res = await Axios.get(commentsUrl);
  try {
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleComment = async (
  comment_id: number
): Promise<Comment> => {
  const commentUrl = `${url}/${comment_id}`;
  const res = await Axios.get(commentUrl);
  try {
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (id: string, comment: Comment) => {
  const req = await Axios.post(url, {
    char_id: id,
    comment: comment.comment,
  });
  try {
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const editComment = async (comment: Comment) => {
  const req = await Axios.put(`${url}/${comment.id}`, {
    ...comment,
  });
  try {
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (id: number) => {
  const req = await Axios.delete(`${url}/${id}`);
  try {
    return req;
  } catch (error) {
    console.log(error);
  }
};
