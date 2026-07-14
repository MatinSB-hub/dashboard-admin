import React from "react";
import Filter from "./Filter";
import Search from "./Search";

function TableHeader({ header }) {
  const { Buttons, setFilter,filterType } = header;
  return (
    <div className="h-16 flex justify-between items-center px-5 ">
      <p className="text-xl">
        <strong>{header.title}</strong>
      </p>
      {(typeof Buttons == "function" || typeof Buttons == "object") ? (
        Buttons
      ) : (
        <div className="flex text-gray-500 *:h-10 *:bg-gradient-to-t *:from-zinc-50 *:cursor-pointer *:select-none *:hover:to-zinc-50 *:hover:from-transparent *:hover:shadow-sm *:focus-within:ring-4 *:duration-150 *:focus-within:ring-gray-500/20 *:border *:primary-border-color *:rounded-md items-center gap-3">
          <Filter setFilter={setFilter} filterType={filterType}/>
          <Search />
        </div>
      )}
    </div>
  );
}

export default TableHeader;
