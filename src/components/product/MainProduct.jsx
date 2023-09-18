import DetailsProduct from "@/components/product/col-details/DetailsProduct";
import MainImages from "@/components/product/col-images/MainImages";

import imgProd1 from "@/assets/images/image-product-1.jpg";
import imgProd2 from "@/assets/images/image-product-2.jpg";
import imgProd3 from "@/assets/images/image-product-3.jpg";
import imgProd4 from "@/assets/images/image-product-4.jpg";

import imgProdSmall1 from "@/assets/images/image-product-1-thumbnail.jpg";
import imgProdSmall2 from "@/assets/images/image-product-2-thumbnail.jpg";
import imgProdSmall3 from "@/assets/images/image-product-3-thumbnail.jpg";
import imgProdSmall4 from "@/assets/images/image-product-4-thumbnail.jpg";

const ARRAY_IMG = [imgProd1, imgProd2, imgProd3, imgProd4];

const ARRAY_IMG_SMALL = [
  imgProdSmall1,
  imgProdSmall2,
  imgProdSmall3,
  imgProdSmall4,
];

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:min-h-[calc(100vh-88px-3px)] container md:mx-auto">
      <MainImages ARRAY_IMG={ARRAY_IMG} ARRAY_IMG_SMALL={ARRAY_IMG_SMALL} />
      <DetailsProduct />
    </main>
  );
};

export default MainProduct;
