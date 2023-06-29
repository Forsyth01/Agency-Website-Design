import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGoogle } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"

const Footer = () => {
    return (
        <footer>
            <div class=" mt-18 bg-[#7259db] text-white">
                <div class="md:flex md:justify-between m-auto w-[85%] py-20">
                    <div class="mb-6 md:mb-0 space-y-2">
                        <h1 class="text-xl">Azany Business</h1>
                        <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing <br /> Lorem, ipsum dolor sit amet consectetur adipisicinelit. Quam, earum.</p>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 class="mb-6 ">Product</h2>
                            <ul class=" ">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                                </li>
                                <li>
                                    <a href="https://tailwindcss.com/" class="">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 ">Legal</h2>
                            <ul class=" ">
                                <li class="mb-4">
                                    <a href="https://github.com/themesberg/flowbite" class=" ">Github</a>
                                </li>
                                <li>
                                    <a href="https://discord.gg/4eeurUVvTy" class="">Discord</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 class="mb-6 ">Contact</h2>
                            <ul class="">
                                <li class="mb-4 flex items-center gap-2">
                                    <BsFillTelephoneFill />
                                    <a href="#" class="">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="">Terms &amp; Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 py-1">
                    <FaFacebook />
                    <FaTwitter />
                    <FaLinkedin />
                    <FaGoogle />
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