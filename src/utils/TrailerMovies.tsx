"use client";

import { Play, X } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import YouTube from "react-youtube";

const TrailerMovies = ({ videoId }: { videoId: string }) => {
  const optionDekstop = {
    height: "350",
    width: "720",
    playerVars: {
      autoplay: 0,
    },
  };

  const optionMobile = {
    height: "250",
    width: "330",
    playerVars: {
      autoplay: 0,
    },
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="flex items-center pt-5 gap-2 cursor-pointer hover:opacity-70 transform-transition transition-all ease-in-out relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Play size={24} weight="fill" className="text-white" />
        <p className="text-white text-md font-extrabold w-max">Play trailer</p>
      </div>
      {isOpen && (
        <div className="absolute top-10 inset-x-1/2 bg-opacity-50 transform-transition transition-all ease-in-out z-30">
          <div className="relative">
            <div
              className="absolute top-0 right-0 z-40"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} className="text-white cursor-pointer" />
            </div>
            <div className="hidden md:flex">
              <YouTube videoId={videoId} opts={optionDekstop} />
            </div>
            <div className="flex justify-center items-center inset-x-0 rounded-md md:hidden">
              <YouTube videoId={videoId} opts={optionMobile} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrailerMovies;
