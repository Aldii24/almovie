import Slider from "@/components/Slider";
import PopularFilm from "../components/PopularFilm";

export default function Home() {
  return (
    <div className="relative">
      <Slider resource="movie/now_playing" firstSlices={10} secondSlices={15} />
      <div className="px-4 md:px-6 xl:px-10 lg:px-32 2xl:px-64 py-4 relative">
        <PopularFilm />
      </div>
    </div>
  );
}
