import React from 'react';

const AboutUS = () => {
    return (
        <div>
            <div className="md:flex items-center justify-between w-[100%] pb-10 space-y-10">
                <div className="lg:w-[70%] leading-6 space-y-4">
                    <div className="">
                        <h1 className="text-sm text-[#725ad9] font-semibold">About Us</h1>
                        <h1 className="text-2xl md:text-3xl 2xl:text-5xl">We Are Here <br /> For Business Solution Ideas</h1>
                    </div>
                    <p className="text-justify text-sm font-light md:w-[80%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto molestiae, excepturi qui aut cupidittate sunt quos illuchitecto molestiae, excepturi qui aut cupiditate sunt ate sunt quos illuchitecto molestiae, excepturi qui aut cupiditate sunt quos illum harum consequm harum consequatur a quaerat consectetur ut?.</p>
                    <button className="bg-[#725ad9] hover:bg-[#644dca] py-2 px-6 rounded">Discover More</button>
                </div>
                <div className="lg:w-[50%] md:w-full">
                    <img src="Hello.svg" alt="" className="lg:h-[55vh] h-[30vh] md:h-[40vh] m-auto md:m-0 object-cover" />
                </div>
            </div>
        </div>
    );
};

export default AboutUS;