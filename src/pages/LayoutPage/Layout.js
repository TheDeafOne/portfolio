import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
    
        <Link to="/">Welcome</Link> | <Link to="/skills">Skills</Link> | <Link to="/projects">Projects</Link>
    
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;