import PrevIcon from "@/components/icons/PrevIcon";
import NextIcon from "@/components/icons/NextIcon";

import imgProd1 from "@/assets/images/image-product-1.jpg";
import imgProd2 from "@/assets/images/image-product-2.jpg";
import imgProd3 from "@/assets/images/image-product-3.jpg";
import imgProd4 from "@/assets/images/image-product-4.jpg";

import imgProdSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProdSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProdSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProdSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";
import { useState } from "react";

const ARRAY_IMG = [imgProd1, imgProd2, imgProd3, imgProd4];

export default () => {
  const [index, setIndex] = useState(0);

  const HandleClickNext = () => {
    index === ARRAY_IMG.length - 1 ? setIndex(0) : setIndex(index + 1);
  };
  const HandleClickPrev = () => {
    index === 0 ? setIndex(ARRAY_IMG.length - 1) : setIndex(index - 1);
  };

  return (
    <section className="grid md:grid-cols-4 md:gap-4 ">
      <div className="col-span-4 relative">
        <img src={ARRAY_IMG[index]} alt="" className="aspect-[16/12]" />
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-between px-4">
          <button
            className="bg-white-primary w-10 h-10 rounded-full grid place-items-center"
            onClick={HandleClickPrev}
          >
            <PrevIcon />
          </button>
          <button
            className="bg-white-primary w-10 h-10 rounded-full grid place-items-center"
            onClick={HandleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      <img src={imgProdSmall1} alt="" className="hidden md:block" />
      <img src={imgProdSmall2} alt="" className="hidden md:block" />
      <img src={imgProdSmall3} alt="" className="hidden md:block" />
      <img src={imgProdSmall4} alt="" className="hidden md:block" />
    </section>
  );
};
