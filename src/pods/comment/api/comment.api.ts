import Axios from 'axios';
import { Comment } from 'common/models';

const url = 'http://localhost:3000/comments';

export const getComments = async (id: string): Promise<Comment[]> => {
  try {
    const commentsUrl = `${url}/?char_id=${id}`;
    const res = await Axios.get(commentsUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleComment = async (
  comment_id: number
): Promise<Comment> => {
  try {
    const commentUrl = `${url}/${comment_id}`;
    const res = await Axios.get(commentUrl);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const addComment = async (id: string, comment: Comment) => {
  try {
    const req = await Axios.post(url, {
      char_id: id,
      comment: comment.comment,
    });
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const editComment = async (comment: Comment) => {
  try {
    const req = await Axios.put(`${url}/${comment.id}`, {
      ...comment,
    });
    return req;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (id: number) => {
  try {
    const req = await Axios.delete(`${url}/${id}`);
    return req;
  } catch (error) {
    console.log(error);
  }
};
