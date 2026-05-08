import { useState, useEffect } from 'react';
import { getFetchData } from '../util/fetch.js';
import React from 'react';
import { Title, SubTitle } from '../components/commons/Titles.jsx';
import Categories from '../components/content/Categories.jsx';
import Projects from '../components/content/Projects.jsx';

export default function Work() {
    // const { data }  = useOutletContext();
    const [categories, setCategories] = useState([]);
    const [projects, setProjects] = useState([]);
    useEffect( () => {
        const fetchData = async() => {
            const jsonData = await getFetchData("/content/work");
            setCategories(jsonData.result.categories);  // 여기 categories 는 대소문자 구분함.
            setProjects(jsonData.result.projects);
        }
        fetchData();
    }, []);

    return (
        <section id="work" className="section container">
            <Title title="My Work" />
            <SubTitle subTitle="Projects" />
            <Categories categories={categories} />
            <Projects   projects={projects}  />
        </section>
    );
}


