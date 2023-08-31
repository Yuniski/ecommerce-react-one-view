import LogoSneakes from "@/assets/images/logo.svg";
import AvatarImage from "@/assets/images/image-avatar.png";
import MenuIcon from "@/components/icons/MenuIcon";
import CartIcon from "@/components/icons/CartIcon";
import CloseIcon from "@/components/icons/CloseIcon";
import { useState } from "react";
import NavLinkHeader from "@/components/header/NavLinkHeader";

const MainHeader = () => {
  const [navClass, setNavClass] = useState("hidden h-full gap-y-[21px] font-bold md:flex md:flex-row p-8 md:mr-auto md:gap-4 md:static w-4/5 md:p-0 md:h-auto");

  const handleOpenMenu = () => {
    setNavClass(
      "absolute top-0 left-0 h-full gap-y-[21px] font-bold flex flex-col bg-white md:flex md:flex-row p-8 md:mr-auto md:gap-4 md:static w-4/5 md:p-0 md:h-auto"
    );
  };
  const handleCloseMenu = () => {
    setNavClass(
      "hidden h-full gap-y-[21px] font-bold md:flex md:flex-row p-8 md:mr-auto md:gap-4 md:static w-4/5 md:p-0 md:h-auto"
    )
  };

  return (
    <>
    <header
      className="flex container items-center mx-auto gap-4 p-4 md:p-0
    "
    >
      <button className="md:hidden" onClick={handleOpenMenu}>
        <MenuIcon />
      </button>
      <img
        src={LogoSneakes}
        alt="Logo Sneakers"
        className="mr-auto h-5 mb-1 md:mr-0 "
      />
      <nav className={navClass}>
        <button className="mb-12 md:hidden" onClick={handleCloseMenu}>
          <CloseIcon />
        </button>
        <NavLinkHeader text="Collections" />
        <NavLinkHeader text="Men" />
        <NavLinkHeader text="Women" />
        <NavLinkHeader text="About" />
        <NavLinkHeader text="Contact" />
      </nav>
      <div className="flex gap-4">
        <button>
          <CartIcon />
        </button>
        <img src={AvatarImage} alt="" className="w-10" />
      </div>
    </header>

    <span className="container mx-auto hidden h-[0.5px] w-full bg-gray-500 md:block"></span>
    </>

  );
};

export default MainHeader;
