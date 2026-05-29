// import { FaFacebookF } from "react-icons/fa";
// import ScreenshotImage from "./assets/Screenshot 2026-05-07 173314.png"


// const App = () => {
//   return (
//     <div className="h-screen flex justify-center items-center">
//       <div className="h-[500px] w-[500px] bg-gray-400 p-5 rounded-xl">
//         <img src={ScreenshotImage} alt="cricket"  className="h-[100px] w-[200px]"
// />
// <p className="text-justify">
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//    Ex quod alias iure facilis! Magnam sed minus aut nisi quas nesciunt ea fugiat vel eum quia,
//     saepe voluptates distinctio. At, ut!
// </p>
// <button className="bg-blue-700 text-white px-5 py-2 hover:bg-black hover:text-blue-400 duration-500 hover:scale-105">
//  <button><FaFacebookF /></button>
// </button>
//       </div>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { FaPhoneAlt, FaSun } from "react-icons/fa";
// import downloadLogo from "./assets/download.png";

// const App = () => {
//   return (
//     <div className="w-full">

    
//       <div className="bg-amber-500 text-white flex justify-between items-center px-6 py-3 text-lg">
        
//         <div className="flex items-center gap-3">
//           <FaPhoneAlt />
//           <p>+977-8565685</p>
//         </div>

//         <p>Free Shipping on Orders Above Rs. 2000</p>
//       </div>


//       <nav className="bg-black text-white flex items-center justify-between px-10 py-6">
        
//         <div className="flex items-center gap-2">
//           <img
//             src={downloadLogo}
//             alt="logo"
//             className="w-20"
//           />
//         </div>

//         <ul className="flex items-center gap-12 text-2xl font-semibold ml-90">
//           <li className="hover:text-amber-400 cursor-pointer">Home</li>
//           <li className="hover:text-amber-400 cursor-pointer">About</li>
//           <li className="hover:text-amber-400 cursor-pointer">Collection</li>
//           <li className="hover:text-amber-400 cursor-pointer">Contact</li>
//           <li className="hover:text-amber-400 cursor-pointer">Login</li>
//         </ul>

//         <div className="flex items-center gap-6">
          
//           <button className="bg-amber-500 hover:bg-amber-600 px-8 py-3 rounded-2xl text-xl font-semibold">
//             shop now
//           </button>

//           <FaSun className="text-2xl cursor-pointer hover:text-amber-400" />
//         </div>
//       </nav>
//     </div>
//   );
// };

// 

import HeroSection from "./components/HeroSection/Herosection"
import Navbar from "./components/Navbar/Navbar"


const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
    </div>
  )
}

export default App