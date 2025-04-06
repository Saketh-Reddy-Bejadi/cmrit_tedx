import { Link, NavLink, useLocation } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import React, { useEffect, useState } from "react";
import { navItems } from "../../data/navItems.ts";
import Logo from "./Logo.tsx";

const Navbar = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  React.useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  return (
    <nav className="fixed w-full z-1000 bg-black ">
      <span className="text-white px-7 xl:px-16 py-5 flex items-center justify-between relative">
        <NavLink to={"/"}>
          <Logo scale={1} pad={17} x={true} text={true} />
        </NavLink>
        <div className="relative w-[45px] h-[45px]">
          <IoCloseSharp
            onClick={handleMenu}
            size={45}
            className={`xl:hidden cursor-pointer z-30 absolute transition-transform duration-300 ${
              menu ? "rotate-180 opacity-100" : "rotate-90 opacity-0"
            }`}
          />
          <RiMenu3Line
            onClick={handleMenu}
            size={35}
            className={`xl:hidden cursor-pointer z-30 absolute transition-transform duration-300 ${
              menu ? "-rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
        </div>
        <section
          className={`bg-[#330000] fixed top-0 right-0 w-full h-screen transition-transform duration-500 ease-in-out overflow-hidden ${
            menu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="py-20 px-5">
            <div className="border-b">
              <p className="text-2xl px-5 pb-2">Menu</p>
            </div>
            <div className=" px-5 pt-5">
              {navItems.map((link) => (
                <NavLink
                  onClick={handleMenu}
                  key={link.name}
                  to={link.path}
                  className={`block text-white text-2xl py-2 hover:text-[#EA0029] transition-colors duration-500`}
                >
                  {link.name}
                </NavLink>
              ))}
              <Link to={"https://events.studenttribe.in/event/67ed2176e5c536d5cef4f7b1"}>
                <button className="drop-shadow-[2px_-2px_10px_#e7000cdb] cursor-pointer bg-[#EA0029] text-white px-5 py-2 rounded-2xl hover:bg-[#ea002b9b] transition-colors duration-500 mt-5 text-[22px]">
                  Buy Pass
                </button>
              </Link>
            </div>
          </div>
        </section>
        <span className="hidden xl:flex gap-12 items-center ease-in-out">
          {navItems.map((link) => (
            <NavLink
              onClick={() => {}}
              key={link.name}
              to={link.path}
              className={`${
                window.location.hash === link.hash ? "text-[#EA0029]" : ""
              } text-lg font-medium transition-colors duration-800`}
            >
              {link.name}
            </NavLink>
          ))}
          <Link to={"https://events.studenttribe.in/event/67ed2176e5c536d5cef4f7b1"}>
            <button className="drop-shadow-[2px_-2px_10px_#e7000cdb] cursor-pointer bg-[#EA0029] text-white px-5 py-2 rounded-2xl hover:bg-[#ea002b9b] transition-colors duration-500">
              Buy Pass
            </button>
          </Link>
        </span>
      </span>
    </nav>
  );
};
export default Navbar;
