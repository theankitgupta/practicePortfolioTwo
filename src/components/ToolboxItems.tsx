import { twMerge } from "tailwind-merge";
import TechIcon from "./TechIcon";
import React from "react";

type Props = {
  items: {
    title: string;
    iconType: React.ElementType;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
};

function ToolBoxItems({ items, className, itemsWrapperClassName }: Props) {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemsWrapperClassName
        )}
      >
        {items.map((item) => (
          <div
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
            key={item.title}
          >
            <TechIcon component={item.iconType} />
            <span className="font-semibold">{item.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolBoxItems;
