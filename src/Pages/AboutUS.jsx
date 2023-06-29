import React from 'react';

const AboutUS = () => {
    return (
        <div>
            <div className="flex items-center justify-between w-[100%] py-10">
                <div className="w-[70%] leading-6 space-y-2">
                    <h1 className="text-sm text-[#725ad9] font-semibold">About Us</h1>
                    <h1 className="text-3xl">We Are Here <br/> For Business Solution Ideas</h1>
                    <p className="text-justify text-sm font-light w-[80%]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto molestiae, excepturi qui aut cupidittate sunt quos illuchitecto molestiae, excepturi qui aut cupiditate sunt ate sunt quos illuchitecto molestiae, excepturi qui aut cupiditate sunt quos illum harum consequm harum consequatur a quaerat consectetur ut?.</p>
                    <button className="bg-[#725ad9] hover:bg-[#644dca] py-2 px-6 rounded">Discover More</button>
                </div>
                <div className="w-[50%]">
                    <img src="Hello.svg" alt="" className="h-[50vh] object-cover"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUS;