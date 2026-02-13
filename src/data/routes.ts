export interface Route {
  label: string;
  path: string;
  index?: boolean;
}

const routes: Route[] = [
  {
    index: true,
    label: 'Michael Suarez',
    path: '/',
  },
  {
    label: 'About',
    path: '/about',
  },
  {
    label: 'Resume',
    path: '/resume',
  },
  {
    label: 'Writing',
    path: '/writing',
  },
  {
    label: 'Library',
    path: '/library',
  },
  {
    label: 'Contact',
    path: '/contact',
  },
  {
    label: 'Archive',
    path: '/projects',
  },
];

export default routes;
