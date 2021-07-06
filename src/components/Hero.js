import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import showcase from '../images/hero_539.png';

const Hero = () => {
    return (
        <section className="hero xl:mx-20">
            <div>
                <img  className="hero-img" src={showcase} alt="hero" />
            </div>
            <div className="overplay bg-gray-200 text-center p-10
            sm:bg-transparent  sm:text-left">
                <p className="bg-white inline-block py-1 px-5 
                text-red-500 font-bold mb-3">
                    Countdown Sale</p>
                <h1 className="font-bold text-3xl mb-2 md: text-sm">Bundle and save up to $430</h1>
                <p className="text">Complete your Surface Pro 7 with choice of select
                    Type Cover and free sleeve
                </p>
                <button className=" bg-red-600 text-white mt-3
                py-2 px-6 hover:bg-red-800">Shop Now</button>
            </div>
        </section>
    )
}

export default Hero
