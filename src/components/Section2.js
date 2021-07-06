import React, {useState} from 'react';
import data from '../data/section2';
import '../index.css';

const Section2 = () => {

    const [cards, setCards]= useState(data);


    return (
        <section className=" section-2 md:grid grid-cols-2 
        xl:grid-cols-4 xl:mx-20">
            {cards.map((card)=>{
                const {id, image, title, desc, link}= card
                return (
                    <article key={id} className="p-8">
                        <div className="mb-5">
                            <img src={image} alt="card"/>
                            <h3 className="font-semibold text- mt-2 mb-2">{title}</h3> 
                            <p>{desc}</p>
                            <button className="
                            cursor-pointer text-red-600 font-semibold
                            ">{link}</button>
                        </div>
                    </article>
                )
            })}
        </section>
    )
}

export default Section2
