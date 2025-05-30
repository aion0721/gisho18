import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
      <div>ページを開いた時刻: {new Date().toLocaleTimeString()}</div>
      <hr />
      <Outlet />
    </div>
  );
};
export default Layout;
