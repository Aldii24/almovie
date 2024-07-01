import { GetPopularFilm } from "@/libs/libs-api";
import Link from "next/link";
import { useEffect, useState } from "react";

const GenreListMobile = () => {
  const [genreList, setGenreList] = useState<any>([]);

  const FetchGenreMovies = async () => {
    const genreList = await GetPopularFilm(
      "genre/movie/list",
      "language=en-US",
      ""
    );
    setGenreList(genreList);
  };

  useEffect(() => {
    FetchGenreMovies();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 py-4 ">
      {genreList.genres?.map((genre: any) => (
        <Link
          href={`/genre/${genre.id}`}
          key={genre.id}
          className="px-2 py-1 ring-1 text-black ring-gray-300 hover:ring-red-700 rounded-3xl text-sm font-medium hover:text-white hover:bg-red-700 cursor-pointer"
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
};

export default GenreListMobile;
