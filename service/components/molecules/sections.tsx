import { NextPage } from 'next';
import React from 'react';

interface SectionsProps {
  className?: string;
  sectionName: string;
  navbarORfooter?: boolean;
}

export const Sections: NextPage<SectionsProps> = ({
  children,
  className,
  sectionName,
  navbarORfooter,
}) => {
  return (
    <section
      className={navbarORfooter ? '' : `section padding-sections ${className}`}
      id={sectionName}
    >
      <div className="container">{children}</div>
    </section>
  );
};
