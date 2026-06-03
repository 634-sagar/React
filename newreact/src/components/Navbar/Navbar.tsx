import { FaPhoneAlt } from "react-icons/fa";

import { Navlink } from "../../constant/Navlinks";
import Darkmode from "./Darkmode";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import ResponsiveMenu from "./ResponsiveMenu";
import { Logo } from "../../image";
const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  const handelMenuToggle = ()=> setMenu(!showMenu);
  return (
    <div className="sticky top-0 z-50">
    <div className="bg-primary">
        <div className=" container hidden md:flex justify-between  items-center">
        <div className="flex items-center gap-3">
          <FaPhoneAlt />
          <span>+977-9852656</span>
        </div>
        <div>
          <p>Free Shipping on Orders Above Rs. 2000</p>
        </div>
        
      </div>
    </div>

      <div className="  dark:bg-black dark:text-white">
      <div className=" container flex justify-between ">
          <div>
          <img src={Logo} alt="logo" className="h-16 w-16" />
        </div>

        <div className="">
          <ul className="hidden md:flex items-center gap-3 font-semibold h-full">
            {Navlink.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.name}</a>
              </li>
            ))}
            <button className="primary-btn">Shop Now</button>
          <Darkmode/>
          </ul>
        </div>
<div className="flex md:hidden items-center gap-3 ">
  <Darkmode/>

  {showMenu ? (
    <IoMdClose onClick={handelMenuToggle} className="text-2xl"/>
  ): (
    <CiMenuBurger onClick={handelMenuToggle} className="text-2xl"/>
  )}
</div>
      </div>

      </div>
      <ResponsiveMenu showMenu={showMenu}/>
    </div>
  );
};

export default Navbar;