import { GetPopularFilm } from "@/libs/libs-api";
import TrailerMovies from "@/utils/TrailerMovies";
import {
  BookmarkSimple,
  HeartStraight,
  ListDashes,
  Play,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

const placeholderImage = "/img/placeholder.jpg";

const convertYear = (year: string) => {
  const newYear = new Date(year);
  const yearFormat = newYear.toLocaleDateString("id-ID", {
    year: "numeric",
  });
  return yearFormat;
};

const convertMinutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
};

const convertAverage = (average: number) => {
  const newAverage = Math.floor(average * 10);
  return newAverage;
};

const MoviesPage = async ({ params }: { params: { id: any } }) => {
  const { id } = params;

  const moviesList = await GetPopularFilm(`movie/${id}`, "language=id-ID", "");
  const moviesTrailer = await GetPopularFilm(
    `movie/${id}/videos`,
    "language=en-US",
    ""
  );

  // Check if trailers are available
  const trailer =
    moviesTrailer.results.length > 0 ? moviesTrailer.results[0] : null;

    console.log

  return (
    <>
      <div
        className="relative rounded-md flex md:rounded-none w-full h-[600px] mt-20 md:mt-10"
        style={{
          backgroundImage: `url(${baseImageUrl}${moviesList.backdrop_path})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <div className="relative z-20 hidden md:flex w-1/4 px-4 pt-10 md:px-8">
          <Image
            src={
              moviesList.poster_path
                ? `${baseImageUrl}${moviesList.poster_path}`
                : placeholderImage
            }
            width={350}
            height={350}
            alt=""
            className="img-movie rounded-md shadow-xl"
          />
        </div>

        <div className="relative z-20 flex justify-center md:justify-normal px-4 md:px-8 flex-col w-3/4 pt-10">
          <div>
            <h3 className="text-white text-3xl font-extrabold mix-blend-difference">
              {moviesList.title} ({convertYear(moviesList.release_date)})
            </h3>
            <p className="text-white text-md font-medium">
              {moviesList.genres.map((genre: any) => genre.name).join(", ")}
              {" • "}
              {convertMinutesToHours(moviesList.runtime)}
            </p>
          </div>
          <div className="flex items-center gap-4 pt-5">
            <div className="h-16 w-16 flex items-center cursor-pointer hover:scale-110 transform-transition transition-all ease-in-out justify-center ring-4 ring-green-500  bg-red-700 rounded-full mt-4">
              <p className="text-white cursor-pointer flex items-center justify-center  text-xl font-extrabold text-center">
                {convertAverage(moviesList.vote_average)}%
              </p>
            </div>
            <div className="flex flex-col">
              <h3 className="text-white text-xl font-extrabold">User</h3>
              <h3 className="text-white text-xl font-extrabold">scores</h3>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex gap-4 pt-5">
              <Link
                href=""
                className="p-3 bg-black rounded-full"
                title="Add to list"
              >
                <ListDashes size={20} className="text-white p-0.5" />
              </Link>
              <Link
                href=""
                className="p-3 bg-black rounded-full"
                title="Mark as favorite"
              >
                <HeartStraight
                  size={20}
                  weight="fill"
                  className="text-white p-0.5"
                />
              </Link>
              <Link
                href=""
                className="p-3 bg-black rounded-full"
                title="Add to ur watchlist"
              >
                <BookmarkSimple
                  size={20}
                  weight="fill"
                  className="text-white p-0.5"
                />
              </Link>
            </div>
            {trailer && <TrailerMovies videoId={trailer.key} />}
          </div>
          <p className="pt-5 text-white italic font-extrabold">
            {moviesList.tagline}
          </p>

          <div className="hidden md:flex flex-col pt-5">
            <h3 className="text-white text-xl font-extrabold">Overview</h3>
            <p className="text-white">
              {moviesList.overview ||
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
            </p>
          </div>
        </div>
      </div>

      {/* MOBILE SCREEN */}
      <div className="flex px-4 flex-col gap-4 pt-10 md:hidden">
        <h3 className="text-red-700  text-xl font-extrabold border-b-2 border-red-700 pb-2 w-max">
          Overview
        </h3>
        <p className="text-black text-sm ">
          {moviesList.overview ||
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
        </p>
      </div>
    </>
  );
};

export default MoviesPage;
