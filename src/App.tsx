import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { HomePage } from '@pages/HomePage';
import { ShellPage } from '@pages/ShellPage';
import { NotFoundPage } from '@pages/NotFoundPage';

import { AppRoute } from '@utils/route';

import '@styles/reset.scss';
import '@styles/main.scss';
import '@styles/element.scss';

export const App: React.FC = () => (
  <Routes>
    <Route path={AppRoute.HOME} element={<HomePage />} />
    <Route path={AppRoute.SHELL} element={<ShellPage />} />
    <Route path={AppRoute.NOT_FOUND} element={<NotFoundPage />} />
  </Routes>
);
