import React, { useState } from "react";

function Filter({ setFilter, filterType }) {
  return (
    // <button className='flex-center gap-1 border primary-border-color '>
    //     <HiFilter className='text-lg'/>
    //     <span className='text-sm'>فیلتر</span>
    // </button>

    // مقدار value تگ option چوت از طریق e ارسال میشه بصورت string دریافت میشود برای همین هم کلا مقدارvalue را از نوعstring قرار دادیم
    <select
      className="w-20 *:h-10 *:bg-gradient-to-t *:from-zinc-50 *:cursor-pointer *:select-none *:hover:to-zinc-50 *:hover:from-transparent *:hover:shadow-sm *:duration-150 *:border *:primary-border-color *:rounded-md"
      value={filterType}
      onChange={(e) => setFilter(e.target.value)}
    >
      <option value={"all"}>همه</option>
      <option value={"private"}>خصوصی</option>
      <option value={"general"}>عمومی</option>
    </select>
  );
}

export default Filter;
