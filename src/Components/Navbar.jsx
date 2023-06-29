import React from 'react';
import {FaSearch} from "react-icons/fa"
import { BiLogoAirbnb } from "react-icons/bi"
const Navbar = () => {
    return (
        <div>
            <div className="flex items-center justify-between py-4">
                <div className="">
                    <i className="text-4xl"><BiLogoAirbnb/></i>
                </div>
                <div className="flex items-center gap-4 list-none ">
                    <li className="hover:text-[#644dca]"><h1><a href="#" className="">Home</a></h1></li>
                    <li className="hover:text-[#644dca]"><h1><a href="#" className="">Services</a></h1></li>
                    <li className="hover:text-[#644dca]"><h1><a href="#" className="">Blog</a></h1></li>
                    <li className="hover:text-[#644dca]"><h1><a href="#" className="">Portfolio</a></h1></li>
                    <li className="hover:text-[#644dca]"><h1><a href="#" className="">Contact</a></h1></li>
                    <li className="hover:text-[#644dca]"><h1><FaSearch/></h1></li>
                </div>
            </div>
        </div>
    );
};

export default Navbar;