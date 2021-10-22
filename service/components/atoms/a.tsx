import { NextPage } from 'next';
import React from 'react';

interface AProps {
  href?: string;
  target?: string;
}

export const ALink: NextPage<AProps> = ({ children, href, target }) => {
  return (
    <a href={href} target={target}>
      {children}
    </a>
  );
};
