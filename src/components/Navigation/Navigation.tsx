import { useMediaQuery } from 'react-responsive';
import react, { useState } from 'react';
import { HamburgerMenu } from '..';
import { FullMenu } from '..';

export interface IPages {
  name: string;
  link: string;
}

const pages: IPages[] = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Todo Application',
    link: '/todoapp'
  }
];

export const Navigation = () => {
  const isMedium = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return <>{!isMedium ? <FullMenu pages={pages} /> : <HamburgerMenu pages={pages} />}</>;
};
