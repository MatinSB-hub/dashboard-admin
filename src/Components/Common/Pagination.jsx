import clsx from "clsx";
import { useEffect, useState } from "react";

function Pagination({ items = null, setItems = null, itemsPerPage = null }) {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const firstItems = (currentPage - 1) * itemsPerPage;
    const lastItems = firstItems + itemsPerPage;
    const paginatedItem = items.slice(firstItems, lastItems);
    setItems(paginatedItem);
  }, [currentPage,items]);

  useEffect(() => {
    setCurrentPage(1);
  }, [items]);

  const changePageHandler = (pageNumber) => setCurrentPage(pageNumber);

  const pagesCount = Math.ceil(items.length / itemsPerPage);

  const renderPageNumber = () => {
    const pageNumbres = [];
    for (let i = 1; i <= pagesCount; i++) {
      pageNumbres.push(
        <button
          key={i}
          className={clsx("pagination-button select-none not-active-tab", {
            "active-tab": currentPage === i,
          })}
          onClick={() => changePageHandler(i)}
        >
          {i}
        </button>,
      );
    }
    return pageNumbres;
  };

  return (
    <div className="pagination">
      <button
        onClick={() => changePageHandler(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx("pagination-prev-button select-none", {
          "pages-ended active-tab": currentPage === 1,
        })}
      >
        قبلی
      </button>

      {/* <div className="px-4 flex items-center justify-evenly gap-2">
        {Array.from({ length: pagesCount }).map((__dirname, index) => (
          <button
            className={clsx("pagination-button select-none not-active-tab", {
              "active-tab":
                currentPage === index + 1,
            })}
            onClick={() => changePageHandler(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}
      {renderPageNumber()}

      <button
        onClick={() => changePageHandler(currentPage + 1)}
        disabled={currentPage === pagesCount}
        className={clsx("pagination-next-button select-none", {
          "pages-ended active-tab": currentPage === pagesCount,
        })}
      >
        بعدی
      </button>
    </div>
  );
}

export default Pagination;
