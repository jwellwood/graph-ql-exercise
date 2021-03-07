import React from 'react';
import * as classes from './styles/centered.layout.styles';

export const CenteredLayout: React.FunctionComponent = (props) => (
  <div className={classes.root}>{props.children}</div>
);
