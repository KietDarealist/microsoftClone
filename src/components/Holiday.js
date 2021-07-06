import React from 'react';
import HolidayImg from '../images/this_holiday_539.png'

const Holiday = () => {
    return (
        <section className="hero this-holiday xl:mx-20">
            <div>
                <img className="hero-img" src={HolidayImg} alt="holiday pass"/>
            </div>
            <div className="overplay bg-gray-900 text-center px-10 py-20 text-whit
            sm:bg-transparent
            sm:text-left">
            <h2 className="font-semibold text-xl  mb-2 text-white">
               This holiday, find your joy
            </h2>
            <p className="mb-2 text-white"> 
                Follow the story of Rufus, a pup whose dreams takes
                him to Microsoft worlds like Miecraft, Flight Simulator, 
                Teams and Halo
            </p>
            <button className="mr-4 bg-white text-black py-2 px-5
            hover:underline  
            hover:bg-opacity-80">Watch Now</button>
            
            </div>
        </section>
    )
}

export default Holiday
