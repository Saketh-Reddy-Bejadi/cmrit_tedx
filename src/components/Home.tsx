import { useEffect, useState } from "react";
import img from "/images/poster_.jpg";

const Home = () => {
  const targetDate = new Date("2025-04-11T09:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      setTimeLeft(distance > 0 ? distance : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const formatTime = (milliseconds:number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = String(Math.floor(totalSeconds / (24 * 3600))).padStart(2, '0');
    const hours = String(Math.floor((totalSeconds % (24 * 3600)) / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
    const seconds = String(totalSeconds % 60).padStart(2, '0');

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes,seconds } = formatTime(timeLeft);

  return (
    <>
      <div
        id="home"
        className="w-full text-2xl text-white flex items-center justify-center flex-wrap py-25 xl:py-15"
      >
        <span>
          <div className="customFont xl:text-8xl text-6xl font-semibold pb-5 tracking-tighter ">
            <h1>
              PARADO
              <span className="text-[#F9130C] drop-shadow-[2px_-2px_10px_#e7000cdb] font-bold xl:text-9xl text-6xl">
                X
              </span>
              &nbsp; OF
            </h1>
            <h1 className="text-[16vw] xl:text-[10vw] font-semibold xl:leading-30">
              THOUGHTS
            </h1>
          </div>
          <div className=" rounded-4xl ">
          <div className="text-center pt-5 text-5xl xl:text-7xl font-semibold">
          {timeLeft > 0 ? (
            <>
              <h1 className="shiny-text">{`${days} : ${hours} : ${minutes} : ${seconds}`}</h1>
            </>
          ) : (
            <>
            <h1 className="shiny-text" >00 : 00 : 00 : 00</h1>
            </>
          )}
        </div>
          </div>
        </span>
        {/* <div>
          <img className="absolute w-50 -top-28 right-9 -z-20 " src={img} alt="" />
          <div className="xl:w-50 w-35 xl:h-50 h-35 bg-[#F9130C] rounded-full shadow-md blur-3xl absolute -top-28 right-5 -z-30"></div>
          <div
            className={`transition-opacity duration-700 absolute -top-20 right-13 -z-30 ${
              blink ? "opacity-100" : "opacity-0"
            } pt-5 xl:w-35 w-15 xl:h-35 h-15 bg-[#F9130C] rounded-full shadow-md blur-2xl `}
          ></div>
        </div> */}
        <img className="w-full xl:w-5/12 " src={img} alt="" />
        {/* <div className="w-50 h-50 bg-[#EA0029] rounded-full shadow-2xl blur-3xl"></div> */}
      </div>
      <div className="  flex justify-center"></div>
    </>
  );
};

export default Home;
