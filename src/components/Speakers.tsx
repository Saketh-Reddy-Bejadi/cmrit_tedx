import { useState } from "react";
import { SPEAKERS_DATA } from "./../../data/SepakersData";
import SpeakerModal from "./SpeakerModal";

const Speakers: React.FC = () => {
  const [selectedSpeaker, setSelectedSpeaker] = useState<
    (typeof SPEAKERS_DATA)[0] | null
  >(null);

  return (
    <div id="speakers" className="py-27">
      <h1 className="text-3xl text-center pb-10">Speakers</h1>
      <div className="w-full overflow-x-hidden group">
        <div className={`flex gap-5 py-5 w-max animate-marquee pause-on-hover`}>
          {[...SPEAKERS_DATA, ...SPEAKERS_DATA].map((speaker, id) => (
            <div
              onClick={() => setSelectedSpeaker(speaker)}
              key={id}
              className="h-fit w-80 px-5 rounded-2xl  text-center hover:scale-105 transition-all duration-500 select-none"
            >
              <img
                className="rounded-lg h-10/12"
                src={speaker.imgUrl}
                alt="img"
                onContextMenu={(e) => e.preventDefault()}
              />
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
    </div>
  );
};

export default Speakers;
