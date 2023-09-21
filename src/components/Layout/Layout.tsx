import React from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from '..';
import Navigation from '../../Pages/Navigation';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  );
};
