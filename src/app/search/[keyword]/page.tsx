"use client";

import HeaderList from "@/components/HeaderList";
import MovieSearch from "@/components/MovieSearch";
import { GetPopularFilm } from "@/libs/libs-api";
import { useEffect, useState } from "react";

const SearchMovies = ({ params }: { params: { keyword: any } }) => {
  const { keyword } = params;

  // NGE DECODE KEYWORD SEARCH DARI USER
  const decodeKeyword = decodeURI(keyword);

  const [searchMovies, setSearchMovies] = useState<any>([]);
  const fetchMoviesSearch = async () => {
    const data = await GetPopularFilm(
      "search/movie",
      `query=${decodeKeyword}&language=id-ID`,
      ""
    );
    setSearchMovies(data.results);
  };

  useEffect(() => {
    fetchMoviesSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="px-4 pt-14 py-4 md:px-8 xl:px-16 2xl:px-32 md:pt-0 ">
      <HeaderList title={`${decodeKeyword}`} />
      <MovieSearch api={searchMovies} />
    </div>
  );
};

export default SearchMovies;
