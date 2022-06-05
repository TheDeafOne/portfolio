import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/skills">Skills</Link> | 
        <Link to="/projects">Projects</Link> | 
        
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;