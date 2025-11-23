type PaginationDotsProps = {
  currentPage: number;
  totalPages: number;
};

export function PaginationDots({
  currentPage,
  totalPages,
}: PaginationDotsProps) {
  return (
    <div className="flex justify-center gap-1">
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={`rounded-full size-1 ${
            index + 1 === currentPage ? "bg-background-primary" : "bg-background-depth"
          }`}
        />
      ))}
    </div>
  );
}

