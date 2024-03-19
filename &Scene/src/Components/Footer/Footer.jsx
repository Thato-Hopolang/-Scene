/* eslint-disable react/prop-types */
import { Link } from "react-router-dom" 
//Add useMatch & useResolvedPath to above line
//Add these when you've added active styles to your nav li in styles
import "./Footer.css"

import Location from "./Icons/Location.png"
import Email from "./Icons/Email.png"
import Telephone from "./Icons/Telephone.png"
import Instagram from "./Icons/Instagram.png"
import Pinterest from "./Icons/Pinterest.png"
import tiktok from "./Icons/tiktok.png"
import X from "./Icons/X.png"
import YouTube from "./Icons/YouTube.png"
const Footer = () => {
  
  return (
    <div className="footer">

      <div className="top-footer">
        <div className="footer-category">
          <h3>Company</h3>
          <ul className="footer-ul">
            <CustomLink to="/">Newsroom</CustomLink>
            <CustomLink to="/Servicespage">Careers</CustomLink>
            <CustomLink to="/Projectspage">Invest</CustomLink>
          </ul>
        </div>

        <div className="footer-category">
          <h3>Rentees</h3>
          <ul className="footer-ul">
            <CustomLink to="/">My Profile</CustomLink>
            <CustomLink to="/Servicespage">Booked</CustomLink>
            <CustomLink to="/">Cancellations</CustomLink>
            <CustomLink to="/Servicespage">History</CustomLink>
            <CustomLink to="/Projectspage">Dispute</CustomLink>
          </ul>
        </div>

        <div className="footer-category">
          <h3>Renters</h3>
          <ul className="footer-ul">
            <CustomLink to="/">My Profile</CustomLink>
            <CustomLink to="/Servicespage">Booked</CustomLink>
            <CustomLink to="/">Cancellations</CustomLink>
            <CustomLink to="/Servicespage">History</CustomLink>
            <CustomLink to="/Projectspage">Dispute</CustomLink>
          </ul>
        </div>

        <div className="footer-category">
          <h3>Help</h3>
          <ul className="footer-ul">
            <CustomLink to="/">FAQs</CustomLink>
            <CustomLink to="/Servicespage">Booking</CustomLink>
            <CustomLink to="/Projectspage">Cancellation</CustomLink>
            <CustomLink to="/Projectspage">Agreements</CustomLink>
          </ul>
        </div>

        <div className="footer-category">
          <h3>Social Media</h3>
          <ul className="footer-ul">
            <CustomLink src={Instagram} alt={"Instagram icon"} to="/">Instagram</CustomLink>
            <CustomLink src={Pinterest} alt={"pinterest icon"} to="/">Pinterest</CustomLink>
            <CustomLink src={tiktok} alt={"tiktok icon"} to="/">tiktok</CustomLink>
            <CustomLink src={X} alt={"X icon"} to="/">X</CustomLink>
            <CustomLink src={YouTube} alt={"YouTube icon"} to="/">YouTube</CustomLink>
          </ul>
        </div>

        <div className="footer-category">
          <h3>Office</h3>
          <ul className="footer-ul">
            <CustomLink src={Location} alt={"Location icon"} to="/">216 Imaginary Street, Somewhere in Africa, 2001.</CustomLink>
            <CustomLink src={Telephone} alt={"Telephone icon"} to="/">012 111 2222</CustomLink>
            <CustomLink src={Email} alt={"Email icon"} to="/">Info@&Scene.co.za</CustomLink>
          </ul>
        </div>

      </div>

      <div className="bottom-footer">
        <p>&copy; 2024 &Scene.</p>
        <ul>
          <CustomLink to="/">Terms & Conditions</CustomLink>
          <CustomLink to="/">Privacy Policy</CustomLink>
          <CustomLink to="/">Cookie Policy</CustomLink>
        </ul>
      </div>

    </div>

  )
}

export default Footer

function CustomLink ({ to, children, src, alt }) {

  const path = window.location.pathname
  // Once you have added active styles to links remove the code above and use the code below
  // const resolvedPath = useResolvedPath(to)
  // const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    //replace path with isActive once active styles have beem added
    <li className={ path === to ? "active" : ""}>
      <img src={src} alt={alt} /><Link to={to}>{children}</Link>
    </li>
  )
}