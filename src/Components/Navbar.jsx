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
                <div className="flex items-center gap-3 list-none ">
                    <li className="hover:text-blue-950"><a href="#" className="">Home</a></li>
                    <li className="hover:text-blue-950"><a href="#" className="">Services</a></li>
                    <li className="hover:text-blue-950"><a href="#" className="">Blog</a></li>
                    <li className="hover:text-blue-950"><a href="#" className="">Portfolio</a></li>
                    <li className="hover:text-blue-950"><a href="#" className="">Contact</a></li>
                    <li className="hover:text-blue-950"><FaSearch/></li>
                </div>
            </div>
        </div>
    );
};

export default Navbar;