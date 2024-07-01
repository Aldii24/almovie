import Image from "next/image";
import Link from "next/link";
import AddToList from "./AddToList";

// BASE IMAGE DARI TMDB
const baseImageUrl = "https://image.tmdb.org/t/p/w500";

// CONVERT DATE
const convertDate = (date: string) => {
  const newDate = new Date(date);
  const dateFormat = newDate.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return dateFormat;
};

const placeholderImage = "/img/placeholder.jpg";

const MovieSearch = ({ api }: { api: any }) => {
  return (
    <div className="flex flex-col gap-6">
      {api.length < 1 ? (
        "Movie's not found!"
      ) : (
        <>
          {api.map((movie: any) => (
            <div
              className="w-full shadow-md border rounded-md relative "
              key={movie.id}
            >
              <Link href={`/movies/${movie.id}`} className="flex gap-4">
                <Image
                  src={
                    movie.poster_path
                      ? `${baseImageUrl}${movie.poster_path}`
                      : placeholderImage
                  }
                  alt={movie.title}
                  width={150}
                  height={150}
                  className="movie-search w-max rounded-l-md"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-lg font-bold hover:text-red-700">
                    {movie.title}
                  </p>
                  <p className="text-gray-500">{convertDate(movie.release_date)}</p>
                </div>
              </Link>
              <div className="absolute top-0 right-0">
                <AddToList />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default MovieSearch;
