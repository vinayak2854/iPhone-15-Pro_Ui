import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import {navLists}  from "../constants"

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px=10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width bg-black">
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((nav) => (
            <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">{nav}</div>
          ))}
        </div>
        <div className="flex item-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search" width={18} height={18}/>
          <img src={bagImg} alt="bag" width={18} height={18}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


// import React, { useState } from "react";
// import { appleImg, bagImg, searchImg } from "../utils";
// import { navLists } from "../constants";

// // Using require to import SVG images
// const menuImg = require("../assets/images/menu.svg").default;
// const closeImg = require("../assets/images/close.svg").default;

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
//       <nav className="flex w-full screen-max-width">
//         <img src={appleImg} alt="Apple" width={14} height={18} />

//         <div className="flex flex-1 justify-center max-sm:hidden">
//           {navLists.map((nav) => (
//             <div key={nav} className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all">{nav}</div>
//           ))}
//         </div>

//         <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
//           <img src={searchImg} alt="search" width={18} height={18} />
//           <img src={bagImg} alt="bag" width={18} height={18} />
//           <div className="sm:hidden text-white">
//             <img
//               src={isMenuOpen ? closeImg : menuImg}
//               alt={isMenuOpen ? "Close menu" : "Open menu"}
//               width={24}
//               height={24}
//               onClick={toggleMenu}
//             />
//           </div>
//         </div>
//       </nav>

//       {isMenuOpen && (
//         <div className="sm:hidden flex flex-col text-white items-center mt-5">
//           {navLists.map((nav) => (
//             <div key={nav} className="py-2 text-sm cursor-pointer text-gray hover:text-white transition-all">{nav}</div>
//           ))}
//         </div>
//       )}
//     </header>
//   );
// };

// export default Navbar;
