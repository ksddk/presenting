import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Navigation } from '..';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
