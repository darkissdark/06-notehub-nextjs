import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  totalPages: number;
  page: number;
  onPageChange: (selectedPage: number) => void;
}

function Pagination({ totalPages, page, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <ReactPaginate
      pageCount={totalPages}
      forcePage={page - 1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      marginPagesDisplayed={1}
      pageRangeDisplayed={2}
    />
  );
}

export default Pagination;
