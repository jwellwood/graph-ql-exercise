import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  characterCollection: string;
  viewCharacter: string;
  viewEpisodes: string;
  characterComment: string;
  editComment: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  characterCollection: '/characters',
  viewCharacter: '/characters/:id',
  viewEpisodes: '/characters/:id/episodes',
  characterComment: '/characters/:id/comment',
  editComment: '/characters/:id/comment/:comment_id',
};

type NavigationFunction = (id: number | string, comment_id?: number) => string;

interface LinkRoutes
  extends Omit<SwitchRoutes, 'viewCharacter' | 'editComment' | 'viewEpisodes'> {
  viewCharacter: NavigationFunction;
  viewEpisodes: NavigationFunction;
  editComment: NavigationFunction;
}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
  viewCharacter: (id: number) =>
    generatePath(switchRoutes.viewCharacter, { id }),
  viewEpisodes: (id: number) => generatePath(switchRoutes.viewEpisodes, { id }),
  editComment: (id: string, comment_id: number) =>
    comment_id
      ? generatePath(switchRoutes.editComment, { id, comment_id })
      : generatePath(switchRoutes.characterComment, { id }),
};
