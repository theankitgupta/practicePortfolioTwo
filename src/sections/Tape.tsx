import React, { Fragment } from "react";
import StarIcon from "@/assets/icons/star.svg";

function Tape() {
  const words = [
    "Performant",
    "Accessible",
    "Secure",
    "Interactive",
    "Scalable",
    "User Friendly",
    "Responsive",
    "Maintainable",
    "Search Optimized",
    "Usable",
    "Reliable",
    "Efficient",
    "Fast",
    "Intuitive",
    "Engaging",
    "Adaptive",
    "Robust",
    "Flexible",
    "Innovative",
    "Seamless",
    "High-Performance",
    "Cross-Platform",
    "Data-Driven",
    "Customizable",
    "Future-Proof",
    "SEO-Friendly",
  ];

  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:60s]">
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {words.map((word) => (
                  <div key={word} className="inline-flex gap-4 items-center">
                    <span className="uppercase font-extrabold text-gray-900 text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tape;
