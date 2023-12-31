import React from 'react';
import { Input, Button } from "@material-tailwind/react";

const NewsLetter = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
    return (
        <div className='my-20'>
            <div className="bg-[#1a1955] rounded p-10">
                <div className="text-center space-y-2">
                    <h1 className="text-2xl">Our Newsletter</h1>
                    <p className="pb-3 text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, officia.</p>



                    {/* <div className="relative  w-[50%] m-auto flex flex-col justify-center">
                        <Input
                            type="email"
                            label=" Enter Yor Email"
                            value={email}
                            onChange={onChange}
                            
                            className="pr-20 bg-white outline-none border-0"
                            
                        />
                        <Button
                            size="sm"
                            className="!absolute right-1 top-1 rounded bg-[#725ad9] hover:bg-[#644dca]"
                        >
                           Subscribe
                        </Button>
                    </div> */}

                    {/* input */}
                    
                    <div className="flex flex-col justify-center sm:flex-row items-center">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className=" lg:w-[30%] text-black p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0 sm:mr-2"
                        />
                             <button className="bg-[#725ad9] hover:bg-[#644dca] py-2 px-6 rounded"><p className="text-sm md:text-base">Subscribe</p></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;