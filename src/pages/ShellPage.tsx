import React from 'react';

import { DefaultLayout } from '@layouts/DefaultLayout';

import { Grid } from '@components/elements/Grid';

export const ShellPage: React.FC = () => (
  <DefaultLayout title="Shell">
    <h1>Shell</h1>
    <h2>Splash Art</h2>
    <Grid width={6} height={4} />
  </DefaultLayout>
);
