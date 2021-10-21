import { NextPage } from 'next';
import React from 'react';
import { Images } from '../atoms/images';
import { PElement } from '../atoms/p';
import Link from 'next/link';
import { ALink } from '../atoms/a';

interface FooterProps {}

export const Footer: NextPage<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="section padding-sections background-blue">
        <div className="container">
          <div className="first-line-footer">
            <Images src="/assets/icons/hopr_icon.svg" />
          </div>
          <div className="second-line-footer">
            <PElement className="p-color-white">
              ©2021 HOPR Services AG, allrights reserved
            </PElement>
            <div className="footer-menu">
              <ul>
                <li>
                  <ALink href="/disclaimer">
                    <PElement className="p-color-white">
                      Disclaimer
                    </PElement>
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