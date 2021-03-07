import React from 'react';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';

interface Props {
  link?: string;
}

const BackButton: React.FC<Props> = ({ link }) => {
  const history = useHistory();

  const onClick = link ? () => history.push(link) : () => history.goBack();

  return <Button onClick={onClick}>Back</Button>;
};

export default BackButton;
