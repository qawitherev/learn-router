import React from "react";

export function LearnTailWind() {
  return (
    <>
      <h1>Using Grid</h1>
      <div className="grid auto-rows-[192px] grid-cols-6 gap-4 p-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 border-slate-400 bg-neutral-100 dark:bg-neutral-400
            ${i === 0 ? " col-span-3 row-span-1 " : ""}
          ${i === 1 ? "col-span-1 row-span-1" : ""}
          ${[2, 5].includes(i) ? " col-span-2 row-span-2 " : ""}
          ${i === 3 ? " col-span-1 row-span-2 " : ""}
          ${i === 4 ? " col-span-3 row-span-2 " : ""}
          ${i === 6 ? " col-span-4 row-span-1 " : ""}
          `}
          >
            {i}
          </div>
        ))}
      </div>
    </>
  );
}

/**
 * steps to make bentobox grid using grid
 * 1. make a div, specify row height, specify number of col and gap
 * 2. row will follow the number of items (dynamic)
 * 3. make array with length of your bentobox grid
 * 4. map each element into a div
 * 5.
 */
