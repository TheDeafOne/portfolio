import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/skills">Skills</Link> | <Link to="/projects">Projects</Link> | 
        <Link to="/about-me">About Me</Link> | 
        <Link to="/">Welcome</Link> 
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;