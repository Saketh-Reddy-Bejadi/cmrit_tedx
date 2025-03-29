import { useEffect, useState } from "react";
import img from "/images/poster_.jpg";
import { Link } from "react-router-dom";

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

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = String(Math.floor(totalSeconds / (24 * 3600))).padStart(
      2,
      "0"
    );
    const hours = String(
      Math.floor((totalSeconds % (24 * 3600)) / 3600)
    ).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");

    return { days, hours, minutes, seconds };
  };

  const { days, hours, minutes, seconds } = formatTime(timeLeft);

  return (
    <>
      <div
        id="home"
        className="w-full text-2xl text-white flex items-center justify-center flex-wrap py-25 md:py-30 xl:py-15 gap-2"
      >
        <span>
          <div className="customFont xl:text-8xl text-6xl font-semibold pb-5 tracking-tighter md:text-8xl">
            <h1>
              PARADO
              <span className="text-[#EA0029] drop-shadow-[2px_-2px_10px_#e7000cdb] font-bold xl:text-9xl text-7xl md:text-9xl">
                X
              </span>
              &nbsp; OF
            </h1>
            <h1 className="text-[70px] xl:text-[135px] md:text-[115px] font-semibold xl:leading-30">
              THOUGHTS
            </h1>
          </div>
          <div className="rounded-4xl flex flex-col items-center gap-5">
            <div className="text-5xl xl:text-7xl md:text-7xl font-semibold">
              {timeLeft > 0 ? (
                <>
                  <h1 className="shiny-text">{`${days} : ${hours} : ${minutes} : ${seconds}`}</h1>
                </>
              ) : (
                <>
                  <h1 className="shiny-text">00 : 00 : 00 : 00</h1>
                </>
              )}
            </div>
            <Link to={"https://forms.gle/3BqrY8EbFvxCQ4yZ9"}>
              <button className="drop-shadow-[2px_-2px_10px_#e7000cdb] cursor-pointer bg-[#EA0029] text-white md:px-10 md:py-7 md:rounded-3xl px-5 py-3 rounded-2xl hover:bg-[#ea002b9b] transition-colors duration-500 xl:text-2xl md:text-5xl xl:px-5 xl:py-3">
                Buy Pass
              </button>
            </Link>
          </div>
        </span>
        <img className="w-full xl:w-5/12 " src={img} alt="" />
      </div>
      <div className="  flex justify-center"></div>
    </>
  );
};

export default Home;
