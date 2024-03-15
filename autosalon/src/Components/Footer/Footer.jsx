/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 
//Add useMatch & useResolvedPath to above line
//Add these when you've added active styles to your nav li in styles
import "./Footer.css"

const Footer = () => {
  
  return (
    <div className="footer">

      <div className="footer-category">
        <h3>Company</h3>
        <ul className="footer-ul">
          <CustomLink to="/">Vehicles</CustomLink>
          <CustomLink to="/Servicespage">Locations</CustomLink>
          <CustomLink to="/Projectspage">Equipment</CustomLink>
        </ul>
      </div>

      <div className="footer-category">
        <h3>Company</h3>
        <ul className="footer-ul">
          <CustomLink to="/">Vehicles</CustomLink>
          <CustomLink to="/Servicespage">Locations</CustomLink>
          <CustomLink to="/Projectspage">Equipment</CustomLink>
        </ul>
      </div>

      <div className="footer-category">
        <h3>Company</h3>
        <ul className="footer-ul">
          <CustomLink to="/">Vehicles</CustomLink>
          <CustomLink to="/Servicespage">Locations</CustomLink>
          <CustomLink to="/Projectspage">Equipment</CustomLink>
        </ul>
      </div>

      <div className="footer-category">
        <h3>Company</h3>
        <ul className="footer-ul">
          <CustomLink to="/">Vehicles</CustomLink>
          <CustomLink to="/Servicespage">Locations</CustomLink>
          <CustomLink to="/Projectspage">Equipment</CustomLink>
        </ul>
      </div>

    </div>

  )
}

export default Footer

function CustomLink ({ to, children }) {

  const path = window.location.pathname
  // Once you have added active styles to links remove the code above and use the code below
  // const resolvedPath = useResolvedPath(to)
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    //replace path with isActive once active styles have beem added
    <li className={ path === to ? "active" : ""}>
      <Link to={to}>{children}</Link>
    </li>
  )
}