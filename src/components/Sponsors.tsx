import { SPONSORS } from "./../../data/sponsorsData";
const Sponsors = () => {
  return (
    <div className="flex flex-col items-center w-full p-20">
      <h1 className="text-3xl text-center pb-15">Sponsors</h1>
      <div className="flex flex-wrap gap-15 justify-center">
        {SPONSORS.map((ele, id) => (
         <div className="w-60 hover:-translate-y-3 transition-all duration-500" >
           <img className="w-full rounded-xl border-3 border-red-700/20" key={id} src={ele.imgUrl} alt="" />
         </div>
        ))}
      </div>
    </div>
  );
};
export default Sponsors;
