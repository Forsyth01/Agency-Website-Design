import React from 'react';
import { SiMarketo } from "react-icons/si"
import { BiMessageDetail, BiCategoryAlt } from "react-icons/bi"
import { PiComputerTower } from "react-icons/pi"
import { TbDeviceComputerCamera } from "react-icons/tb"


const WhatWeOffer = () => {
    return (
        <div className='pt-20 pb-10'>
            <div className="title text-center space-y-2">
                <h1 className=" text-center text-3xl">What We Offer</h1>
                <p className="font-light text-sm w-[50%] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elitipisicing ipisicing elit. Hic quas dolo elit. Hic quas dolo. Hic quas dolquas dolorem vorem velit.</p>
            </div>
            <div className="icons py-10">
                <div className="flex items-center gap-4">
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
                <div className="flex gap-5 items-center justify-between">
                    <div className="w-[50%]">
                        <img src="Search.svg" alt="" className="h-[40vh]  object-cover" />

                    </div>
                    <div className="w-[65%] space-y-2">
                        <h1 className="text-2xl">Search Engine Optimization</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam siit amet consectetur adipisicing elit. Doloret aliquam dolores sint corporis adipisci cum quia ab aliquid.</p> <br />
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis,ipsum dolor sit amet consectetur adipisicing elit. Quis, laboriosam. laboriosam.</p>
                        <button className="bg-[#725ad9] hover:bg-[#644dca] py-2 px-6 rounded">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="bg-[#151450] rounded my-10 p-6 text-center">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className="font-bold text-3xl text-[#725ad9]">40+</h1>
                        <p className="font-light text-md">Happy Clients</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-3xl text-[#725ad9]">120+</h1>
                        <p className="font-light text-md">Project Companies</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-3xl text-[#725ad9]">130+</h1>
                        <p className="font-light text-md">Win Awards</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-3xl text-[#725ad9]">24+</h1>
                        <p className="font-light text-md">Team Member</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;