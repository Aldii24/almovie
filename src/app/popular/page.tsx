"use client";

import { GetPopularFilm } from "@/libs/libs-api";
import Image from "next/image";
import Link from "next/link";
import HeaderList from "@/components/HeaderList";
import AddToList from "@/components/AddToList";
import Slider from "@/components/Slider";
import PaginationPopular from "@/utils/PaginationPopular";
import Filter from "@/components/Filter";
import { useEffect, useState } from "react";
import GenreListMobile from "@/components/GenreListMobile";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }

  return str.slice(0, num) + "...";
};

const convertDate = (date: string) => {
  const newDate = new Date(date);
  const dateFormat = newDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return dateFormat;
};

const convertAverage = (average: number) => {
  const newAverage = Math.floor(average * 10);
  return newAverage;
};

const PopularPage = () => {
  const [populars, setPopulars] = useState<any>([]);
  const [page, setPage] = useState<any>(1);

  const fetchMoviesPopular = async () => {
    const data = await GetPopularFilm(
      "movie/popular",
      "language=id-ID",
      `page=${page}`
    );
    setPopulars(data);
  };

  useEffect(() => {
    fetchMoviesPopular();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Slider resource="movie/popular" firstSlices={0} secondSlices={5} />
      <div className="pt-20 px-4 md:px-4 xl:px-10 2xl:px-32">
        <HeaderList title="Popular Movies" />
      </div>
      <div className="w-full flex flex-col md:flex md:flex-row gap-8 px-4 md:px-4 xl:px-10 2xl:px-32">
        {/* BIGGER SCREEN */}
        {/* LEFT SIDE */}
        <div className="hidden md:flex w-1/4">
          <Filter />
        </div>
        {/* LEFT SIDE */}
        {/* BIGGER SCREEN */}

        {/* SMALL SCREEN */}
        <div className="md:hidden">
          <GenreListMobile />
        </div>
        {/* SMALL SCREEN */}

        {/* RIGHT SIDE */}
        <div className="w-full md:w-3/4">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 relative">
            {populars.results?.map((popular: any) => (
              <>
                <div
                  key={popular.id}
                  className="h-[360px] bg-white rounded-md shadow-xl relative"
                >
                  {/* ADD TO MENU */}
                  <AddToList />
                  {/* ADD TO MENU */}

                  <Link href={`/movies/${popular.id}`}>
                    <Image
                      src={`${baseImageUrl}${popular.poster_path}`}
                      alt={popular.title}
                      width={250}
                      height={250}
                      className="img rounded-t-md shadow-xl"
                    />
                    <div className="absolute bottom-[90px] left-1 h-10 w-10 flex items-center justify-center bg-red-700 rounded-full">
                      <h3 className="text-sm text-white font-extrabold ">
                        {convertAverage(popular.vote_average)}%
                      </h3>
                    </div>
                    <p className="text-black font-extrabold text-sm md:text-medium mt-8 mx-4">
                      {truncateString(popular.title, 20)}
                    </p>
                    <p className="text-gray-500 mx-4 text-xs">
                      {convertDate(popular.release_date)}
                    </p>
                  </Link>
                </div>
              </>
            ))}
          </div>

          {/* PAGINATION */}
          <PaginationPopular
            page={page}
            lastPage={populars.total_pages}
            setPage={setPage}
          />
          {/* PAGINATION */}
        </div>
        {/* RIGHT SIDE */}
      </div>
    </>
  );
};

export default PopularPage;
