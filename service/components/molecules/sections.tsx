import { NextPage } from 'next';
import React from 'react';

interface SectionsProps {
  className?: string;
  sectionName?: string;
}

export const Sections: NextPage<SectionsProps> = ({
  children,
  className = '',
  sectionName,
}) => {
  return (
    <section
      className={`section ${className}`}
      id={sectionName}
    >
      <div className="container">{children}</div>
    </section>
  );
};
