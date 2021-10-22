import { NextPage } from 'next';
import React, { useRef } from 'react';
import { Videos } from '../atoms/videos';

interface VideoHoprProps {}

export const HoprVideo: NextPage<VideoHoprProps> = ({}) => {
  return (
    <Videos
      className="background-video"
      allow="autoplay; fullscreen"
      frameBorder="0"
      allowFullScreen
      src="https://player.vimeo.com/video/508834454?autoplay=1&loop=1&title=0&byline=0&muted=true&responsive=true&controls=false&app_id=122963"
    />
  );
};
