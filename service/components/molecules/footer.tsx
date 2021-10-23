import { NextPage } from 'next';
import React from 'react';
import { ALink } from '../atoms/a';
import { Images } from '../atoms/images';
import { PElement } from '../atoms/p';

interface FooterProps {}

export const Footer: NextPage<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="section padding-sections background-blue">
        <div className="container">
          <div className="first-line-footer">
            <Images src="/assets/icons/hopr_icon.svg" width={32} height={32} />
          </div>
          <div className="second-line-footer">
            <PElement className="p-color-white">
              ©2021 HOPR Services AG
            </PElement>
            <div className="footer-menu">
              <ul>
                <li>
                  <ALink href="/disclaimer">
                    <PElement className="p-color-white">Disclaimer</PElement>
                  </ALink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
