import { NextPage } from 'next';
import React from 'react';
import { PElement } from '../atoms/p';

interface ParagraphProps {
  className?: string;
  p: any;
}

export const ParagraphHopr: NextPage<ParagraphProps> = ({ className, p }) => {
  return (
    <PElement className={className}>
      {p}
    </PElement>
  );
};
