import { useState, useEffect } from 'react';
import { getFetchData } from '../util/fetch.js';
import React from 'react';
import { Title, SubTitle } from '../components/commons/Titles.jsx';
import Testimonial from '../components/content/Testimonial.jsx';

export default function Testimonials() {    
    const [list, setList] = useState([]);
    useEffect(() => {
        const fetchData = async() => {
            const jsonData = await getFetchData('/content/testimonials');
            setList(jsonData.result);
        }
        fetchData();
    }, []);
    return (
        <section id="testimonial" className="section container">
            <Title title="Testimonial" />
            <SubTitle subTitle="See What they say about me" />
            <ul className="testimonials">
                {list?.map((item, idx)=>
                    <li className="testimonial" key={idx}>
                        <Testimonial item={item} />
                    </li>                                
                )}
            </ul>
        </section> 
    );
}

