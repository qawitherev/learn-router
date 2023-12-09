import React from "react";

export function LearnTailWind() {
  return (
    <>
      <h1>Using Grid</h1>
      <div className="grid auto-rows-[200px] sm:grid-cols-1 md:grid-cols-6 gap-4 p-20 md:p-10">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className={`rounded-xl border-2 border-slate-400 bg-neutral-100 dark:bg-neutral-400
            ${i === 0 ? "md:col-span-3 md:row-span-1" : ""}
          ${i === 1 ? "md:col-span-1 md:row-span-1" : ""}
          ${[2, 5].includes(i) ? "md:col-span-2 md:row-span-2" : ""}
          ${i === 3 ? "md:col-span-1 md:row-span-2" : ""}
          ${i === 4 ? "md:col-span-3 md:row-span-2" : ""}
          ${i === 6 ? "md:col-span-4 md:row-span-1" : ""}
          transform transition-transform hover:scale-95
          `}
          >
            <SubBento data={i} />
          </div>
        ))}
      </div>
    </>
  );
}

function SubBento(props) {
  const data = props.data;
  switch (data) {
    case 0:
      return (
        <>
          <SubBento0 />
        </>
      );
    case 1:
      return (
        <>
          <h1>{props.data}</h1>
        </>
      );
    case 2:
      return (
        <>
          <h1>{props.data}</h1>
        </>
      );
    case 3:
      return (
        <>
          <h1>{props.data}</h1>
        </>
      );
    case 4:
      return (
        <>
          <h1>{props.data}</h1>
        </>
      );
    case 5:
      return (
        <>
          <h1>{props.data}</h1>
        </>
      );
    case 6:
      return (
        <>
          <h1>{props.data}</h1>
        </>
      );
  }
}

function SubBento0() {
  return (
    <>
      <div>
        <h1>This is SubBento0</h1>
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
