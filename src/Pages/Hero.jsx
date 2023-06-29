import React from 'react';

const Hero = () => {
    return (
        <div>
            <div className="flex justify-between items-center py-14">
                <div className="space-y-5 w-[100%]">
                    <h1 className=" text-xl xl:text-4xl 2xl:text-5xl  leading-7">We explore your ability <br /> and employment <br />solutions</h1>
                    <p className="font-light text-sm w-[70%]">Highly tailored it design, management & support services. Sicing off, seed do eluimed tempor Lorem ipsum dolor sit amet..</p>
                    <button className="bg-[#725ad9] hover:bg-[#644dca] py-2 px-6 rounded">Book Now</button>
                </div>
                <div className="image w-[100%]">
                    <img src="Hero2.svg" alt="" className="h-[50vh] w-[100%]"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;