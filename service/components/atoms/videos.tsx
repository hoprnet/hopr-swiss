import { NextPage } from 'next';
import React, { MutableRefObject } from 'react';

interface VideosProps {
  src: string;
  className?: string;
  allow: string;
  frameBorder: string;
  allowFullScreen: boolean;
  width?: string;
  id?: string;
}

export const Videos: NextPage<VideosProps> = ({
  src,
  className,
  allow,
  frameBorder,
  allowFullScreen,
  width,
  id,
}) => {
  return (
    <iframe
      src={src}
      className={className}
      allow={allow}
      frameBorder={frameBorder}
      allowFullScreen={allowFullScreen}
      width={width}
    />
  );
};
