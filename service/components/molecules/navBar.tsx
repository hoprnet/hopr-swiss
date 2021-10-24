import { motion } from 'framer-motion';
import { NextPage } from 'next';
import React from 'react';
import { ALink } from '../atoms/a';
import { Images } from '../atoms/images';

interface NavBarProps {}

export const NavBar: NextPage<NavBarProps> = ({}) => {
  return (
    <motion.nav>
      <ALink href="/">
        <div className="logo-nav">
          <Images
            src="/assets/icons/logo.svg"
            alt="hopr logo"
            width={88}
            height={40}
          />
        </div>
      </ALink>
    </motion.nav>
  );
};
