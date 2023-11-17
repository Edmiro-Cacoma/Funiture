import { useState } from "react";
import Image from "next/image";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import slideShow from "../utils/data"
import {motion} from 'framer-motion'



const Slideshow = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    function handlePrevious() {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slideShow.length) % slideShow.length);
    }

    function handleNext() {
        setCurrentIndex((nextIndex) => (nextIndex + 1) % slideShow.length);
    }


    const currentSlide = slideShow[currentIndex];

    return (
        <div className="">
            <button className="absolute right-20 top-[107%] md:top-[45%] md:left-4 leading-[5rem] text-[2rem] flex items-center justify-center w-[3rem] h-[3rem] border-[0.1rem] border-solid border-[#244d4d] rounded-full hover:bg-[#244d4d] hover:text-white cursor-pointer" onClick={handlePrevious}>
                <FontAwesomeIcon icon={faAngleLeft} width={30} />
            </button>
            <button className="absolute right-1 top-[110%] md:top-[50%] md:right-4 rounded-full  leading-[5rem] text-[2rem]  w-[3rem] h-[3rem] border-[0.1rem] border-solid border-[#244d4d] flex items-center justify-center  hover:bg-[#244d4d] hover:text-white cursor-pointer transform translate-y-[-50%] shadow-md" onClick={handleNext}>
                <FontAwesomeIcon icon={faAngleRight} width={30} />
            </button>
            <>
                <div className="flex items-center flex-wrap gap-[1.5rem] ">
                    <motion.div className="flex-1 flex-shrink-1 basis-[10rem]">
                        <span className="text-[2rem] text-[#779]">{currentSlide.subtitle}</span>
                        <h3 className="text-[4rem] text-[#244d4d] pt-[0.5rem]">{currentSlide.name}</h3>
                        <p className="text-[1rem] leading-[2] text-[#779] py-[0.5rem]">{currentSlide.description}</p>
                        <Link href='/' className="inline-block my-[1rem] py-[0.3rem] px-[3rem] text-[1.7rem] bg-[#244d4d] text-white rounded-full cursor-pointer hover:bg-[#316868]">
                            shop now
                        </Link>
                    </motion.div>
                    <div className="flex-1 flex-shrink-1  f basis-[10rem]">
                        <Image src={currentSlide.image} alt="" width={548} height={465} />
                    </div>
                </div>
            </>
        </div>
    );
};

export default Slideshow;
