import DetailsProduct from "@/components/product/DetailsProduct";
import GaleryProduct from "@/components/product/GaleryProduct";

const MainProduct = () => { 
  return (
    <main className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <GaleryProduct />
        <DetailsProduct />
      </main>
  );
};

export default MainProduct