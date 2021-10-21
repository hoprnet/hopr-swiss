import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { NextPage } from "next";
import Link from "next/link";
import { Images } from "../atoms/images";

interface NavBarProps {}

export const NavBar: NextPage<NavBarProps> = ({}) => {
  return (
      <motion.nav>
        <Link href="/">
          <Images src="/assets/icons/logo.svg" alt="hopr logo" className="logo-nav"/>
        </Link>
      </motion.nav>
  );
};
