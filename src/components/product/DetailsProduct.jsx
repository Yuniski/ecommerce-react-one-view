import CartIcon from "@/components/icons/CartIcon";

export default () => {
  return (
    <section className="container mx-auto px-4">
      <p className="text-orange-primary font-bold uppercase tracking-wide mb-3">
        Sneaker Company
      </p>
      <h2 className="text-3xl font-bold mb-4 ">
        Fall Limited Edition Sneakers
      </h2>
      <p className="text-dark-grayish-blue mb-5">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className="grid gap-4 grid-cols-3 font-bold items-center mb-5">
        <span className="text-3xl">$125.00</span>
        <span className="bg-pale-orange rounded-md mr-auto py-1 px-2 text-orange-primary">
          50%
        </span>
        <span className="text-right text-grayish-blue text-lg line-through">
          $250.00
        </span>
      </div>
      <div className="grid grid-cols-3 font-bold gap-4">
        <div className="col-span-3 bg-light-grayish-blue flex items-baseline justify-between py-2 px-5 pb-3 rounded-md">
          <button className="text-3xl text-orange-primary">-</button>
          <span className="text-xl">0</span>
          <button className="text-3xl text-orange-primary">+</button>
        </div>
        <button className="col-span-3 bg-orange-primary gap-x-3 text-white rounded-md py-3 flex items-center justify-center hover:bg-orange-700 transition-all">
          <CartIcon fill="#fff" />
          <span>Add to cart</span>
        </button>
      </div>
    </section>
  );
};
