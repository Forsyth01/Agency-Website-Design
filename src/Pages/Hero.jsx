import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="md:flex justify-between items-center py-14 space-y-10">
                <div className="space-y-5">
                    <h1 className=" text-2xl md:text-3xl 2xl:text-5xl leading-7">We explore your ability <br className='hidden md:flex'/> and employment <br className='hidden md:flex'/>solutions</h1>
                    <p className="text-sm md:text-base font-light w-full md:w-[70%]">Highly tailored it design, management & support services. Sicing off, seed do eluimed tempor Lorem ipsum dolor sit amet..</p>
                    <button className="bg-[#725ad9] hover:bg-[#644dca] py-2 px-6 rounded"><h1 className="text-sm md:text-base">Book Now</h1></button>
                </div>
                <div className="image">
                    <img src="Hero2.svg" alt="" className="md:h-[50vh object-cover w-[100%]"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;