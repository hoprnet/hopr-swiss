import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';

interface ImagesProps {
  src: string;
  className?: string;
  alt?: string;
  width: number;
  height: number;
  onClick?: () => void;
}

export const Images: NextPage<ImagesProps> = ({
  src,
  className,
  alt,
  width,
  height,
  onClick,
}) => {
  return (
    <Image
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={height}
      onClick={onClick}
    />
  );
};
