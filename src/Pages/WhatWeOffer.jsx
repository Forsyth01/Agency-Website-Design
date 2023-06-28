import React from 'react';

const WhatWeOffer = () => {
    return (
        <div>
            <div className="title text-center">
                <h1 className="font-bold text-center">What We Offer</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quas dolorem velit.</p>
            </div>
            <div className="icons">
                <div className="flex items-center gap-4">
                    <div className="border p-8 text-center rounded w-full hover:bg-blue-950">
                        <i className="">Icon</i>
                        <p className="font-semibold">Seo Marketing</p>
                    </div>
                    <div className="border p-8 text-center rounded w-full hover:bg-blue-950">
                        <i className="">Icon</i>
                        <p className="font-semibold">Seo Marketing</p>
                    </div>
                    <div className="border p-8 text-center rounded w-full hover:bg-blue-950">
                        <i className="">Icon</i>
                        <p className="font-semibold">Seo Marketing</p>
                    </div>
                    <div className="border p-8 text-center rounded w-full hover:bg-blue-950">
                        <i className="">Icon</i>
                        <p className="font-semibold">Seo Marketing</p>
                    </div>
                    <div className="border p-8 text-center rounded w-full hover:bg-blue-950">
                        <i className="">Icon</i>
                        <p className="font-semibold">Seo Marketing</p>
                    </div>
                </div>
            </div>

            <div className="bg-blue-950 rounded p-4">
                <div className="flex items-center justify-between">
                    <div className="w-[50%]">
                    <img src="" alt="" className=""/>
                    <h1 className="">Place your Image</h1>
                    </div>
                    <div className="w-[50%]">
                        <h1 className="font-bold">Search Engine Optimization</h1>
                        <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore numquam siit amet consectetur adipisicing elit. Doloret aliquam dolores sint corporis adipisci cum quia ab aliquid.</p> <br/>
                        <p className="">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, laboriosam.</p>
                        <button className="bg-gray-900 rounded px-3 py-2">Learn more</button>
                    </div>
                </div>
            </div>

            <div className="bg-blue-950 rounded my-10 p-4">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h1 className="font-bold text-3xl text-gray-900">40+</h1>
                        <p className="">Happy Clients</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-3xl text-gray-900">120+</h1>
                        <p className="">Project Companies</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-3xl text-gray-900">130+</h1>
                        <p className="">Win Awards</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-3xl text-gray-900">24+</h1>
                        <p className="">Team Member</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeOffer;