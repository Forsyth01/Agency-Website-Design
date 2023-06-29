import React from 'react';
import { BiLogoAirbnb } from "react-icons/bi"
import { HiOutlinePhone } from "react-icons/hi"
import { MdOutlineLocationOn } from "react-icons/md"
const Footer = () => {
    return (
        <footer className="bg-[#7259db] ">
            <div className="py-20 w-[85%] m-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div className='space-y-3'>
                    <i className="text-2xl font-bold"><BiLogoAirbnb /></i>
                    <p className="text-sm leading-6">The Managing Director & Customer Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est harum repudiandae nihil accusantium tempora provident amet odit dolor vel minima.</p>

                </div>
                <div className='space-y-2'>
                    <h1 className="text-lg">Contact</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat possimus natus quas quisquacum!</p>
                    <div className="space-y-2 py-2">
                        <div className="flex items-center gap-3 ">
                            <HiOutlinePhone />
                            <p className="text-sm">+234 906 1382 727</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <MdOutlineLocationOn />
                            <p className="text-sm">Contact us</p>
                        </div>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className="text-lg">Viewer guides</h1>
                    <div className="list-none space-y-2">
                        <li className=""><p className="text-sm">Features</p></li>
                        <li className=""><p className="text-sm">Census</p></li>
                        <li className=""><p className="text-sm">Blog post</p></li>
                        <li className=""><p className="text-sm">Help & Support</p></li>
                    </div>
                </div>
                <div className='space-y-2'>
                    <h1 className="text-lg">Community</h1>
                    <div className="list-none space-y-2">
                        <li className=""><p className="text-sm">About us</p></li>
                        <li className=""><p className="text-sm">Our Client</p></li>
                        <li className=""><p className="text-sm">Legal noice</p></li>
                    </div>
                </div>
            </div>
            <div className="bg-[#211c5c]">
                <div className="flex items-center justify-between m-auto w-[85%] py-5">
                    <div className="">
                        <h1 className="">&copy; 2023 all rights reserved</h1>
                    </div>
                    <div className="">
                        <h1 className="">Designed by Forsyth</h1>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
