import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

interface SpeakerModalProps {
  speaker: {
    name: string;
    title: string;
    imgUrl: string;
    desc: string;
    socials: {
      Linkedin?: string;
      Insta?: string;
      X?: string;
      Youtube?: string;
    }[];
  };
  onClose: () => void;
}

const SpeakerModal: React.FC<SpeakerModalProps> = ({ speaker, onClose }) => {

    const [visible,setVisible]=useState(false);

    useEffect(() => {
        setVisible(true);
        document.body.style.overflow = "hidden";
        return () => {
          document.body.style.overflow = "auto";
        };
      }, []);


  return (
    <div className={`fixed inset-0 flex justify-center items-center z-2000 p-4 backdrop-blur-xs transition-opacity duration-300 ease-in-out ${visible ? "opacity-100" : "opacity-0"}`}>
      <div className={`bg-[#100000] p-10 rounded-lg max-w-xl w-full max-h-[85vh] overflow-y-auto relative border border-[#EA0029]/20 transform transition-transform duration-300 ease-in-out ${ visible ? "scale-100" : "scale-95"} `}>
        <IoCloseSharp
          onClick={onClose}
          className={`cursor-pointer z-30 absolute right-7 text-[#EA0029] text-3xl`}
        />
        <div className="xl:flex justify-center gap-5 items-center">
          <img
            src={speaker.imgUrl}
            alt={speaker.name}
            className="w-32 h-32 object-cover rounded-full m-auto xl:m-0"
          />
          <div className="border-b border-zinc-800">
            <h2 className="text-2xl font-semibold text-center py-1">
              {speaker.name}
            </h2>
            <p className="text-gray-300 text-center">{speaker.title}</p>
            {speaker.socials.map((social, id) => {
              const { Insta, X, Linkedin, Youtube } = social;
              return (
                <div
                  key={id}
                  className="flex gap-3 py-3 text-[30px] justify-center"
                >
                  {Insta ? (
                    <Link
                      target="__blank__"
                      to={`https://instagram.com/${Insta}`}
                    >
                      <FaInstagram />
                    </Link>
                  ) : null}
                  {Linkedin ? (
                    <Link
                      target="__blank__"
                      to={`https://linkedin.com/in/${Linkedin}`}
                    >
                      <FaLinkedin />
                    </Link>
                  ) : null}
                  {X ? (
                    <Link target="__blank__" to={`https://x.com/${X}`}>
                      <FaXTwitter />
                    </Link>
                  ) : null}
                  {Youtube ? (
                    <Link
                      target="__blank__"
                      to={`https://youtube.com/${Youtube}`}
                    >
                      <FaYoutube />
                    </Link>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>
        <p className="mt-4">{speaker.desc}</p>
      </div>
    </div>
  );
};

export default SpeakerModal;
