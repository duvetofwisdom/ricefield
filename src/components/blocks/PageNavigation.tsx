import React from 'react';
import { Link } from 'react-router-dom';

import { Icon } from '@components/elements/Icon';

import { AppRoute } from '@utils/route';

export const PageNavigation: React.FC = () => (
  <nav>
    <Icon name="cubes" />
    <h2>RiceField</h2>
    <ul>
      <li>
        <Link to={AppRoute.HOME}>Home</Link>
      </li>
      <li>
        <Link to={AppRoute.SHELL}>Shell</Link>
      </li>
    </ul>
  </nav>
);
