/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 
//Add useMatch & useResolvedPath to above line
//Add these when you've added active styles to your nav li in styles
import "./Navigation.css"

const Navigation = () => {
  
  return (
    <div className="navigation">
      <Link className="logo" to="/">&Scene</Link>
      <ul className="nav-ul">
        <CustomLink to="/">Vehicles</CustomLink>
        <CustomLink to="/Servicespage">Locations</CustomLink>
        <CustomLink to="/Projectspage">Equipment</CustomLink>
        <Link className="btn nav-btn" to="/Contactpage">Enquire</Link>
      </ul>
    </div>
  )
}

export default Navigation

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