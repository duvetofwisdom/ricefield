import React, { useEffect } from 'react';

import { PageNavigation } from '@components/blocks/PageNavigation';
import { PageFooter } from '@components/blocks/PageFooter';

import { PAGE_TITLE_BASE, PAGE_TITLE_SPLITTER } from '@utils/route';

interface Props {
  title?: string;
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<Props> = ({ title, children }) => {
  useEffect(() => {
    document.title = `${title ? `${title}${PAGE_TITLE_SPLITTER}` : ''}${PAGE_TITLE_BASE}`;
  }, []);

  return (
    <React.Fragment>
      <PageNavigation />
      {children}
      <PageFooter />
    </React.Fragment>
  );
};
