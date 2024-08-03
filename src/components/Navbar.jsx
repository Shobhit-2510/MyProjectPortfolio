import React from "react";
import { useLocation, Link } from "react-router-dom";

const Navbar = () => {
  const loc = useLocation();
  return (
    <nav className="flex items-center justify-between px-48" id="top">
      <Link
        className="logo bg-black w-16 h-16 rounded-full flex justify-center items-center text-white"
        to="/Portfolio/"
      >
        <p className="text-center text-xs">\Shobhit Kumar\</p>
      </Link>
      <div className="link flex items-center justify-end gap-16  h-24 ">
        <div id="Home">
          <Link to="/Portfolio/" className="w-fit text-lg">
            Home
          </Link>
          <div
            className={
              loc.pathname === "/Portfolio/"
                ? "line w-full h-[1px] bg-black"
                : " hidden line w-full h-[1px] bg-black"
            }
          ></div>
        </div>
        <div id="Projects">
          <Link to="/Portfolio/Projects" className="w-fit text-lg ">
            Projects
          </Link>
          <div
            className={
              loc.pathname === "/Portfolio/Projects"
                ? "line w-full h-[1px] bg-black"
                : "hidden line w-full h-[1px] bg-black"
            }
          ></div>
        </div>
        <div id="Resume">
          <Link to="/Portfolio/Resume" className="w-fit text-lg ">
            Resume
          </Link>
          <div
            className={
              loc.pathname === "/Portfolio/Resume"
                ? "line w-full h-[1px] bg-black"
                : "hidden line w-full h-[1px] bg-black"
            }
          ></div>
        </div>
        <div id="About">
          <Link to="/Portfolio/About" className="w-fit text-lg ">
            About
          </Link>
          <div
            className={
              loc.pathname === "/Portfolio/About"
                ? "line w-full h-[1px] bg-black"
                : "hidden line w-full h-[1px] bg-black"
            }
          ></div>
        </div>
        <div id="Contact">
          <Link to="/Portfolio/Contact" className="w-fit text-lg ">
            Contact
          </Link>
          <div
            className={
              loc.pathname === "/Portfolio/Contact"
                ? "line w-full h-[1px] bg-black"
                : "hidden line w-full h-[1px] bg-black"
            }
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
