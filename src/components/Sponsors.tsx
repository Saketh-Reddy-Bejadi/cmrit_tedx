import { SPONSORS } from "./../../data/sponsorsData";
const Sponsors = () => {
  return (
    <div id="sponsors" className="scroll-mt-20
    flex flex-col items-center w-full py-20">
      <h1 className="text-3xl text-center pb-15">Sponsors</h1>
      <div className="flex flex-wrap gap-15 justify-center">
        {SPONSORS.map((ele, id) => (
         <div key={id} className="w-50 hover:-translate-y-3 transition-all duration-500" >
           <img className="w-full aspect-square object-contain rounded-xl border-3 border-red-700/20" key={id} src={ele.imgUrl} alt="" />
         </div>
        ))}
      </div>
    </div>
  );
};
export default Sponsors;
