import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
  CharacterScene,
  CommentFormScene,
  EpisodeScene,
} from 'scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.characterCollection]}
          component={CharacterCollectionScene}
        />
        <Route
          exact={true}
          path={switchRoutes.characterComment}
          component={CommentFormScene}
        />
        <Route
          exact={true}
          path={switchRoutes.editComment}
          component={CommentFormScene}
        />
        <Route
          exact={true}
          path={switchRoutes.viewCharacter}
          component={CharacterScene}
        />
        <Route
          exact={true}
          path={switchRoutes.viewEpisodes}
          component={EpisodeScene}
        />
      </Switch>
    </HashRouter>
  );
};
