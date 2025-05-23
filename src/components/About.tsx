import Logo from "./Logo";
import { aboutData } from "../../data/aboutData.ts";

const About = () => {
  return (
      <span
        id="about"
        className="xl:px-15 xl:p-10 p-5 grid grid-cols-1 gap-10 scroll-mt-20"
        style={{backgroundImage: "url('/images/circles_bg.jpg", backgroundSize: "cover",backgroundPosition: "center"}}
      >
        {aboutData.map((item, index) => (
          <span
            key={index}
            className={`cardShadow hover:scale-105 transition-all duration-600 bg-[#0d0d0d]/90 xl:p-10 p-8 rounded-2xl xl:w-7/12 md:w-8/12 ${
              index % 2 !== 0 ? "justify-self-end" : null
            }`}
          >
            <span>
              <span
                className={`pl-4 float-left`}
                style={{ paddingRight: `${item.logoValue.space}px` }}
              >
                <Logo
                  scale={item.logoValue.scale}
                  pad={item.logoValue.pad}
                  x={item.logoValue.x}
                  text={item.logoValue.text}
                />
              </span>
              <span>
                <p className="pt-[18px] text-base xl:text-lg">
                  {item.description}
                </p>
              </span>
            </span>
          </span>
        ))}
      </span>
  );
};

export default About;
