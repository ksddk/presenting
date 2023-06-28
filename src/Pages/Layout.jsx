import { Outlet } from 'react-router-dom';
import Navigation from './NavBar';

function Layout() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
}

export default Layout;
