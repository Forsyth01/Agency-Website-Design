import React from 'react';
import { BiAperture, BiFemaleSign } from "react-icons/bi"
import { FaRegHandshake } from "react-icons/fa"
import { SiAltiumdesigner } from "react-icons/si"

const WhyWeChooseUs = () => {
    return (
        <div>
            <div className="">
                <div className="title text-center leading-6 space-y-2 py-5">
                    <h1 className="text-2xl md:text-2xl 2xl:text-4xl">Why Choose Us</h1>
                    <p className="lg:w-[50%] m-auto text-sm font-light">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, maiores! Lorem onsectetur adipisicres! Lorem ipsum dolor siipsum dolor sit amet.</p>
                </div>
                <div className="card py-6">
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 space-y-4 md:space-y-0 items-center gap-4">
                        <div className="bg-[#151450] hover:bg-[#151450]  p-2 rounded shadow-md leading-8 space-y-2">
                            <i className=""><BiAperture className="text-5xl bg-orange-800 rounded p-2"/></i>
                            <h1 className="card-title text-xl">Professional <br/> & Certified Company</h1>
                            <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio possimus rem voluptatibus dignissimos </p>
                        </div>
                        <div className="bg-[#151450] hover:bg-[#151450]  p-2 rounded shadow-md leading-8 space-y-2">
                            <i className=""><BiFemaleSign className="text-5xl bg-teal-800 rounded p-2" /></i>
                            <h1 className="card-title text-xl">Business & Product<br /> Concept too</h1>
                            <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio possimus rem voluptatibus dignissimos </p>
                        </div>
                        <div className="bg-[#151450] hover:bg-[#151450] p-2 rounded shadow-md leading-8 space-y-2">
                            <i className=""><FaRegHandshake className="text-5xl bg-red-800 rounded p-2" /></i>
                            <h1 className="card-title text-xl">International Good<br /> Relationship</h1>
                            <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio possimus rem voluptatibus dignissimos </p>
                        </div>
                        <div className="bg-[#151450] hover:bg-[#151450]  p-2 rounded shadow-md leading-8 space-y-2">
                            <i className=""><SiAltiumdesigner className="text-5xl bg-blue-800 rounded p-2" /></i>
                            <h1 className="card-title text-xl">Pixel & Perfect <br/>Design</h1>
                            <p className="text-sm font-light">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio possimus rem voluptatibus dignissimos </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyWeChooseUs;