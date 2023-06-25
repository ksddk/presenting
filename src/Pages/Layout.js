import { Outlet, Link } from "react-router-dom";
import Navigation from '../trying';

const Layout = () => {
  return (
    <>
      {/* <div class="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/list">ShoppingList</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>  
        </ul>
      </div> */}
      <Navigation />
      <Outlet />
    </>
  )
};

export default Layout;