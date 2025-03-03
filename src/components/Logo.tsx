
interface LogoProps {
  scale: number;
  pad: number;
  x: boolean;
  text?: boolean;
}

const Logo = ({ scale, pad, x, text }: LogoProps) => {
  return (
    <>
      <span className="flex gap-1 items-center relative">
        <p
          style={{ transform: `scale(${scale})` }}
          className={`text-4xl  transition-transform font-bold drop-shadow-[0px_0px_1.3px_#EA0029] text-[#EA0029] relative`}
        >
          TED {x ?<span style={{ transform: `scale(${scale > 1 ? scale/1.3 : scale})` }} className={`text-xl absolute -right-4 top-0`}>X</span>:null}
        </p>
        {text ? (
          <span style={{
            transform: `scale(${scale > 1 ? scale * 0.9 : scale})`, paddingLeft: `${pad}px`
          }} className={`text-base leading-4 font-semibold text-zinc-200`}>
            <p>CMRIT</p>
            <p>Hyderabad</p>
          </span>
        ):null}
      </span>
    </>
  );
};
export default Logo;
