import { Link, NavLink } from "react-router-dom";
import { navItems } from "../../data/navItems";
import Logo from "./Logo";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#100000] text-white xl:px-10 px-5 py-5">
      <div className="border-white/80 border-b-2">
        <div className="xl:flex justify-between items-center xl:px-10">
          <div className="xl:w-2/5">
            <Logo scale={1} pad={17} x={true} text={true} />
            <p className="text-sm xl:text-base pt-2">
              TEDxCMRIT Hyderabad sparks conversations, challenges perspectives,
              and inspires change with visionary talks that ignite minds and
              drive action globally.
            </p>
          </div>
          <div className="py-5">
            {navItems.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={`block text-white hover:text-[#EA0029] transition-colors duration-500`}
              >
                <p className="text-base" >{link.name}</p>
              </NavLink>
            ))}
          </div>
          <div className="py-2">
            <h1 className="text-base" >Contact us</h1>
            <div className="flex text-3xl py-3 gap-3">
              <Link
                className="hover:text-[#EA0029] transition-colors duration-500"
                to={"https://www.instagram.com/tedxcmrithyderabad"}
                target="_blank_"
              >
                <FaInstagram />
              </Link>
              <Link
                className="hover:text-[#EA0029] transition-colors duration-500"
                to={"https://in.linkedin.com/company/tedxcmrithyderabad"}
                target="_blank_"
              >
                <FaLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-center text-base pt-3">
        © Copyright TEDxCMRIT Hyderabad. All rights reserved.
      </h1>
    </footer>
  );
};

export default Footer;
