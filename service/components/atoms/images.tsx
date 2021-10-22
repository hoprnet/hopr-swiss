import { NextPage } from 'next';
import React from 'react';
import Image from 'next/image';

interface ImagesProps {
  src: string;
  className?: string;
  alt?: string;
  width: number;
  heigh: number;
  onClick?: () => void;
}

export const Images: NextPage<ImagesProps> = ({
  src,
  className,
  alt,
  width,
  heigh,
  onClick,
}) => {
  return (
    <Image
      src={src}
      className={className}
      alt={alt}
      width={width}
      height={heigh}
      onClick={onClick}
    />
  );
};
