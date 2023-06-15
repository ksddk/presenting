import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div class="navbar">
        <ul>
          <li>
            <Link to="/" class="active">Home</Link>
          </li>
          <li>
            <Link to="/list">ShoppingList</Link>
          </li>
          <li>
            <Link to="/contact">Contact me</Link>
          </li>  
        </ul>
      </div>
      <Outlet />
    </>
  )
};

export default Layout;