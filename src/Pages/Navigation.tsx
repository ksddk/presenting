import { useMediaQuery } from 'react-responsive';
import react, { useState } from 'react';
import HambMenu from './Menu/HamburgerMenu';
import FullMenu from './Menu/FullMenu';

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

function Navigation() {
  const isMedium = useMediaQuery({
    query: '(max-width: 768px)'
  });

  return <>{!isMedium ? <FullMenu pages={pages} /> : <HambMenu pages={pages} />}</>;
}

export default Navigation;
