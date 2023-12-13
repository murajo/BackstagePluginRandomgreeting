import { createPlugin, createRoutableExtension } from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const randomgreetingPlugin = createPlugin({
  id: 'randomgreeting',
  routes: {
    root: rootRouteRef,
  },
});

export const RandomgreetingPage = randomgreetingPlugin.provide(
  createRoutableExtension({
    name: 'RandomgreetingPage',
    component: () =>
      import('./components/RandomGreeting').then(m => m.RandomGreeting),
    mountPoint: rootRouteRef,
  }),
);
