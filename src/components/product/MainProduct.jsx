import DetailsProduct from "@/components/product/DetailsProduct";
import GaleryProduct from "@/components/product/GaleryProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 gap-8 items-center md:grid-cols-2 md:min-h-[calc(100vh-88px-3px)] container md:mx-auto">
      <GaleryProduct />
      <DetailsProduct />
    </main>
  );
};

export default MainProduct;
