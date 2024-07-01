import { GetPopularFilm } from "@/libs/libs-api";
import Link from "next/link";
import { useEffect, useState } from "react";

const GenreList = () => {
  const [genreList, setGenreList] = useState<any>([]);

  const FetchGenreList = async () => {
    const genreList = await GetPopularFilm(
      "genre/movie/list",
      "language=en-US",
      ""
    );
    setGenreList(genreList);
  };

  useEffect(() => {
    FetchGenreList();
  }, []);

  return (
    <div className="py-4 rounded-b-md shadow-xl border bg-white  px-4">
      <p className="text-sm text-gray-500">Genres</p>
      <div className="flex flex-wrap gap-4 py-4">
        {genreList.genres?.map((genre: any) => (
          <Link
            href={`/genre/${genre.id}`}
            key={genre.id}
            className="px-2 py-1 ring-1 ring-gray-300 hover:ring-red-700 rounded-3xl text-sm font-medium hover:text-white hover:bg-red-700 cursor-pointer"
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenreList;
