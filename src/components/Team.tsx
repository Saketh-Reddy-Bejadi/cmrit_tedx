import { useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { teamData } from "./../../data/teamData";
import { Link } from "react-router-dom";

const Team = () => {
  const [hover, setHover] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    
  return (
    <div className="pt-30">
      <h1 className="text-center text-4xl">Our Team</h1>
      <div className=" p-10 w-full flex flex-wrap gap-10 items-center justify-center">
        {teamData.map((e, index) => (
          <span
            key={index}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
            className={`border-3 border-[#EA0029]/30 rounded-2xl py-6 px-2 h-80`}
          >
            <figure className="w-60 h-56">
              <div
                className={`${
                  hover === index ? "-translate-y-10" : ""
                } relative shadow-md h-full w-full rounded-xl flex justify-center transition-transform duration-300`}
              >
                <img
                  className="object-cover rounded-xl h-[90%]"
                  src={e.imgUrl}
                  alt={e.altText}
                />
              </div>
            </figure>
            <div
              className={`${
                hover === index ? "-translate-y-10 text-[#EA0029]" : ""
              } flex flex-col items-center transition-transform duration-350`}
            >
              <h1 className={`text-lg`}>{e.name}</h1>
              <p className="">{e.designation}</p>
              <span
                className={`${
                  hover === index ? "flex opacity-100 delay-200" : "flex opacity-0 delay-0"
                } gap-5 py-3 transition-opacity duration-300 `}
              >
                <Link to={e.insta} target="_blank_"><FaInstagram size={35} /></Link>
               
                <Link to={e.linkedin} target="_blank_"> <FaLinkedin size={35} /></Link>
               
              </span>
            </div>
          </span>
        ))}
      </div>
    </div>
  );
};
export default Team;
