import { NextPage } from "next";
import React from "react";

interface VideosProps {
  className?: string;
}

export const PElement: NextPage<VideosProps> = ({ children, className }) => {
  return (
    <p className={className}>
        {children}
    </p>
  );
};
