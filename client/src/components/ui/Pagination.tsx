import { ChevronLeft, ChevronRight } from "lucide-react";

function Pagination({
  itemCount,
  currentPage,
  onPageChange,
}: {
  itemCount: number;
  currentPage: number;
  onPageChange: (page: number, itemCount: number) => void;
}) {
  const pageSize = 50;
  const pageCount = Math.ceil(itemCount / pageSize);

  return (
    <div className="flex justify-center items-center space-x-2 mt-4">
      <button
        onClick={() => onPageChange(currentPage - 1, pageCount)}
        className={`rounded-full bg-white h-10 w-10 flex justify-center items-center ${currentPage === 1 && 'cursor-not-allowed'}`}
        disabled={currentPage === 0}
      >
        <ChevronLeft />
      </button>
      {Array.from({ length: pageCount }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            onClick={() => onPageChange(page, pageCount)}
            className={` rounded-full  h-10 w-10 flex justify-center items-center ${
              currentPage === page
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1, pageCount)}
        className="rounded-full bg-white h-10 w-10 flex justify-center items-center"
        disabled={currentPage === pageCount}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export default Pagination;
