import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { randomgreetingPlugin, RandomgreetingPage } from '../src/plugin';

createDevApp()
  .registerPlugin(randomgreetingPlugin)
  .addPage({
    element: <RandomgreetingPage />,
    title: 'Root Page',
    path: '/randomgreeting'
  })
  .render();
