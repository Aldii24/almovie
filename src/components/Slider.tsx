"use client";

import { GetPopularFilm } from "@/libs/libs-api";
import Image from "next/image";
import { useEffect, useState } from "react";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

const Slider = ({
  resource,
  firstSlices,
  secondSlices,
}: {
  resource: string;
  firstSlices: number;
  secondSlices: number;
}) => {
  const [sliders, setSliders] = useState<any>([]);

  const SliderImage = async () => {
    const images = await GetPopularFilm(`${resource}`, "language=id-ID", 1);
    setSliders(images.results);
  };

  useEffect(() => {
    SliderImage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex relative w-full pt-14 h-96 md:h-[calc(100vh-80px)] shadow-inner-image">
      {sliders
        ?.slice(`${firstSlices}`, `${secondSlices}`)
        .map((slider: any, index: number) => (
          <div
            key={index}
            className="relative h-[24rem - 3.5rem] w-screen md:h-[calc(100vh-140px)]"
          >
            <Image
              src={`${baseImageUrl}${slider.poster_path}`}
              alt=""
              sizes="100%"
              fill
              className="object-cover"
            />
          </div>
        ))}
    </div>
  );
};

export default Slider;
