import { GetPopularFilm } from "@/libs/libs-api";
import Image from "next/image";
import Link from "next/link";
import HeaderList from "./HeaderList";
import AddToList from "./AddToList";

const baseImageUrl = "https://image.tmdb.org/t/p/original";

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

const truncateString = (str: string, num: number) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
};

const PopularFilm = async () => {
  const populars = await GetPopularFilm("movie/popular", "language=id-ID", 1);

  return (
    <>
      <HeaderList
        title="Popular Movies"
        linkTitle="See All"
        linkHref="/popular"
      />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 relative">
        {populars.results?.slice(0, 12).map((popular: any) => (
          <>
            <div
              key={popular.id}
              className="pb-4 h-[350px] bg-white rounded-md shadow-xl relative"
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
                  className="img shadow-xl rounded-t-md "
                />
                <div className="absolute bottom-[80px] left-1 h-10 w-10 flex items-center justify-center bg-red-700 rounded-full">
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
    </>
  );
};

export default PopularFilm;
