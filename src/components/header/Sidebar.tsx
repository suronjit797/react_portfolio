import { NavLink } from "react-router-dom";
import user from "../../assets/user.jpeg";
import "./sidebar.css";
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <div className="side_bar w-100 py-3 pe-3">
      <div className=" d-flex align-items-center justify-content-center flex-column">
        <img src={user} alt="user" className="userImage" />
        <div className="intro text-center mt-3 mb-2">
          <h3 className="intro_heading">
            <span>Suronjit</span> Pal
          </h3>
          <h6> MERN Stack Developer </h6>
        </div>

        <nav className="w-100 px-lg-4">
          <div className="nav_items">
            <NavLink
              className={({ isActive, isPending }) => {
                return `nav_link ${
                  isActive ? "active" : isPending ? "pending" : ""
                }`;
              }}
              to="/"
            >
              Home
            </NavLink>
          </div>
          <div className="nav_items">
            <NavLink
              className={({ isActive, isPending }) => {
                return `nav_link ${
                  isActive ? "active" : isPending ? "pending" : ""
                }`;
              }}
              to="/skills"
            >
              My Skills
            </NavLink>
          </div>
          <div className="nav_items">
            <NavLink
              className={({ isActive, isPending }) => {
                return `nav_link ${
                  isActive ? "active" : isPending ? "pending" : ""
                }`;
              }}
              to="/projects"
            >
              Recent Projects
            </NavLink>
          </div>
          <div className="nav_items">
            <NavLink
              className={({ isActive, isPending }) => {
                return `nav_link ${
                  isActive ? "active" : isPending ? "pending" : ""
                }`;
              }}
              to="/about"
            >
              About Me
            </NavLink>
          </div>
          <div className="nav_items">
            <NavLink
              className={({ isActive, isPending }) => {
                return `nav_link ${
                  isActive ? "active" : isPending ? "pending" : ""
                }`;
              }}
              to="/contact"
            >
              Contact Me
            </NavLink>
          </div>
        </nav>

        <hr className="w-100" />

        <div className="social d-flex justify-content-between">
              <div className="icon facebook"> <FaFacebookF /> </div>
              <div className="icon linkedin"> <FaLinkedinIn /> </div>
              <div className="icon gmail"> <BiLogoGmail /> </div>
              <div className="icon github"> <FaGithub /> </div>
        </div>


      </div>
    </div>
  );
};

export default Sidebar;
