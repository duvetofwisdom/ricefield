import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Icon } from '@components/elements/Icon';

export const HomePage: React.FC = () => (
  <DefaultLayout title="Home">
    <h1>Home</h1>
    <Icon name="paper-plane" />
  </DefaultLayout>
);
