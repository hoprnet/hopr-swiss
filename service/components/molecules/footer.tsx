import { NextPage } from 'next';
import React from 'react';
import { ALink } from '../atoms/a';
import { Images } from '../atoms/images';
import { PElement } from '../atoms/p';

interface FooterProps {}

export const Footer: NextPage<FooterProps> = ({}) => {
  return (
    <footer>
      <div>
        <Images src="/assets/icons/hopr_icon.svg" width={32} height={32} />
      </div>
      <div className="second-line-footer">
        <PElement>&copy;2021 HOPR Services AG, allrights reserved</PElement>
        <ALink href="/disclaimer">
          <PElement>Disclaimer</PElement>
        </ALink>
      </div>
    </footer>
  );
};
