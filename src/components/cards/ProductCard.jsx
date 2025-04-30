import React from "react";

export default function ProductCard({
  name,
  price,
  image,
  description,
  rate,

  children,
  className,
}) {
  return (
    <div className="bg-blue-400 shadow-md rounded-md px-4 py-2 flex flex-col gap-2 border border-slate-50">
      <img src={image} alt="" className="w-full object-cover rounded-md h-32" />
      {/* Info content holder */}
      <div className="flex flex-col gap-2">
        {/* Card header which holds title and price */}
        <span className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">{name}</h2>
          <span className="text-sm  bg-green-200 text-green-700 p-2 rounded-md">
            {price}
          </span>
        </span>
        {/* Card description */}
        <span className="flex flex-col gap-2">
          <p className="text-sm text-slate-500">{description}</p>
          <p className="w-fit bg-amber-200 text-amber-700 p-2 rounded-md">
            {rate}
          </p>
        </span>
      </div>
      {/* Children div to hold buttons */}
      <div className={className}>{children}</div>
    </div>
  );
}
