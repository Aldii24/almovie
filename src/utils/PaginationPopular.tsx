import { ArrowFatLeft, ArrowFatRight } from "@phosphor-icons/react/dist/ssr";

const toTop = () => {
  window.scrollTo({ top: 650, behavior: "smooth" });
};

const PaginationPopular = ({
  page,
  lastPage,
  setPage,
}: {
  page: number;
  lastPage: number;
  setPage: any;
}) => {
  const handlePrevPage = () => {
    setPage((prev: number) => (prev === 1 ? 1 : prev - 1));
    toTop();
  };

  const handleNextPage = () => {
    setPage((prev: number) => (prev === lastPage ? lastPage : prev + 1));
    toTop();
  };

  return (
    <div className="flex justify-between items-center py-4">
      <ArrowFatLeft
        size={40}
        weight="fill"
        className={`cursor-pointer text-red-700 ${
          page <= 1 ? "cursor-not-allowed text-red-300" : ""
        }`}
        onClick={page > 1 ? handlePrevPage : undefined}
      />

      <p className="text-red-700 font-medium text-medium">
        {page} of {lastPage}
      </p>
      <ArrowFatRight
        size={40}
        weight="fill"
        className="cursor-pointer text-red-700"
        onClick={page < lastPage ? handleNextPage : undefined}
        style={{ pointerEvents: page < lastPage ? "auto" : "none" }}
      />
    </div>
  );
};

export default PaginationPopular;
