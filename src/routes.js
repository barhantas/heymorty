import HomePage from './pages/HomePage';
import CharacterDetailPage from './pages/CharacterDetailPage';

export const ROUTES = [
  {
    icon: 'global',
    path: '/',
    name: 'Universe',
    component: HomePage,
    disableHeader: false,
    disableFooter: true,
    disableContentHeader: true,
  },
  {
    icon: 'user',
    path: '/character/:id',
    name: 'Character Detail',
    component: CharacterDetailPage,
    disableHeader: false,
    disableFooter: true,
    disableContentHeader: true,
  },
];
