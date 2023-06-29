import React from 'react';
import { SiMarketo } from "react-icons/si"
import { BiMessageDetail, BiCategoryAlt } from "react-icons/bi"
import { PiComputerTower } from "react-icons/pi"
import { TbDeviceComputerCamera } from "react-icons/tb"


const WhatWeOffer = () => {
    return (
        <div className='pt-20 pb-10'>
            <div className="title text-center space-y-2">
                <h1 className="text-2xl md:text-2xl 2xl:text-4xl">What We Offer</h1>
                <p className="font-light text-sm lg:w-[50%] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elitipisicing ipisicing elit. Hic quas dolo elit. Hic quas dolo. Hic quas dolquas dolorem vorem velit.</p>
            </div>
            <div className="icons py-10">
                <div className="grid md:grid-cols-4 lg:grid-cols-5 space-y-4 md:space-y-0 items-center gap-4">
                    <div className="border-[1px] border-[#151450] p-8 text-center rounded w-full hover:bg-[#151450]">
                        <div className="flex flex-col items-center space-y-2">
                            <i className='text-center'><BiCategoryAlt className='text-4xl text-[#725ad9]' /></i>
                            <p className="font-semibold">Seo Marketing</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-[#151450] p-8 text-center rounded w-full hover:bg-[#151450]">
                        <div className="flex flex-col items-center space-y-2">
                            <i className='text-center'><BiMessageDetail className='text-4xl text-[#725ad9]' /></i>
                            <p className="font-semibold">Email Marketing</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-[#151450] p-8 text-center rounded w-full hover:bg-[#151450]">
                        <div className="flex flex-col items-center space-y-2">
                            <i className='text-center'><SiMarketo className='text-4xl text-[#725ad9]' /></i>
                            <p className="font-semibold">Growth Hacking</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-[#151450] p-8 text-center rounded w-full hover:bg-[#151450]">
                        <div className="flex flex-col items-center space-y-2">
                            <i className='text-center'><TbDeviceComputerCamera className='text-4xl text-[#725ad9]' /></i>
                            <p className="font-semibold">Google PPC</p>
                        </div>
                    </div>
                    <div className="border-[1px] border-[#151450] p-8 text-center rounded w-full hover:bg-[#151450]">
                        <div className="flex flex-col items-center space-y-2">
                            <div className="flex flex-col items-center space-y-2">
                                <i className='text-center'><PiComputerTower className='text-4xl text-[#725ad9]' /></i>
                                <p className="font-semibold">Automation Setup</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#151450] rounded px-8 py-6">
                <div className="lg:flex space-y-8 lg:space-y-0 gap-10 items-center justify-between">
                    <div className="lg:w-[50%]">
                        <img src="Search.svg" alt="" className="xl:h-[40vh] md:h-[40vh] m-auto h-full object-cover" />

                    </div>
                    <div className="lg:w-[70%] space-y-4">
                        <h1 className="text-2xl">Search Engine Optimization</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam siit amet consectetur adipisicing elit. Doloret aliquam dolores sint corporis adipisci cum quia ab aliquid.</p> <br />
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,ipsum dolor sit amet consectetur adipisicing elit. Quis, laboriosam. laboriosam.</p>
                        <button className=" bg-[#725ad9] hover:bg-[#644dca] py-2 px-6 rounded">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="bg-[#151450] rounded mt-20 p-6 text-center">
                <div className="flex items-center justify-between text-center">
                    <div className="">
                        <h1 className="font-bold xl:text-3xl md:text-2xl text-2xl text-[#725ad9]">40+</h1>
                        <p className="font-light text-sm md:text-md">Happy Clients</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold xl:text-3xl md:text-2xl text-2xl text-[#725ad9]">120+</h1>
                        <p className="font-light text-sm md:text-md">Project Companies</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold xl:text-3xl md:text-2xl text-2xl text-[#725ad9]">130+</h1>
                        <p className="font-light text-sm md:text-md">Win Awards</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold xl:text-3xl md:text-2xl text-2xl text-[#725ad9]">24+</h1>
                        <p className="font-light text-sm md:text-md">Team Member</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;