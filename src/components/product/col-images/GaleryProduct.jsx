import { useState } from "react";
import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

export default ({ ARRAY_IMG = [], ARRAY_IMG_SMALL = [] }) => {
  const [index, setIndex] = useState(0);

  const handleClickNext = () => {
    index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const handleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4">
      <div className="relative col-span-4">
        <img
          src={ARRAY_IMG[index]}
          alt=""
          className="aspect-[16/12] w-full md:aspect-[16/18] md:rounded-md"
        />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4">
          <button
            className="bg-white-primary w-10 h-10 rounded-full grid place-items-center"
            onClick={handleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="grid bg-white-primary w-10 h-10 rounded-full place-items-center"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>

      {ARRAY_IMG_SMALL.map((smallImg, i) => (
        <div
          onClick={() => {
            setIndex(i);
          }}
          className="relative rounded-md overflow-hidden cursor-pointer "
          key={i}
        >
          <img
            src={smallImg}
            alt=""
            className="hidden md:block md:rounded-md"
          />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.5)] ${
              i === index && "bg-[rgba(255, 255, 255, 0.5)"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};
