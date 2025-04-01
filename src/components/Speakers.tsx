import { useState } from "react";
import { SPEAKERS_DATA } from "./../../data/SepakersData";
import SpeakerModal from "./SpeakerModal";
const Speakers = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<(typeof SPEAKERS_DATA)[0] | null>(null);

  return (
    <div id="speakers" className="py-20 flex flex-col items-center">
      <p className="text-3xl py-10">Speakers</p>
      <div className="w-full flex flex-wrap gap-10 justify-center">
        {SPEAKERS_DATA.map((speaker, id) => (
          <div
            onClick={()=>setSelectedSpeaker(speaker)}
            key={id}
            className="w-70 bg-black flex flex-col items-center rounded-xl px-5 py-5 transition-all duration-500 hover:shadow-lg shadow-red-700 hover:scale-103 border-red-900 border cursor-pointer"
          >
            <img className="rounded-lg h-full" src={speaker.imgUrl} alt="img" />
            <p className="pt-3 text-lg">{speaker.name}</p>
          </div>
        ))}
      </div>
      {selectedSpeaker && (
        <SpeakerModal
          speaker={selectedSpeaker}
          onClose={() => setSelectedSpeaker(null)}
        />
      )}
    </div>
  );
};

export default Speakers;
