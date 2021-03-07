import React from 'react';
import { Formik, Form } from 'formik';
import { TextFieldComponent } from 'common/components';
import { Button } from '@material-ui/core';
import { formValidation } from '../comment.validations';
import { Comment } from 'common/models';
import * as classes from '../../character/styles/character.styles';
import BackButton from 'common/components/button/back-button';

interface Props {
  onAddComment: () => void;
  onEditComment: () => void;
  onDeleteComment: () => void;
  comment: Comment;
  onChange: (e) => void;
  comment_id: number;
}

export const CommentFormComponent: React.FC<Props> = (props) => {
  const {
    comment,
    onAddComment,
    onEditComment,
    onChange,
    comment_id,
    onDeleteComment,
  } = props;
  return (
    <>
      <BackButton />
      <Formik
        onSubmit={comment_id ? onEditComment : onAddComment}
        initialValues={comment}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <TextFieldComponent
              name="comment"
              label="Comment"
              multiline={true}
              rows={3}
              rowsMax={5}
              placeholder="add a new comment"
              onChange={onChange}
            />
            <Button type="submit" variant="contained" color="primary">
              {comment_id ? 'Update' : 'Add'}
            </Button>
            {comment_id ? (
              <Button onClick={onDeleteComment}>Delete</Button>
            ) : null}
          </Form>
        )}
      </Formik>
    </>
  );
};
