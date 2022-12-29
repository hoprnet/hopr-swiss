import { NextPage } from 'next';
import React from 'react';
import { ALink } from '../atoms/a';
import { Images } from '../atoms/images';
import { PElement } from '../atoms/p';

interface FooterProps {}

export const Footer: NextPage<FooterProps> = ({ }) => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <div>
        <Images src="/assets/icons/hopr_icon.svg" width={32} height={32} />
      </div>
      <div className="second-line-footer">
        <PElement>&copy;{currentYear} HOPR Services AG, all rights reserved</PElement>
        <ALink href="/disclaimer">
          <PElement>Disclaimer</PElement>
        </ALink>
      </div>
    </footer>
  );
};
